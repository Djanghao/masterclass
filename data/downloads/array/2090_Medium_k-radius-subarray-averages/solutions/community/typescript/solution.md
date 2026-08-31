# Sliding Window TypeScript Solution in O(N) - Explained

**Author:** hadyawayda
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660796/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660796/)

---

# Approach
1. Calculate sum for first sliding window, which is always of size `d = k * 2 + 1`.
2. Iterate over nums, and if `i < k` or `i > nums.length - k - 1` we push -1 into the output.
3. Otherwise we push `sum / d` rounded down to the output array.
4. Whenever `i > k`, we add `i + k` element to sum and substract `i - k - 1` from it.
5. Finally we return the output array.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) if output array is not considered, O(N) otherwise
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function getAverages(nums: number[], k: number, sum = 0, d = k * 2 + 1, output = []): number[] {
  for ( let i = 0; i < d; i++ ) {
    sum += nums[i]
  }
  for ( let i = 0; i < nums.length; i++ ) {
    if ( i < k || i > nums.length - k - 1 ) {
      output.push(-1)
      continue
    }
    if ( i > k ) {
      sum += nums[i + k] - nums[i - k - 1]
    }
    output.push(Math.floor(sum / d))
  }
  return output
};
```