import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  onFlip: () => void;
  onShuffle: () => void;
  onRestart: () => void;
}

const useKeyboardNavigation = ({
  onNext,
  onPrevious,
  onFlip,
  onShuffle,
  onRestart,
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'Enter':
          event.preventDefault();
          onFlip();
          break;
        case 's':
        case 'S':
          event.preventDefault();
          onShuffle();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          onRestart();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onNext, onPrevious, onFlip, onShuffle, onRestart]);
};

export default useKeyboardNavigation; 