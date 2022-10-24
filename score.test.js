const Score = require('./score')

describe('Score', () => {
  it('returns the score card for a perfect game', () => {
    const perfectGame = {
      1: [10, ],
      2: [10, ],
      3: [10, ],
      4: [10, ],
      5: [10, ],
      6: [10, ],
      7: [10, ],
      8: [10, ],
      9: [10, ],
      10: [10, 10, 10]
    }
    
    const scoreCard = new Score(perfectGame)
    expect(scoreCard.gameTotal()).toBe [
      'frame 1: 30 points',
      'frame 2: 60 points',
      'frame 3: 90 points',
      'frame 4: 120 points',
      'frame 5: 150 points',
      'frame 6: 180 points',
      'frame 7: 210 points',
      'frame 8: 240 points',
      'frame 9: 270 points',
      'frame 10: 300 points'
    ]
  })

  it('returns the score card of a randon game', () => {
    const randomScoreCard = {
      1: [1, 4],
      2: [4, 5],
      3: [6, 4],
      4: [5, 5],
      5: [10, ],
      6: [0, 1],
      7: [7, 3],
      8: [6, 4],
      9: [10, ],
      10: [2, 8, 6]
    }
    const randomGame = new Score(randomScoreCard)
    expect(randomGame.gameTotal()).toBe [
      'frame 1: 5 points',
      'frame 2: 14 points',
      'frame 3: 29 points',
      'frame 4: 49 points',
      'frame 5: 60 points',
      'frame 6: 61 points',
      'frame 7: 77 points',
      'frame 8: 97 points',
      'frame 9: 117 points',
      'frame 10: 133 points'
    ]
  })
})



