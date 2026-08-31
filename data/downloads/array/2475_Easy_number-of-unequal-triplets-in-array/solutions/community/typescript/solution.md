# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5839223/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5839223/)

---

We loop through with 3 loops and check the condition

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 69 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.3 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function unequalTriplets(nums: number[]): number {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
            count++
          }
        }
      }
    }
  return count
};
```