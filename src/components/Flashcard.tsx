import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  styled,
  useTheme,
} from '@mui/material';
import { Word } from '../types';

interface FlashcardProps {
  word: Word;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlipCardContainer = styled(Box)({
  perspective: '1000px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const FlipCard = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  height: 280,
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s ease-in-out',
  cursor: 'pointer',
}));

const CardSide = styled(Card)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
}));

const CardFront = styled(CardSide)({
  transform: 'rotateY(0deg)',
});

const CardBack = styled(CardSide)({
  transform: 'rotateY(180deg)',
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'success';
    case 'medium': return 'warning';
    case 'hard': return 'error';
    default: return 'default';
  }
};

const Flashcard: React.FC<FlashcardProps> = ({ word, isFlipped, onFlip }) => {
  const theme = useTheme();

  return (
    <FlipCardContainer>
      <FlipCard
        onClick={onFlip}
        sx={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <CardFront>
          <CardContentStyled>
            <Box mb={2}>
              <Chip
                label={word.category}
                color="primary"
                variant="outlined"
                size="small"
              />
            </Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                wordBreak: 'break-word',
              }}
            >
              {word.front}
            </Typography>
            <Box mt={3}>
              <Chip
                label={word.difficulty}
                color={getDifficultyColor(word.difficulty) as any}
                size="small"
              />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, fontStyle: 'italic' }}
            >
              Click to reveal definition
            </Typography>
          </CardContentStyled>
        </CardFront>

        {/* Back of card */}
        <CardBack>
          <CardContentStyled>
            <Box mb={2}>
              <Chip
                label={word.category}
                color="primary"
                variant="outlined"
                size="small"
              />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              {word.front}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.6,
                fontSize: '1.1rem',
              }}
            >
              {word.back}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, fontStyle: 'italic' }}
            >
              Click to flip back
            </Typography>
          </CardContentStyled>
        </CardBack>
      </FlipCard>
    </FlipCardContainer>
  );
};

export default Flashcard; 