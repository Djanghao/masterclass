# [Javascript] ✅| Simple array traversing | 89.09% run time

**Author:** raviTejaY
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3159833/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3159833/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let total = 0;
    for(let i=0; i<nums.length; i++){
        total += nums[i];
    }
    let left = 0;
    for(let i=0; i<nums.length; i++){
        if(left * 2 === total - nums[i]){
            return i;
        }
        left += nums[i]
    }
    return -1;
};
```