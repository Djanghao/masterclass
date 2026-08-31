# Step-by-Step Guide: JavaScript Code with Comments and Detailed Explanation

**Author:** santosh-setty
**Votes:** 27
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3483505/](https://leetcode.com/problems/dota2-senate/solutions/3483505/)

---

# Intuition
The problem requires us to simulate a game-like situation where two parties are competing, and the outcome of the game depends on the actions taken by each party. In this case, the two parties are represented by the characters 'R' and 'D' in the given string "senate", and the goal is to determine which party will win the game.

The game is played in rounds, and each senator can either ban another senator's right to vote or announce the victory if they are the last one standing from their party. The game ends when there are no senators left with the right to vote.

# Approach
1. First, we create two empty arrays, radiant and dire, to store the indices of the senators from each party.
2. We loop through the **senate** string and add the index of each senator to their respective party array. If the current character is 'R', we push the current index to the **radiant** array, and if it is 'D', we push it to the **dire** array.
3. We then enter a loop that runs until either the **radiant** or **dire** array becomes empty. In each iteration of the loop, we compare the index of the first senator from each party.
4. If the index of the first radiant senator is smaller than that of the first dire senator, then the radiant senator can ban the dire senator's right to vote. We remove the first element of the **dire** array using the **shift** method, and add the index of the next radiant senator to the end of the radiant array using the **push** method.
5. If the index of the first dire senator is smaller than that of the first radiant senator, then the dire senator can ban the radiant senator's right to vote. We remove the first element of the **radiant** array using the shift method, and add the index of the next **dire** senator to the end of the dire array using the push method.
6. We repeat **steps 4 and 5** until either the **radiant** or **dire** array becomes **empty**.
7. Finally, we check whether the **radiant** array is **empty** or **not**. If it is **empty**, then the **dire party** has successfully banned all the **radiant senators**, and vice versa. We return the appropriate **string** indicating the **victorious** party.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n)

# Code
```
/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  // Initialize two arrays to keep track of the indices of the senators from each party.
  let radiant = [];
  let dire = [];
  const n = senate.length;

  // Loop through each senator in the given order.
  for (let i = 0; i < n; i++) {
    // If the senator is from the Radiant party, add their index to the radiant array
    // with an offset of n, representing their vote in the next round.
    if (senate[i] === 'R') {
      radiant.push(i + n);
    } else {
      // If the senator is from the Dire party, add their index to the dire array
      // with an offset of n, representing their vote in the next round.
      dire.push(i + n);
    }
  }

  // Loop through each round until one party has all the votes.
  while (radiant.length > 0 && dire.length > 0) {
    // Compare the indices of the first senator from each party.
    if (radiant[0] < dire[0]) {
      // If the Radiant senator's index is less than the Dire senator's index,
      // add their index to the end of the radiant array with an offset of n,
      // representing their vote in the next round.
      radiant.push(radiant[0] + n);
    } else {
      // If the Dire senator's index is less than or equal to the Radiant senator's index,
      // add their index to the end of the dire array with an offset of n,
      // representing their vote in the next round.
      dire.push(dire[0] + n);
    }
    // Remove the first senator from each party's array, since they have voted in this round.
    radiant.shift();
    dire.shift();
  }

  // Return the winner of the voting procedure based on which party has remaining votes.
  return (radiant.length > 0) ? "Radiant" : "Dire";
}

```