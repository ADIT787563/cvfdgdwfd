import { useState } from "react";
import { Timer, ChefHat, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickRecipe {
  name: string;
  time: number; // in seconds
  description: string;
  steps: string[];
  category: "sauté" | "roast" | "grill" | "steam";
  emoji: string;
}

interface QuickTimerRecipesProps {
  onStartTimer: (seconds: number, recipeName: string) => void;
}

export default function QuickTimerRecipes({ onStartTimer }: QuickTimerRecipesProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<QuickRecipe | null>(null);

  const quickRecipes: QuickRecipe[] = [
    {
      name: "Perfect Sautéed Mushrooms",
      time: 300, // 5 minutes
      description: "Golden brown mushrooms with perfect texture",
      category: "sauté",
      emoji: "🍳",
      steps: [
        "Heat oil in pan over medium-high heat",
        "Add cleaned, sliced mushrooms",
        "Don't stir for first 2 minutes",
        "Stir and cook until golden brown",
        "Season with salt and herbs"
      ]
    },
    {
      name: "Roasted Mushroom Caps",
      time: 900, // 15 minutes
      description: "Tender, flavorful roasted mushrooms",
      category: "roast",
      emoji: "🔥",
      steps: [
        "Preheat oven to 400°F (200°C)",
        "Clean mushroom caps, remove stems",
        "Brush with olive oil and seasonings",
        "Place gill-side up on baking sheet",
        "Roast until tender and juicy"
      ]
    },
    {
      name: "Grilled Mushroom Steaks",
      time: 480, // 8 minutes
      description: "Smoky grilled mushrooms with char",
      category: "grill",
      emoji: "🔥",
      steps: [
        "Preheat grill to medium heat",
        "Brush mushrooms with oil",
        "Grill 4 minutes per side",
        "Don't press down while cooking",
        "Let rest 2 minutes before serving"
      ]
    },
    {
      name: "Steamed Mushroom Medley",
      time: 420, // 7 minutes
      description: "Healthy steamed mushrooms retaining nutrients",
      category: "steam",
      emoji: "💨",
      steps: [
        "Bring water to boil in steamer",
        "Arrange mushrooms in steamer basket",
        "Cover and steam for 5-7 minutes",
        "Check for tenderness with fork",
        "Season immediately after steaming"
      ]
    }
  ];

  const getCategoryColor = (category: QuickRecipe["category"]) => {
    const colors = {
      sauté: "bg-orange-50 border-orange-200 text-orange-800",
      roast: "bg-red-50 border-red-200 text-red-800",
      grill: "bg-purple-50 border-purple-200 text-purple-800",
      steam: "bg-blue-50 border-blue-200 text-blue-800"
    };
    return colors[category];
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds === 0) {
      return `${minutes} min`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-green-600" />
            Quick Timer Recipes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickRecipes.map((recipe, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedRecipe?.name === recipe.name
                    ? 'border-green-400 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedRecipe(selectedRecipe?.name === recipe.name ? null : recipe)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{recipe.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(recipe.category)}`}>
                        {recipe.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{formatTime(recipe.time)}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
                
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartTimer(recipe.time, recipe.name);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  <Timer className="w-4 h-4 mr-2" />
                  Start {formatTime(recipe.time)} Timer
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedRecipe && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              {selectedRecipe.emoji}
              {selectedRecipe.name} - Step by Step
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {selectedRecipe.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-green-800 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-green-100 rounded-lg">
              <div className="flex items-center gap-2 text-green-800">
                <Timer className="w-4 h-4" />
                <span className="font-semibold">Ready to start cooking?</span>
              </div>
              <Button
                onClick={() => onStartTimer(selectedRecipe.time, selectedRecipe.name)}
                className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                Start {formatTime(selectedRecipe.time)} Timer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}