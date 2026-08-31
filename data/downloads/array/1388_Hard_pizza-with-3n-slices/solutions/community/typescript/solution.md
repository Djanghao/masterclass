# [TypeScript] Easy to understand w/ comments DP

**Author:** chrisjsherm
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/2821592/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/2821592/)

---

```
function maxSum(slices: number[], maxPicks: number): number {
  const sliceCount = slices.length;

  const dp = new Array(slices.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(maxPicks + 1).fill(0);
  }

  for (let arrSize = 1; arrSize <= sliceCount; arrSize++) {
    for (let numToPick = 1; numToPick <= maxPicks; numToPick++) {
      if (numToPick > arrSize) {
        // Invalid situation: cannot pick more items than there are in the array
        continue;
      }

      let pickCurrent;
      if (arrSize === 1) {
        // We cannot pick further back when the array we are considering is of size one
        pickCurrent = slices[arrSize - 1];
      } else {
        // Pick the current element, meaning we cannot pick the previous/adjacent one.
        // Add the max of the previous non-adjacent elements.
        pickCurrent = slices[arrSize - 1] + dp[arrSize - 2][numToPick - 1];
      }

      // Skip the current element, meaning we can pick the max from the previous options
      const skipCurrent = dp[arrSize - 1][numToPick];

      // Cache the result as the max between picking current and skipping current
      dp[arrSize][numToPick] = Math.max(pickCurrent, skipCurrent);
    }
  }

  return dp[sliceCount][maxPicks];
}

function maxSizeSlices(slices: number[]): number {
  const sliceCount = slices.length;
  const maxPicks = sliceCount / 3;

  // We must avoid picking both the first element and last element because they are adjacent
  const includeFirst = slices.slice(0, slices.length - 1);
  const excludeFirst = slices.slice(1);

  return Math.max(
    maxSum(includeFirst, maxPicks),
    maxSum(excludeFirst, maxPicks)
  );
}
```