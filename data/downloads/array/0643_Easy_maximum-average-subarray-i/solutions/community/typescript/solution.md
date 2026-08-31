# Easy to Understand TypeScript Solution 90ms Runtime - Sliding Window Technique

**Author:** hadyawayda
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/3666009/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/3666009/)

---

# Intuition
Calculate sum of first k elements, then assign sum / k to max, then iterate over remaining elements starting from k, and for each iteration, add the `ith` element and remove `i-k` element, and calculate max at each iteration, and eventually return max.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findMaxAverage(nums: number[], k: number, sum = 0, max = 0): number {
  for ( let i = 0; i < k; i++ ) {
    sum += nums[i]
  }
  max = sum / k
  for ( let i = k; i < nums.length; i++ ) {
    sum += nums[i] - nums[i - k]
    max = Math.max(max, sum / k)
  }
  return max
};
```