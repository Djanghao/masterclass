# typescript | scoring in two cycles

**Author:** pink-doublethink
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566814/](https://leetcode.com/problems/stone-game-iii/solutions/3566814/)

---

----
## Approach
---
1. We start with the last stone in the stoneValue array and calculate the optimal score for each position

2. maintain a dynamic programming array dp of size n+1, where dp[i] represents the maximal score difference achievable for the first player (Alice) from position i to the end of the array.

3. Iterate from the penultimate stone to the first stone in reverse order. At each position i we consider all possible moves to take 1, 2 or 3 stones;

4. We compute the current sum by adding the values of the stones at position i and the next k positions, where k varies from 0 to 2. We also update the maxScore difference;

5. Finally, we check the value of dp[0]. If it is greater than 0, Alice wins; if it is less than 0, Bob wins; otherwise it is a draw
----
## Complexity
---
- time complexity is O(n), where n is the length of the stoneValue array. This is because we iterate through the array once to calculate the dynamic programming values.

- the space complexity is O(n). We use an additional array dp of length n+1 to store the dynamic programming values.
----
## Code
----
```
function stoneGameIII(stoneValue: number[]): string {
    const n = stoneValue.length;
    const dp: number[] = Array(n + 1).fill(Number.MIN_SAFE_INTEGER);

    dp[n] = 0;

    for (let i = n - 1; i >= 0; i--) {
        let maxScore = Number.MIN_SAFE_INTEGER;
        let currSum = 0;

        for (let k = 0; k < 3 && i + k < n; k++) {
            currSum += stoneValue[i + k];
            maxScore = Math.max(maxScore, currSum - dp[i + k + 1]);
        }

        dp[i] = maxScore;
    }

    if (dp[0] > 0) {
        return 'Alice';
    } else if (dp[0] < 0) {
        return 'Bob';
    } else {
        return 'Tie';
    }
};
```