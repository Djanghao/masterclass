# Check current and next 2

**Author:** emiliodeg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5423404/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5423404/)

---

# Intuition
Checking current and next 2 elements

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
function minOperations(nums: number[]): number {
    const length = nums.length - 3
    let result = 0

    for (let i = 0; i <= length; i++) {
        if (nums[i] === 1) continue
        result++
        nums[i] = 1
        nums[i + 1] = +!nums[i + 1]
        nums[i + 2] = +!nums[i + 2]
    }

    return nums[length] && nums[length + 1] && nums[length + 2] ? result : -1
};
```