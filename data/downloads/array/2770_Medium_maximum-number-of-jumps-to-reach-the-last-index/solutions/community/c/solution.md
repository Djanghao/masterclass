# ✅[C++ & JavaScript] | Easy | DP

**Author:** Pitbull_45
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3738973/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3738973/)

---

```
class Solution {
public:
    int maximumJumps(vector<int>& nums, int target) {
        int n=nums.size();
        vector<int>dp(n,1);
        dp[n-1]=0;
        for(int i=n-2;i>=0;i--){
            dp[i]=INT_MIN;
            for(int j=i+1;j<n;j++){
                if(nums[j]-nums[i]>=-target&&nums[j]-nums[i]<=target&&dp[j]!=INT_MIN){
                   dp[i]=max(dp[i],1+dp[j]);
                }
            }
        }
        if(dp[0]==INT_MIN){
           return -1;
        }
        return dp[0]; 
    }
};
```
**JavaScript**

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
      const n = nums.length;
      const dp = new Array(n).fill(1); 
      dp[n-1] = 0;
      for (let i = n-2; i >=0; i--) {
	  dp[i]=INT_MIN;
        for (let j = i+1; j < n; j++) {
          if (nums[j] - nums[i] >=-target && nums[j]-nums[i]<=target&&dp[j] !=INT_MIN) {
               dp[i]=max(dp[i],1+dp[j]);
            }
          }
        }
	    if(dp[0]==INT_MIN){
		return -1;
      }
      return dp[0]; 
   }
};
```