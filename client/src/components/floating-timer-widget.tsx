import { useState, useEffect } from "react";
import { Timer, X, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FloatingTimerWidgetProps {
  isVisible: boolean;
  onClose: () => void;
  initialSeconds?: number;
}

export default function FloatingTimerWidget({ 
  isVisible, 
  onClose, 
  initialSeconds = 300 
}: FloatingTimerWidgetProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            // Play completion sound
            try {
              const audio = new Audio();
              audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAxQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEHLYHO8diJNwcZaLvt559NEAwQp+PwtmMbBjiS1/LNeSsFJHjG8N2QQAoUXrTp66hVFAlFn+DyvmwhBDuIzO/SfCEH";
              audio.play().catch(() => {
                // Fallback if audio doesn't work
                console.log("Timer completed!");
              });
            } catch (error) {
              console.log("Timer completed!");
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getMushroomEmoji = () => {
    const progress = ((initialSeconds - timeLeft) / initialSeconds) * 100;
    if (progress < 25) return "🌱";
    if (progress < 50) return "🍄‍🟫";
    if (progress < 75) return "🍄";
    return isCompleted ? "🍄✨" : "🍄";
  };

  const toggleTimer = () => {
    if (isCompleted) {
      setTimeLeft(initialSeconds);
      setIsCompleted(false);
      setIsRunning(false);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setTimeLeft(initialSeconds);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-slideInUp">
      <Card className={`w-56 sm:w-64 shadow-xl border-2 ${isCompleted ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-white'}`}>
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-sm text-gray-900">Cooking Timer</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="h-6 w-6 p-0 hover:bg-gray-100"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="text-center mb-3">
            <div className="text-2xl mb-1">{getMushroomEmoji()}</div>
            <div className={`text-xl font-bold ${isCompleted ? 'text-green-600' : 'text-gray-900'}`}>
              {formatTime(timeLeft)}
            </div>
            {isCompleted && (
              <div className="text-sm text-green-600 font-medium">Ready! 🎉</div>
            )}
          </div>

          <div className="flex justify-center gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={toggleTimer}
              className="flex-1"
            >
              {isCompleted ? (
                <RotateCcw className="w-3 h-3 mr-1" />
              ) : isRunning ? (
                <Pause className="w-3 h-3 mr-1" />
              ) : (
                <Play className="w-3 h-3 mr-1" />
              )}
              {isCompleted ? "New" : isRunning ? "Pause" : "Start"}
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={resetTimer}
              disabled={timeLeft === initialSeconds && !isRunning}
            >
              <RotateCcw className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}