# Find Minimum Distance to Target Index

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/6052419/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/6052419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I iterated through the array to find indices where the value matches the target, calculated the absolute difference between each index and the start position, stored these distances in an array, and returned the minimum value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function getMinDistance(nums: number[], target: number, start: number): number {
    let arr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
        arr.push(Math.abs(i - start));
      }
    }

    return Math.min(...arr);
};
```