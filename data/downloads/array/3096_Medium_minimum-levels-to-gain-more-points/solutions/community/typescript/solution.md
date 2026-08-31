# Solve using cumulative array of all the scores

**Author:** jaimeloeuf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/5852805/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/5852805/)

---

# Approach
Solve by creating a prefix sum / cumulative sum array for the scores, and finding the first mid point using this cumulative array, where alice is able to score more points than bob.

# Complexity
TC is O(n) where n is the number of elements in `possible`.
SC is O(n) where n is the number of elements in `possible`.

# Code
```typescript []
function minimumLevels(possible: number[]): number {
  const cumulativeArray = new Array(possible.length + 1);
  cumulativeArray[0] = 0;

  for (let i = 1; i <= possible.length; i++) {
    cumulativeArray[i] =
      cumulativeArray[i - 1] + (possible[i - 1] === 0 ? -1 : 1);
  }

  // Loop starting from 1 since the first element is a fake 0 value
  // Loop up till -1 because bob must play at least one game
  for (let i = 1; i < cumulativeArray.length - 1; i++) {
    if (
      cumulativeArray[i] - cumulativeArray[0] >
      cumulativeArray.at(-1) - cumulativeArray[i]
    ) {
      return i;
    }
  }

  return -1;
}
```