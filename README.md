# 📚 Vocabulary Flashcards

A modern, interactive flashcard application built with React.js, TypeScript, and Material-UI for learning new vocabulary words.

## ✨ Features

- **Interactive Flashcards**: Click to flip cards and reveal definitions
- **Smooth Animations**: Beautiful 3D flip animations with CSS transforms
- **Progress Tracking**: Visual progress bar and card counter
- **Navigation Controls**: Next/previous buttons with smart disable states
- **Keyboard Navigation**: Full keyboard support for efficient studying
- **Shuffle & Restart**: Randomize card order and restart sessions
- **Difficulty Indicators**: Color-coded difficulty levels (Easy, Medium, Hard)
- **Category Tags**: Organized vocabulary by topic areas
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional design with Material-UI components

## 🎮 How to Use

### Mouse/Touch Controls
- **Click the card** to flip between word and definition
- **Use navigation arrows** to move between cards
- **Click shuffle button** (🔀) to randomize card order
- **Click restart button** (🔄) to start over

### Keyboard Shortcuts
- **→ or Space**: Next card
- **←**: Previous card
- **↑, ↓, or Enter**: Flip current card
- **S**: Shuffle cards
- **R**: Restart session

## 🚀 Getting Started

### Demo
https://courageous-cendol-54707b.netlify.app

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── Flashcard.tsx       # Individual flashcard component
│   └── CardFlow.tsx        # Main card navigation component
├── data/
│   └── sampleWords.ts      # Sample vocabulary data
├── hooks/
│   └── useKeyboardNavigation.ts # Keyboard controls hook
├── types/
│   └── index.ts            # TypeScript interfaces
└── App.tsx                 # Main application component
```

## 🎨 Customization

### Adding New Words
Edit `src/data/sampleWords.ts` to add your own vocabulary:

```typescript
{
  id: 11,
  front: "Your Word",
  back: "Definition of your word",
  difficulty: 'medium', // 'easy', 'medium', or 'hard'
  category: 'Your Category'
}
```

### Styling
The app uses Material-UI with a custom theme. Modify the theme in `src/App.tsx` to change colors, fonts, and other design elements.

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Material-UI (MUI)** - UI component library
- **Emotion** - CSS-in-JS styling
- **React Hooks** - State management and side effects

## 📱 Features by Category

### Learning Features
- Card flipping animation for reveal/hide
- Progress tracking with visual indicators
- Difficulty color coding
- Category organization

### Navigation Features
- Previous/next navigation
- Keyboard shortcuts
- Shuffle functionality
- Restart capability
- Smart button states

### UI/UX Features
- Responsive design
- Smooth animations
- Modern Material Design
- Accessibility considerations
- Touch-friendly interface

## 🎯 Future Enhancements

- [ ] Add spaced repetition algorithm
- [ ] User progress tracking and statistics
- [ ] Multiple deck support
- [ ] Import/export functionality
- [ ] Audio pronunciation
- [ ] Dark mode toggle
- [ ] Study session timer
- [ ] Performance analytics

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Happy Learning! 📚✨**
