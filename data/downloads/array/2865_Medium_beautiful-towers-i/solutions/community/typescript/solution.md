# Linear average case solution using DP

**Author:** elimirks
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/5853680/](https://leetcode.com/problems/beautiful-towers-i/solutions/5853680/)

---

# Intuition
Compute the results for decreasing values and increasing values for each element, then find the max iteratively.

# Complexity
- Time complexity: $$O(n^2)$$, $$\\Theta(n)$$

In the average case with random heights, it should run linearly. However for a purely increasing sequence or purely decreasing sequence, it will run in $$O(n^2)$$ time

- Space complexity: $$O(n)$$
# Code
```typescript []
function maximumSumOfHeights(heights: number[]): number {
  let increasingDyn: number[] = [heights[0]];
  for (let i = 1; i < heights.length; i++) {
    let j = i - 1;
    for (; j >= 0 && heights[j] > heights[i]; j--);

    if (j == -1) {
      increasingDyn[i] = heights[i] * (1 + i);
    } else {
      increasingDyn[i] = heights[i] * (i - j) + increasingDyn[j];
    }
  }

  let decreasingDyn: number[] = [];
  decreasingDyn[heights.length - 1] = heights[heights.length - 1];
  for (let i = heights.length - 2; i >= 0; i--) {
    let j = i + 1;
    for (; j <= heights.length - 1 && heights[j] > heights[i]; j++);

    if (j == heights.length) {
      decreasingDyn[i] = heights[i] * (heights.length - i);
    } else {
      decreasingDyn[i] = heights[i] * (j - i) + decreasingDyn[j];
    }
  }

  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    result = Math.max(result, increasingDyn[i] + decreasingDyn[i] - heights[i]);
  }

  return result;
}

```