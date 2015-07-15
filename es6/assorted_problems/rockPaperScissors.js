/*
Write a function that generates every sequence of throws a single
player could throw over a three-round game of rock-paper-scissors.

Your output should look something like:
   [["rock", "rock", "rock"],
    ["rock", "rock", "paper"],
    ["rock", "rock", "scissors"],
    ["rock", "paper", "rock"],
            ...etc...
     ]

Extra credit:
   - Make your function return answers for any number of rounds, but default
to three rounds if no parameters are given.

Example:
rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

*/
let rockPaperScissors = (rounds = 3) => {
  const sampleThrows = ["rock", "paper", "scissors"];
  let results = [];
  const roundsToGo = rounds;

  let combos = (roundsToGo, playedSoFar) => {

    for(let i = 0; i < sampleThrows.length; i++){
      if(roundsToGo ===0){      //This round has enough throws
        results.push(playedSoFar);
        return;
        }
      }

      for(let i = 0; i< sampleThrows.length; i++){
        let currentPlay = sampleThrows[i];
        combos(roundsToGo-1, playedSoFar.concat(currentPlay));
      }
    };

  combos(rounds,[]);
  return results;
};


