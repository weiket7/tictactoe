# Get started

## Pre-requisites

Node 16, not node 17 as there might be `Error: digital envelope routines::unsupported` which can be fixed but don't want to complicate things.

## Why React?

Using any frontend framework like React and Vue enables the code to be separated into components, which is easier to maintain and scale. 

I'm familiar with pure Javascript, jQuery, React and Vue. I chose React because most frontend developers know React and in real working environment it'd be easier to hire them. 

This application was built using React 17, the current version.

## To run

### `npm i`

### `npm start`

It will open http://localhost:3000 in browser.

# Frontend enhancements

1. When all cells are selected but there is no winner, show "Draw" message and disable cells. This was a bug in original version where nothing happened, although when player click a cell game will restart. 
2. Logic to check winner is not hard-coded and more dynamic.
3. The game can now support different grid sizes 2x2, 3x3, 4x4 etc with changes to CSS.
4. When player click selected cell, instead of Javascript alert which requires one click to remove, a message is shown above Restart button.
5. Player scores above tic tac toe is shown as left and right (previously up and down), it is more user-friendly as it's similar to how scores are shown in sports.
6. Bootstrap has been upgraded from 2.3 to 5.1.3, this enables the application to make use of latest Bootstrap code and features.
7. When there is winner, player score is highlighted in green.
8. Current player is highlighted in blue at score area.
9. Players can restart by pressing Enter key.

# Potential ideas

1. Assuming grid of 3x3 is kept, players can select cells using keyboard 1-9.