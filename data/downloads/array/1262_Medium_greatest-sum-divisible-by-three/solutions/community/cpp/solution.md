# C++|| DP Approach  pick or not pick || Memoization

**Author:** rohitraj13may1998
**Votes:** 11
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/2520718/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/2520718/)

---

```
class Solution {
public:
     int solve(int i, int curr_sum_rem,vector<int>& nums,vector<vector<int>>&dp){
    if(i>=nums.size()){
        if(curr_sum_rem==0){
            return 0;
        }
        return INT_MIN;
    }
    if(dp[i][curr_sum_rem]!=-1)
        return dp[i][curr_sum_rem];
    int pick =nums[i]+ solve(i+1,(curr_sum_rem+nums[i])%3,nums,dp);    
    int notpick =0+ solve(i+1,curr_sum_rem,nums,dp);  
    return dp[i][curr_sum_rem]=max(pick,notpick);
    
}
    
    int maxSumDivThree(vector<int>& nums) {
        int n =nums.size();
        vector<vector<int>> dp(n,vector<int>(3,-1)); 
        return solve(0,0,nums,dp);
    }
};
```