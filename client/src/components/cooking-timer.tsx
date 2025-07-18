import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CookingTimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
  className?: string;
}

export default function CookingTimer({ 
  initialMinutes = 5, 
  onComplete,
  className = "" 
}: CookingTimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(initialMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Calculate progress percentage
  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;
  const circumference = 2 * Math.PI * 45; // radius of 45px
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Create mushroom growth stages based on progress
  const getMushroomStage = () => {
    if (progress < 25) return "🌱"; // Seed/sprout
    if (progress < 50) return "🍄‍🟫"; // Small mushroom
    if (progress < 75) return "🍄"; // Medium mushroom
    return "🍄✨"; // Fully grown with sparkles
  };

  const getStageText = () => {
    if (progress < 25) return "Germinating...";
    if (progress < 50) return "Growing stem...";
    if (progress < 75) return "Forming cap...";
    if (progress === 100) return "Ready to harvest!";
    return "Maturing...";
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            onComplete?.();
            playCompletionSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, onComplete]);

  const playCompletionSound = () => {
    // Create a simple beep sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log("Audio not supported");
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      setIsCompleted(false);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsCompleted(false);
    const newTotalTime = minutes * 60 + seconds;
    setTotalTime(newTotalTime);
    setTimeLeft(newTotalTime);
  };

  const setCustomTime = () => {
    const newTotalTime = minutes * 60 + seconds;
    setTotalTime(newTotalTime);
    setTimeLeft(newTotalTime);
    setIsRunning(false);
    setIsCompleted(false);
  };

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
          <span className="hidden sm:inline">Mushroom Cooking Timer</span>
          <span className="sm:hidden">Cooking Timer</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
        {/* Timer Display */}
        <div className="relative flex items-center justify-center">
          <svg className="transform -rotate-90 w-28 h-28 sm:w-32 sm:h-32">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={`text-green-500 transition-all duration-1000 ease-linear ${isCompleted ? 'animate-pulse' : ''}`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl sm:text-3xl mb-1 animate-bounce">
              {getMushroomStage()}
            </div>
            <div className={`text-lg sm:text-xl font-bold ${isCompleted ? 'text-green-600 animate-pulse' : 'text-gray-700'}`}>
              {formatTime(timeLeft)}
            </div>
            <div className="text-xs text-gray-500 mt-1 text-center px-2">
              {getStageText()}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Timer Controls */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {!isRunning ? (
            <Button 
              onClick={startTimer} 
              disabled={timeLeft === 0}
              className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-3 sm:px-4 py-2"
              size="sm"
            >
              <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Start</span>
              <span className="sm:hidden">▶</span>
            </Button>
          ) : (
            <Button 
              onClick={pauseTimer}
              variant="outline"
              className="text-sm sm:text-base px-3 sm:px-4 py-2"
              size="sm"
            >
              <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Pause</span>
              <span className="sm:hidden">⏸</span>
            </Button>
          )}
          
          <Button 
            onClick={resetTimer}
            variant="outline"
            className="text-sm sm:text-base px-3 sm:px-4 py-2"
            size="sm"
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Reset</span>
            <span className="sm:hidden">↻</span>
          </Button>
        </div>

        {/* Time Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Set Timer:</label>
          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
                className="text-center"
                disabled={isRunning}
              />
              <label className="text-xs text-gray-500 text-center block mt-1">Min</label>
            </div>
            <div className="flex-1">
              <Input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value) || 0))}
                className="text-center"
                disabled={isRunning}
              />
              <label className="text-xs text-gray-500 text-center block mt-1">Sec</label>
            </div>
            <Button 
              onClick={setCustomTime}
              disabled={isRunning}
              variant="outline"
              className="self-start"
            >
              Set
            </Button>
          </div>
        </div>

        {/* Completion Message */}
        {isCompleted && (
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl mb-2">🎉</div>
            <div className="text-green-800 font-semibold">Timer Complete!</div>
            <div className="text-green-600 text-sm">Your mushrooms are ready!</div>
          </div>
        )}

        {/* Quick Timer Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setMinutes(1);
              setSeconds(0);
              setCustomTime();
            }}
            disabled={isRunning}
          >
            1 min
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setMinutes(5);
              setSeconds(0);
              setCustomTime();
            }}
            disabled={isRunning}
          >
            5 min
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setMinutes(10);
              setSeconds(0);
              setCustomTime();
            }}
            disabled={isRunning}
          >
            10 min
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}