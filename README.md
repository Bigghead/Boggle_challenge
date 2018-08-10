This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Boggle

A browser-based version of the game Boggle. If you’re not familiar
with Boggle, it’s a word game where you try to make words from adjacent letters in a grid of
letters. The longer the word, the more points you score.

# Starting Branch
`development` - main branch

### Features

**Grid**
- [ x ] 5 x 5 grid of shuffled and randomized characters

**Core Gameplay**
- [ x ] Clicking any die when no dice are currently selected selects that die.
- [ x]  Selecting a die changes its color and adds its letter to the “Current Word” display.
- [ x ] Clicking on a non-selected die adjacent to the last selected die (diagonals included)
      additionally selects that die.
- [ x ] The most recently selected die can be deselected by clicking on it, which removes its
      letter from the “Current Word” display.
- [ x ] This process can be repeated to deselect all selected dice by clicking them in reverse
      order.
- [ x ] Clicking the “Submit Word” button adds the word to the “Score” list along with its point
      value and updates the total score.
- [ x ] Submitting a word deselects all currently selected dice.
- [ x ] Dictionary validation of words ( kind of works, need several characters for more accuracy)




## Getting Started

- [Available Scripts](#available-scripts)
  - [npm install] (#npm-install)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required npm packages.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

