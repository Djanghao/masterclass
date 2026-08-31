# js and ts.

**Author:** anuchataowkaen
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/6053991/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/6053991/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```javascript []
function minimumDifference(nums, k) {
    nums.sort((a, b) => b - a)
    let l = 0
    let min = Infinity
    for (let r = 0; r < nums.length; r++) {
        if (r - l + 1 > k) l++
        if (r - l + 1 === k) min = Math.min(min, nums[l] - (nums[r]))
    }
    return min
};
```
```typescript []
function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => b - a)
    let l = 0
    let min = Infinity
    for (let r = 0; r < nums.length; r++) {
        if (r - l + 1 > k) l++
        if (r - l + 1 === k) min = Math.min(min, nums[l] - (nums[r]))
    }
    return min
};
```