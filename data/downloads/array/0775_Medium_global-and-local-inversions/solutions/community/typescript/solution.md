# One liner

**Author:** moussaouisalah
**Votes:** 0
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/5974455/](https://leetcode.com/problems/global-and-local-inversions/solutions/5974455/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function isIdealPermutation(nums: number[]): boolean {
    return nums.every((num, index) => Math.abs(index - num) <= 1)
};
```