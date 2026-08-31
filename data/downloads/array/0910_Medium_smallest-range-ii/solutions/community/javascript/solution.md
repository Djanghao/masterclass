# JavaScript || easy solution

**Author:** liandjessica
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/2603118/](https://leetcode.com/problems/smallest-range-ii/solutions/2603118/)

---

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
    
    nums = nums.sort((a,b)=>a-b);
    
    let min_first = nums[0];
    let max_last = nums[nums.length-1];
    
    let res = max_last - min_first;
   
    
    for(let i=0; i<nums.length-1; i++){
        
        res = Math.min(res, Math.max(max_last - k, nums[i]+k) - Math.min(min_first + k, nums[i+1]-k))
    }
    
    return res;
    
};
```