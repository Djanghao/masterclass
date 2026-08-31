# Very Easy Solution with Explanation

**Author:** Hardanish-Singh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4001228/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4001228/)

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
```
// Leetcode: https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/

const minAbsoluteDifference = (nums: Array<number>, x: number): number => {
    let min: number = Number.MAX_VALUE;
    for (let i: number = 0; i < nums.length; i++) {
        if (i + x > nums.length - 1) {
            break;
        }
        for (let j: number = i + x; j < nums.length; j++) {
            min = Math.min(min, Math.abs(nums[i] - nums[j]));
        }
    }
    return min;
};

```