export interface Word {
  id: number;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface CardProgress {
  currentIndex: number;
  isFlipped: boolean;
  showAnswer: boolean;
} 