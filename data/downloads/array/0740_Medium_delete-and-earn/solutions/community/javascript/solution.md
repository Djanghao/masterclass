# ✔️ [Javascript] | Memoized | Bottom-up | Explained 🚀

**Author:** dhairyabahl
**Votes:** 16
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/1465818/](https://leetcode.com/problems/delete-and-earn/solutions/1465818/)

---

**Approach** : 

This question is a follow-up of this question :  https://leetcode.com/problems/house-robber/ . Basically in this question we simply create a new array and store the occurences of each number in the newly created array and now we simply have to play with adjacent indexes just like we did in house robber.

The only different part of the newly created array from the house-robber question is that we have to multiply the index with the value on index to properly count multiple occurences of the same number.

Sorry if I got you confused but you will understand after going through the code.

PS: Feel free to ask your doubts in comments ! Thanks \uD83D\uDE42

### Bottom-up approach

```
/**
 * @param {number[]} nums
 * @return {number}
 */

var deleteAndEarn = function(nums) {
    
    let max = Number.NEGATIVE_INFINITY
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        max = Math.max(nums[ctr],max);
    
    let arr = new Array(max+1).fill(0);
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        arr[nums[ctr]] += 1
    
    let dp = new Array(arr.length).fill(-1)
    
    dp[arr.length]   = 0 ;
    dp[arr.length+1] = 0 ;
    
    for(let ctr = arr.length - 1 ; ctr >= 0 ; ctr --) {
        dp[ctr] = Math.max(dp[ctr+1],arr[ctr]*ctr + dp[ctr+2])
    }
    
    return dp[0]
    
};
```

### Top-down approach

```
/**
 * @param {number[]} nums
 * @return {number}
 */

var solve = function(nums,idx,dp) {
    
    if(idx >= nums.length) return 0;
    
    if(dp[idx] !== -1 ) return dp[idx]
    
    if(idx === nums.length - 1) return dp[idx] = idx*nums[idx];
    
    return dp[idx] = Math.max(solve(nums,idx+1,dp), idx*nums[idx] + solve(nums,idx+2,dp))
}

var deleteAndEarn = function(nums) {
    
    let max = Number.NEGATIVE_INFINITY
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        max = Math.max(nums[ctr],max);
    
    let arr = new Array(max+1).fill(0);
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        arr[nums[ctr]] += 1
    
    let dp = new Array(arr.length).fill(-1)
    
    return solve(arr,0,dp);
};
```