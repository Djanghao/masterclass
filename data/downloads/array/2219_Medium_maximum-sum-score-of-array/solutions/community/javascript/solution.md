# Simple constant time

**Author:** aliaj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/5137817/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/5137817/)

---

# Intuition
max(currensum, total - currentsum)

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
 //T(n), S(1)
var maximumSumScore = function(nums) {
    let prev = 0
    let curr = 0
    let ans = -Infinity
    let total = nums.reduce((acc, num) => acc + num, 0)
    for(let i = 0; i < nums.length; i++){
        prev = curr
        curr += nums[i]
        ans = Math.max(ans, curr, total - prev)
    }
    return ans
};
```