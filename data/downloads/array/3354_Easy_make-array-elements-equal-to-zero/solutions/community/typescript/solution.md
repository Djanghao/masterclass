# easy understand

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6083751/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6083751/)

---

# Intuition
if left equal right: move left or right also clear
if left and right diffence 1: move one side can clear
if more than 1: never done

# Approach
get the total
calculation left and right results when index is 0

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function countValidSelections(nums: number[]): number {
    let count: number = 0
    let left: number = 0
    let right: number = nums.reduce((sum, curr) => sum + curr)

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            if (left == right) count += 2
            if (left - right == 1 || right - left == 1) count++
        }
        left += nums[i]
        right -= nums[i]
    }

    return count
};
```