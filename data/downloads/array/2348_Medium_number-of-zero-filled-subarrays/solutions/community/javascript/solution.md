# Elegant solution with O(n) / O(1) complexity

**Author:** meganiksel
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3322004/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3322004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The contribution of a single zero to the total sum is directly proportional to its index in the subsequence of zeros.

# Approach
<!-- Describe your approach to solving the problem. -->
For every num if it equals to zero we need to increase the length of the current subsequence of zeros by 1, and add this length on each iteration to the final sum.

Otherwise, set the length of the current subsequence to 0.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const zeroFilledSubarray = nums => {
    let count = 0;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            length++;
            count += length;
        } else length = 0;
    }
    return count;
};
```