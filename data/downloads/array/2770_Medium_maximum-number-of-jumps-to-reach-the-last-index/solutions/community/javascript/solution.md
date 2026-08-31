# Maximum jump to reach last index using dynamic programming. Easy tabulation approach

**Author:** aravindk3992
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3741151/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3741151/)

---

# Video Explanation
<!-- Describe your first thoughts on how to solve this problem. -->
https://youtu.be/3bbTYoKgFvA

# Approach
1. Every iteration we have to figure out the all possible way to reach the current index.
2. Let say if you are in 3rd index. Then index 0,1,2 are possible way
are make a jump to reach index 3.
3. Then check our constraint given in question. Math.abs(Num[j] - Num[i]) <= target
4. if pass our constrain please add 1 step to our current index.
5. if multiple possibles are available please pick maximum among that.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    const dpArray = new Array(nums.length).fill(-1);
    dpArray[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.abs(nums[j] - nums[i]) <= target && dpArray[j] !== -1) {
                dpArray[i] = Math.max(dpArray[i], 1 + dpArray[j]);
            }
        }
    }
    return dpArray[nums.length - 1];
};
```