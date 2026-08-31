# JavaScript easy and fast solution (93.71% faster)

**Author:** fahim_ash
**Votes:** 8
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2813285/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2813285/)

---





* only sort the zeros:  nums.sort((a,b)=> !a - !b)


# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i=0;i<nums.length;i++){
        if (nums[i]==nums[i+1]){
            [nums[i],nums[i+1]]=[nums[i]*2,0];
        }
    }return nums.sort((a,b)=> !a - !b );
};
    

```