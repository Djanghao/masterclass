# Simple O(N)

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420219/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420219/)

---

# Intuition
Use memoization

# Approach
Iterate the initial array. Store both max so far and score of i-1. For ith element max(i) = max(max(i-1), nums(i)), score(i) = score(i-1) + max(i) + nums(i).

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    let sum = 0
    let max = nums[0]
    
    let res = []
    for(let i = 0; i < nums.length; i++){
        max = Math.max(nums[i], max);
        sum += (max + nums[i])
        res.push(sum);
    }
    
    return res
};
```