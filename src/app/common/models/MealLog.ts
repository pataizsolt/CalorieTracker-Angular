export interface MealLog {
    id: string;
    date: number;
    food: {
        id: string;
        name: string;
        calories: number;
        carb: number;
        fat: number;
        protein: number;
    }
    
}