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

let rockPaperScissors = (rounds=3)=> {


  const sampleThrows = ["rock", "paper", "scissors"];
  let round = [];
  let results = [];
  let roundsToGo = rounds;


  let recurse = (roundsToGo) => {

    for(let i = 0; i < sampleThrows.length; i++){
      if(round.length === rounds){      //This round has enough throws
        results.push(round);
        print("Round completed", round);
        round = [];

        if(results.length === rounds){  //All the rounds has been completed
          print("All rounds completed: ", results);
          return results;
        }
      }
      else{
        round.push(sampleThrows[i]);
        print("Building round throw: ", round);
      }
      //recurse(roundsToGo-1);
    }
  }

  recurse(rounds);


};
