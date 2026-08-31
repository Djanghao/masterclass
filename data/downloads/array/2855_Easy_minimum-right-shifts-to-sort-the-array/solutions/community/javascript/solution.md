# easy to understand JS

**Author:** javad_pk
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4726658/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4726658/)

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
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    let c=0
    let pivot
    for(let i=1;i<nums.length;i++){
        if(c>0 && (nums[i]<nums[i-1]||nums[i]>nums[0])) return -1
        if(nums[i]<nums[i-1]){
            pivot=i
            c++
        }
    }
    return c==0 ? 0:nums.length-pivot
};

```