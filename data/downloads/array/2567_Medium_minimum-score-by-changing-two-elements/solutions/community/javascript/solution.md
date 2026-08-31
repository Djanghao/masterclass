# JavaScript solution

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3207689/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3207689/)

---

# Intuition
The answer will be in one of 3 cases. We set Max and second Max elements to third Max. We set Min and second Min elements to third Min element. We set Max to second Max and Min to second Min.

# Approach
To simplify the code we sort the array. The answer will be the following Math.min(nums[end-2]-nums[0], nums[end-1]-nums[1], nums[end]-nums[2])

# Complexity
- Time complexity:
O(N*log(N))

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) { 
    let arr = nums.sort((a,b) => a - b);
    let end = nums.length -1;
    
    return Math.min(nums[end-2]-nums[0], nums[end-1]-nums[1], nums[end]-nums[2]);
};
```