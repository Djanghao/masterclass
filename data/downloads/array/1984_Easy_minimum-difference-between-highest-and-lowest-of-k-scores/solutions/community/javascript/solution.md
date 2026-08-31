# simple solution

**Author:** Aneesh-aj
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4285664/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4285664/)

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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    
     nums = nums.sort((a,b)=> a-b)

     let mini = 80000000000

     for(let i=0;i < nums.length- k+1;i++){
         mini = Math.min(mini,nums[i+k-1] - nums[i])
     }
     return mini
};
```