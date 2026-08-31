# top-down DP, explained

**Author:** remedydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/5127327/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/5127327/)

---


# Approach
To obtain all possible subarrays, we initialize a loop with each index denoted as the start of a subarray. From each starting index, we initiate a dynamic programming recursion.

Within the DP dfs recursion, we encounter two options:

1) Continue expanding the current subarray.
3) Replace a number if hadn't yet
At the end return the result with the greater sum.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```

var maxSumAfterOperation = function(nums) {
    const dfs=(i,replaced,dp)=>{
        if(i===nums.length) return 0;
        
        const key=`${i}_${replaced}`;
        if(dp[key]!==undefined) return dp[key];
        
        let ans=0;
        // keep expanding
        ans=Math.max(ans,dfs(i+1,replaced,dp)+nums[i]);

        if(!replaced){ // replace
            ans=Math.max(ans, dfs(i+1,true,dp)+(nums[i]*nums[i]));
        }
        return dp[key]=ans;        
    }

    const seen={}
    let maxSum=0;
    for(let start=0;start<nums.length; start++){
        maxSum=Math.max(maxSum,dfs(start,false,seen));
    }
    return maxSum
};
```