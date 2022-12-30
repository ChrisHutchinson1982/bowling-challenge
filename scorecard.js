const Game = require("./game");

class Scorecard {
  constructor(game) {
    this.game = game.frames();
    // this.framesWithRolls = game.framesWithRolls();
  }

  scoreByFrame() {
    let frameScores = [];

    this.game.forEach((frame, index) => {
      this.nextIndex = index + 1;
      frameScores.push(frame.sum() + this.#bonusPoints(frame));
    });

    return frameScores;
  }

  totalScore() {
    const sum = this.scoreByFrame().reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }

  // addScores(frame) {
  //   frameScores.push(frame.sum() + bonusPoints(frame));
  // }

  #bonusPoints(frame) {
    let bonusPoints = 0;
    const notFrameTen = this.nextIndex < 10;

    if (frame.strike() === true && notFrameTen === true) {
      bonusPoints = this.#nextTwoRolls();
    } else if (frame.spare() === true && this.nextIndex < 10) {
      bonusPoints = this.#nextRoll();
    }

    return bonusPoints;
  }

  #nextTwoRolls() {
    const nextTwoFrames = [];
    const secondaryIndex = this.nextIndex + 1;

    nextTwoFrames.push(this.game[this.nextIndex].scores());

    if (secondaryIndex < 10) {
      nextTwoFrames.push(this.game[secondaryIndex].scores());
    }

    return nextTwoFrames.flat()[0] + nextTwoFrames.flat()[1];
  }

  #nextRoll() {
    return this.game[this.nextIndex].scores()[0];
  }
}

module.exports = Scorecard;
