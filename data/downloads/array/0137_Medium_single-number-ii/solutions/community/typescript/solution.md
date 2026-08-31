# SingleNumber 89ms Typescript

**Author:** isaacyukio22
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/5571526/](https://leetcode.com/problems/single-number-ii/solutions/5571526/)

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
function singleNumber(nums: number[]): number {
    let n: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if ((nums[n] == nums[i]) && (n != i)) {
            n++
            i = 0;
        }
    }
    return nums[n];
};
```