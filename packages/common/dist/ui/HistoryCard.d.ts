import * as React from 'react';
import { CurrentExercises } from '../stores/WorkoutStore';
interface Props {
    header: string;
    currentExercises: CurrentExercises[];
    onPress: () => void;
}
export declare const HistoryCard: React.FC<Props>;
export {};
