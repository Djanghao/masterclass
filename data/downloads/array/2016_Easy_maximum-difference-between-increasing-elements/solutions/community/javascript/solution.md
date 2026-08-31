# Javascript O(n) Solution

**Author:** Ashish1323
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486693/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486693/)

---

# Brute Force 0(n^2)
```
var maximumDifference = function(nums) {
    var diff=-1
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if (nums[j]> nums[i]) diff=Math.max(nums[j]-nums[i],diff)
        }
    }
    return diff
};
```
# DP 0(n)
```
var maximumDifference = function(nums) {
   var min=Infinity
   var diff=-1
   for(i=0;i<nums.length;i++){
       min = Math.min(min,nums[i])
       diff=Math.max(diff,nums[i]-min)
   }
   return diff==0 ? -1 : diff
};
```


