import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  address?: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to get current user
  const { data: user, isLoading, refetch } = useQuery<User>({
    queryKey: ['/api/auth/user'],
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 0, // Always consider data stale to ensure fresh fetches
  });

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      return apiRequest('POST', '/api/auth/login', { username, password });
    },
    onSuccess: async (data: any) => {
      // Force update the query cache with the logged-in user
      queryClient.setQueryData(['/api/auth/user'], data.user);
      
      // Trigger a complete refetch to ensure state consistency
      setTimeout(async () => {
        await queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
        await refetch();
      }, 100);
      
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid username or password",
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return apiRequest('POST', '/api/auth/logout', {});
    },
    onSuccess: () => {
      queryClient.setQueryData(['/api/auth/user'], null);
      queryClient.clear();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    },
    onError: () => {
      // Force logout even if request fails
      queryClient.setQueryData(['/api/auth/user'], null);
      queryClient.clear();
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterData) => {
      return apiRequest('POST', '/api/auth/register', userData);
    },
    onSuccess: async (data: any) => {
      // Automatically log in the user after successful registration
      if (data.user) {
        queryClient.setQueryData(['/api/auth/user'], data.user);
        
        // Trigger a complete refetch to ensure state consistency
        setTimeout(async () => {
          await queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
          await refetch();
        }, 100);
      }
      toast({
        title: "Registration Successful",
        description: "Welcome to FreshcoMushroom!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
    },
  });

  const login = async (username: string, password: string) => {
    await loginMutation.mutateAsync({ username, password });
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const register = async (userData: RegisterData) => {
    await registerMutation.mutateAsync(userData);
  };

  const value: AuthContextType = {
    user: user || null,
    login,
    logout,
    register,
    isLoading: isLoading || loginMutation.isPending || logoutMutation.isPending || registerMutation.isPending,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}