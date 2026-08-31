# c++ solution using dp

**Author:** dilipsuthar60
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651462/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651462/)

---

```
class Solution {
public:
    long long dp[101][102][102][3];
    long long find(vector<vector<pair<int,int>>>&nums,int index,int col1,int col2,int k){
        if(index>=nums.size()||k>=3){
            return k==3?0:-1e18;
        }
        if(dp[index][col1+1][col2+1][k]!=-1) return dp[index][col1+1][col2+1][k];
        long long ans=-1e18;
        for(int i=0;i<nums[index].size();i++){
            for(auto &it:nums[index]){
                if(index==0||(it.second!=col1&&it.second!=col2)){
                    ans=max(ans,1ll*it.first+find(nums,index+1,it.second,col1,k+1));
                }
            }
        }
        ans=max(ans,find(nums,index+1,col1,col2,k));
        return dp[index][col1+1][col2+1][k] =ans;
    }
    long long maximumValueSum(vector<vector<int>>& board) {
        int n=board.size();
        int m=board[0].size();
        memset(dp,-1,sizeof(dp));
        vector<vector<pair<int,int>>>nums(n);
        for(int i=0;i<n;i++){
            for(int j=0;j<board[0].size();j++){
                nums[i].push_back({board[i][j],j});
            }
            sort(nums[i].rbegin(),nums[i].rend());
            while(nums[i].size()>3){
                nums[i].pop_back();
            }
        }
        return find(nums,0,-1,-1,0);
    }
};
```