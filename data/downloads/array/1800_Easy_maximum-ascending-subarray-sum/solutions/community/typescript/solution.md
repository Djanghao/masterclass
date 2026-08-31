# Very Easy Approach

**Author:** anhvinh30102001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/5157385/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/5157385/)

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
function maxAscendingSum(nums: number[]): number {
    let max = 0;
    let sum = nums[0];
    for(let index = 0; index < nums.length; index++) {
        if(nums[index] < nums[index + 1]) {
            sum += nums[index + 1]
        } else {
            max = Math.max(sum, max);
            sum = nums[index + 1];
        }
    }
    return max;
};
```