# In place array modification leads to less space complexity

**Author:** skarthikeyan96
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5634097/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5634097/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) {

    for(let i=0;i<nums.length;i++){
        nums[i] = nums[i] | nums[i+1]    
    }

    nums.pop()
    
    return nums
};
```