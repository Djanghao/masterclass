# One Liner O(N)

**Author:** konsalex
**Votes:** 6
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3214838/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3214838/)

---

# Intuition
Your tech lead will love you for such a simple solution.

# Approach
Use native array method and get millions \uD83D\uDCB8

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

# Code
```
function search(nums: number[], target: number): number {
    return nums.indexOf(target)
};
```