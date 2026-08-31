# O(n) solution through bit manipulation

**Author:** glasseyes
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3115202/](https://leetcode.com/problems/game-of-nim/solutions/3115202/)

---

This solution uses XOR to create the _nimsum_ value from all the piles. If the starting player (Alice) has a _nimsum_ value of 0, they will always create a non-zero _nimsum_ for the next player (Bob).

Assuming the players always make an optimum move, if a player has a configuration that yealds a non-zero _nimsum_, they are unable to make any operations that would yeald a non-zero _nimsum_ for their opponent, therefore, if the initial state is _nimsum_ of 0, the first player wins. If not, the second player wins.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
function nimGame(piles: number[]): boolean {
    let count = 0;

    for (let pile of piles) {
        count ^= pile;
    }

    return count !== 0;
};
```