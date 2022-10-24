class Score {
  constructor(scorecard) {
    this.scoreCard = scorecard
    this.points= 0
    this.bonusPoints = 0;
  }

  framePoints = (rolls) => {  //calculates points (exluding bonus points) for each individual frame
    if (rolls[0] === 10) {
      this.points += 10
      return 'strike';
    } else if ((rolls[0] + rolls[1]) === 10) {
      this.points += 10
      return 'spare';
    } else {
      this.points += (rolls[0] + rolls[1]);
    }
  }
  
  frameTotal = (frame) => {  //calculates the total number of points (normal points + bonus points) for each invdiual frame
    let result = this.framePoints(frame[1]);
    
    if (result === 'strike') {
      this.strikeBonus(frame);
    } else if (result === 'spare' ) {
      this.spareBonus(frame);
    }
    return `frame ${frame[0]}: ${this.points + this.bonusPoints} points`;
  }

  spareBonus = (frame) => { //calculates the number of bonus points obtained for an individual frame for a spare
    if (frame[0] < 10) {
      let nextFrame = parseInt(frame[0]) + 1
      this.bonusPoints += this.scoreCard[nextFrame][0];
    } else if (frame[0] == 10) {
      this.bonusPoints += parseInt(frame[1][2]) ;
    }
  }

  strikeBonus = (frame) => { //calculates the number of bonus points obtained for an individual frame for a strike
    let nextFrame = parseInt(frame[0]) + 1
    let thirdFrame = parseInt(frame[0]) + 2

    if (frame[0] < 9) {
      this.frameUnderNine(nextFrame, thirdFrame);
    } else if (frame[0] == 9) {
      this.bonusPoints += this.scoreCard[nextFrame][0] + this.scoreCard[nextFrame][1];
    } else if ((frame[0] == 10)) {
      this.bonusPoints += parseInt(frame[1][2]) + parseInt(frame[1][2]);
    }
  }

  frameUnderNine = (nextFrame, thirdFrame) => { // method called within the strikeBonus method
    if ((this.scoreCard[nextFrame][0] == 10) && (this.scoreCard[thirdFrame][0] === 10)) {
      this.bonusPoints += this.scoreCard[nextFrame][0] + this.scoreCard[thirdFrame][0];
    } else if ((this.scoreCard[nextFrame][0] == 10) && (this.scoreCard[thirdFrame][0] != 10)) {
      this.bonusPoints += this.scoreCard[nextFrame][0] + this.scoreCard[thirdFrame][0] + scoreCard[thirdFrame][1];
    } else if (this.scoreCard[nextFrame][0] != 10) {
      this.bonusPoints += this.scoreCard[nextFrame][0] + this.scoreCard[nextFrame][1];
    }
  }

  gameTotal() { //calculates the total points for the game which is broken down by each frame
    console.log(Object.entries(this.scoreCard).map(this.frameTotal));
  }
}

module.exports = Score;