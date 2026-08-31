# Javascript easy efficient explained solution

**Author:** theesoteric
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2691960/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2691960/)

---

**Approach**: 
	
	Take mask of base 3.
    bit 0 means no nums[i] in the slot
    bit 1 means there is 1 nums[i] in the slot
    bit 2 means there are 2 nums[i] in the slot
	Now we can check for every nums[i] and try to put it in every possible slot and check the which is giving the maximum value.
    In memoization we need not to keep i as state variable as mask tells the possition of nums[i] and count also.

	
```
/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
    let memo=[],mask=0;
    let ans =  dp(0,0);
    return ans;
    
    function dp(i,mask){
        let max = 0,sum;
        if(memo[mask]!==undefined){
            return memo[mask];
        }
        if(i===nums.length){
            return 0;
        }
        for(let s=1,maskBit=1;s<=numSlots;s++,maskBit*=3){
            if(Math.floor(mask/maskBit)%3<2){
                sum = (nums[i]&s)+dp(i+1,mask+maskBit);
                max = Math.max(sum,max);
            }
        }
        memo[mask]=max;
        return memo[mask];
    }
};
```