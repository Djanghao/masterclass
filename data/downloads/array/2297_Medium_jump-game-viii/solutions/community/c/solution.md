# Simple DP C++

**Author:** lets_stack
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/2528854/](https://leetcode.com/problems/jump-game-viii/solutions/2528854/)

---

```
class Solution {
public:
    long long dp[100001];
    long long func(int i,vector<int>& arr, vector<int>& costs){
        if(i==arr.size()-1) return 0;
        if(dp[i]!=-1) return dp[i];
        long long ans=1e9;
        int fg1=0,fg2=0;
        for(int j=i+1;j<arr.size();j++){
            if(arr[j]>=arr[i] && fg1==0){
                ans=min(ans,costs[j]+func(j,arr,costs));
                fg1=-1;
            }
            if(arr[i]>arr[j] && fg2==0){
                ans=min(ans,costs[j]+func(j,arr,costs));
                fg2=-1;
            }
            if(fg1==-1 && fg2==-1) break;
        }
        return dp[i]=ans;
    }
    long long minCost(vector<int>& nums, vector<int>& costs) {
        int n=nums.size();
        if(count(nums.begin(),nums.end(),nums[0])==n && count(costs.begin(),costs.end(),costs[0])==n) return costs[0]*(nums.size()-1);
        memset(dp,-1,sizeof(dp));
        long long ans=func(0,nums,costs);
        return ans;
    }
};
```