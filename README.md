# Bowling Challenge

## Solo Project

In week 6 of the Makers course, we started to learn our second language, JavaScript.

In this module, we began to learn the basics of Javascript by pairing through a series of exercises, either building on previous knowledge or discovering new concepts.

## Learning objectives

- Test-drive a simple Javascript program using Node.
- Explain how asynchronous programming is different from synchronous, blocking
  programming.
- Apply a coherent process to learn a new language.

As a weekend solo project, we were tasked to build a more complex coding challenge using all of these new concepts.

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

See [instructions](instructions.md) for full details.

# How far did I get?

I was able to TDD a working solution so a score can be calculated in any scoring scenario and at any point of game.

- Features
  - [ ] Gutter game
  - [ ] One frame
  - [ ] Multiple frames
  - [ ] Spares
  - [ ] Strikes
  - [ ] Final Frame

## Installation/Usage Instructions in README

See instructions for how to download and run the tests:

```sh
$ git clone https://github.com/ChrisHutchinson1982/bowling-challenge.git
$ cd bowling-challenge
$ jest
```

## Approach

- Object-Oriented Design:
  - Frame - determines frame attributes such as strike, spare etc.
  - Game - adds each role to a frame (taken in account that frame size differences for strikes and frame 10) and then adds the frame to the game.
  - Scorecard - initialised by an instance of game and provides a total score based on scoring methodology.
- Test-driving using Jest: Green on all integration and unit tests.
- Debugging: Using debugging techniques and error message info.
- Version control: Git and Github
- Language: Node.js

## Further considerations

- Potential to add some additional unit class tests using doubles to enable game and scorecard classes to be tested in isolation.
- Create a UserInterface class, allowing you to run a game from the command line.
