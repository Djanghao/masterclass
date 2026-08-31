# Type Script Solution

**Author:** diyoufkv7
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/4241792/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/4241792/)

---

# Intuition
Mathematic Expression Approch

# Approach
- Finding the Difference between the Elements that is smaller than the
next element

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minOperations(nums: number[]): number {
    let sum = 0;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            sum = (nums[i - 1] + 1) - nums[i]
            nums[i] += sum
            result += sum
        }
    }

    return result
};
```