# JS/TS Simple solution

**Author:** jamauss
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3694869/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3694869/)

---

Just go through the numbers array and check the previous 2 elements to get the correct score according to the requirements and then compare the two scores at the end to return 0, 1 or 2.

# Code
```
const isWinner = (player1: number[], player2: number[]): number => {

    let player1Score = 0;
    let player2Score = 0;

    const getScoreFromNumbers = (numbers:number[]): number => {

        let score = 0;

        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i - 1] === 10 || numbers[i - 2] === 10) {
                score += numbers[i] * 2;
            } else {
                score += numbers[i];
            }
        }

        return score;
    };

    player1Score = getScoreFromNumbers(player1);
    player2Score = getScoreFromNumbers(player2);
    
    if(player1Score === player2Score) return 0;

    return player1Score > player2Score ? 1 : 2;

};
```
See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode