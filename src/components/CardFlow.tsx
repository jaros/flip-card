import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  LinearProgress,
  Fab,
  Stack,
  Paper,
  useTheme,
  Chip,
} from '@mui/material';
import {
  NavigateBefore,
  NavigateNext,
  Shuffle,
  Refresh,
} from '@mui/icons-material';
import Flashcard from './Flashcard';
import { Word } from '../types';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';

interface CardFlowProps {
  words: Word[];
}

const CardFlow: React.FC<CardFlowProps> = ({ words }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledWords, setShuffledWords] = useState(words);

  const currentWord = shuffledWords[currentIndex];
  const progress = ((currentIndex + 1) / shuffledWords.length) * 100;

  const handleNext = () => {
    if (currentIndex < shuffledWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleShuffle = () => {
    const shuffled = [...shuffledWords].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Add keyboard navigation
  useKeyboardNavigation({
    onNext: handleNext,
    onPrevious: handlePrevious,
    onFlip: handleFlip,
    onShuffle: handleShuffle,
    onRestart: handleRestart,
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        background: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`,
      }}
    >
      {/* Header */}
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: 3,
          mb: 4,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          📚 Vocabulary Cards
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Card {currentIndex + 1} of {shuffledWords.length}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 2,
            height: 8,
            borderRadius: 4,
          }}
        />
      </Paper>

      {/* Main Card */}
      <Box sx={{ mb: 4, width: '100%', maxWidth: 500 }}>
        <Flashcard
          word={currentWord}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
      </Box>

      {/* Navigation Controls */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          mb: 3,
        }}
      >
        <IconButton
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          size="large"
          sx={{
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <NavigateBefore />
        </IconButton>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mx: 2, minWidth: 100, textAlign: 'center' }}
        >
          {currentIndex + 1} / {shuffledWords.length}
        </Typography>

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === shuffledWords.length - 1}
          size="large"
          sx={{
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <NavigateNext />
        </IconButton>
      </Stack>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2}>
        <Fab
          color="secondary"
          aria-label="shuffle"
          onClick={handleShuffle}
          size="medium"
        >
          <Shuffle />
        </Fab>
        <Fab
          color="primary"
          aria-label="restart"
          onClick={handleRestart}
          size="medium"
        >
          <Refresh />
        </Fab>
      </Stack>

      {/* Progress Summary */}
      <Paper
        elevation={1}
        sx={{
          mt: 4,
          p: 2,
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {currentIndex === shuffledWords.length - 1
            ? '🎉 You\'ve reached the last card!'
            : `${shuffledWords.length - currentIndex - 1} cards remaining`}
        </Typography>
      </Paper>

      {/* Keyboard Shortcuts Help */}
      <Paper
        elevation={1}
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          maxWidth: 600,
        }}
      >
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ⌨️ Keyboard Shortcuts:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: 1 }}
        >
          <Chip label="→ / Space: Next" size="small" variant="outlined" />
          <Chip label="← : Previous" size="small" variant="outlined" />
          <Chip label="↑ / ↓ / Enter: Flip" size="small" variant="outlined" />
          <Chip label="S: Shuffle" size="small" variant="outlined" />
          <Chip label="R: Restart" size="small" variant="outlined" />
        </Stack>
      </Paper>
    </Box>
  );
};

export default CardFlow; 