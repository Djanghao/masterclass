# Simple JS

**Author:** uriha
**Votes:** 3
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3288120/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3288120/)

---

ma# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    nums.sort((a,b)=>{return b-a})
    let n = 0
    let c = nums[n]
    while(c > 0){
        n++
        c += nums[n]
    }
    return n
};
```