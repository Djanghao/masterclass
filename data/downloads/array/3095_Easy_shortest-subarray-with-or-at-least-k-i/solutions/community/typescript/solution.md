# Find Minimum Subarray Length with Bitwise OR Sum

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5724954/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5724954/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I start by iterating over all possible subarray lengths, from 1 to the total length of the array. I then compute the bitwise OR of each subarray and check if it meets or exceeds the target value k. If a subarray meets the condition, I return its length; otherwise, I continue until all possibilities are exhausted.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function minimumSubarrayLength(nums: number[], k: number): number {
     for (let i = 1; i <= nums.length; i++) {
      for (let j = 0; j <= nums.length - i; j++) {
        let nu = nums.slice(j, j + i);
        if (nu.reduce((acc, num) => acc | num, 0) >= k) {
          return nu.length;
        }
      }
    }

    return -1;
};
```