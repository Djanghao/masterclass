# Simple dp c++

**Author:** SSD_SSD
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971276/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971276/)

---

# Intuition
Just checking all possible ways and taking the maximum.


# Code
```cpp []
class Solution {
public:
int f(int day,int curr,int k,vector<vector<int>>& stay, vector<vector<int>>& travel,vector<vector<int>>& dp){
    if(day == k) return 0;
    if(dp[curr][day] != -1) return dp[curr][day];

    int x = f(day+1,curr,k,stay,travel,dp) + stay[day][curr];
    int y = 0;
    for(int i=0;i<travel.size();i++){
        if(i != curr){
            y = max(y,f(day+1,i,k,stay,travel,dp)+travel[curr][i]);
        }
    }

    return dp[curr][day] = max(x,y);
}
    int maxScore(int n, int k, vector<vector<int>>& stayScore, vector<vector<int>>& travelScore) {
        vector<vector<int>> dp(n+1,vector<int>(k+1,-1));
        int ans = 0;
        for(int i=0;i<n;i++){
            ans = max(ans,f(0,i,k,stayScore,travelScore,dp));
        }
        return ans;
    }
};
```