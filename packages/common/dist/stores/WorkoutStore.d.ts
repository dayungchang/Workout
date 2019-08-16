import { RootStore } from "./RootStore";
declare type WorkoutDay = 'a' | 'b';
export interface CurrentExercises {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}
interface WorkoutHistory {
    [key: string]: CurrentExercises[];
}
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;
    lastWorkoutType: WorkoutDay;
    currentExercises: CurrentExercises[];
    readonly hasCurrentWorkout: boolean;
    history: WorkoutHistory;
}
export {};
