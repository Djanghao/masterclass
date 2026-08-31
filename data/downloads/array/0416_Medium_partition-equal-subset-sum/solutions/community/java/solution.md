# JAVA | Memoization to Optimized DP | Detailed Explanation

**Author:** Chaitanya1706
**Votes:** 106
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624101/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/1624101/)

---

**Intution:** So Lets start step by step and concentrate on the process:
1. Since we have to make two subset both having equal sum then our first condition is to check whether the sum of given array can be divided in two equal part which is if total sum is odd then partition is not possible at all and if sum is even then there is chance.
For example: 
```
	1.) arr1-> [1,5,11,5]   and     2.) arr2 -> [1,5,3,11] 
	Both arr1 and arr2 has even sum but 1st can be partitioned into ([1,5,5] & [11]) and 2nd can not.
```

2.) **Now lets try to visualize it as 0/1 Knapsack Problem:**
* Since in 0/1 knapsack we have 2 choices for each object having value v whether to keep it or not in your kanpsack having certain weight W.
* Same as in this case we have n elements in array and we have two choices to make whether to keep it in subset1 or subset2 (inclusion in one is direct exclusion in other) and weight of knapsack/subset will be sum/2.

3.) So now what our target remain is we have to take care about only one subset because if one subset with weight sum/2 is possible then other subset will surely have the weight sum/2.
4.) So now using subset sum problem code we have to just check if its possible to have a subset having sum = totalSum/2;

**Approach1: Memoization (TLE)**
```
class Solution {
    boolean mem[][];
    public boolean canPartition(int[] nums) {
        int sum = 0;
        int n = nums.length;
        
        for(int i : nums) sum+=i;
        
        if(sum%2!=0) return false;
        
        sum /= 2;
        
        mem = new boolean[n+1][sum+1];
        
        return subsetSum(nums,0,sum);
    }
    
    boolean subsetSum(int[] nums, int pos, int sum){
        if(sum==0) return true;
        
        else if(pos>=nums.length || sum<0) return false;
        
        if(mem[pos][sum]) return true;
        
        return mem[pos][sum] = subsetSum(nums,pos+1,sum-nums[pos]) ||
                                subsetSum(nums,pos+1,sum);
    }
}
```

****A little update:** After reading comments on my post I analyze my memoization code that why its giving TLE so I figured that in subset function  if (mem[pos][sum]==true) then I am returning true but if its false then it will keep on computing but the problem was that boolean array automatically initialises array with false..so i cant differentiate... so for that we need to take object boolean array so that it initialises with null or assign null value manually to boolean array.

**Updated Memoization Code: (100% Faster)**
```
class Solution {
    Boolean mem[][];
    public boolean canPartition(int[] nums) {
        int sum = 0;
        int n = nums.length;
        
        for(int i : nums) sum+=i;
        
        if(sum%2!=0) return false;
        
        sum /= 2;
        
        mem = new Boolean[n+1][sum+1];
        
        return subsetSum(nums,0,sum);
    }
    
    boolean subsetSum(int[] nums, int pos, int sum){
        if(sum==0) return true;
        
        else if(pos>=nums.length || sum<0) return false;
        
        if(mem[pos][sum]!=null) return mem[pos][sum];
        
        return mem[pos][sum] = subsetSum(nums,pos+1,sum-nums[pos]) ||
                                subsetSum(nums,pos+1,sum);
        
        
    }
}

```

**Approach2: Dynamic Programming**
```
class Solution {
    
    public boolean canPartition(int[] nums) {
        int sum = 0;
        int n = nums.length;
        
        for(int i : nums) sum+=i;
        
        if(sum%2!=0) return false;
        
        sum /= 2;
        
        boolean dp[][] = new boolean[n+1][sum+1];
        
        for(int i=0;i<=n;i++){
            for(int j=0;j<=sum;j++){
                if(i==0 || j==0)
                    dp[i][j] = false;
                else if(nums[i-1] > j)     // if curr sum value is greater than the current element value then just skip(take previous value)
                    dp[i][j] = dp[i-1][j];
                else if(nums[i-1]==j)  // we got required sum
                    dp[i][j] = true;
                else
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            }
        }
        return dp[n][sum];
        
        
    }
}

```

**Approach3: Space Optimized DP**
**Explanation: Idea behind reverse loop for sum**
* If you observe the 2d DP then dp[i][j] is the value either from dp[i-1][j] or dp[i-1][j-nums[i-1]] and when we converted 2d DP into 1d DP then the thinking was that, dp[i]  will have values for one iteration and then again for next iteration we will use that stored values which will act as dp[i-1] for this iteration.
* So now we need value of dp[i-num] that is value from previous index so here is the problem in left to right loop that each time when we enter into new interation we need value from previous iteration but the value will already be updated in this iteartion and we will loss the previous value.
* Thats why using reverse loop.

Example: Lets in first iteration dp array is filled as [2,6,1,8,5]  
So now we started from left and upadated 2 as 4 and 6 as 7 and 1 as 5([**4,7,5**,8,5]) and now we reach to 8 and we need dp[1] value but we need the value from previous iteration which we have lost and hence will get the wrong answer. 
So move from right to left and use the previous iteration value.
(these are pure random values used in example, so dont think about them just get the example)
```
class Solution {
    
    public boolean canPartition(int[] nums) {
        int sum = 0;
        int n = nums.length;
        
        for(int i : nums) sum+=i;
        
        if(sum%2!=0) return false;
        
        sum /= 2;
        
        boolean[] dp = new boolean[sum+1];
       
        dp[0] = true;

        for (int j : nums) {
            for (int i = sum; i > 0; i--) {
                if (i >= j) {
                    dp[i] = dp[i] || dp[i-j];
                }
            }
        }

        return dp[sum];
        
        
    }
}

```

