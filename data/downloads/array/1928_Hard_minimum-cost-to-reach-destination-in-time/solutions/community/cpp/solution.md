# C++ Solution | 100% | Knapsack DP Problem in Graph

**Author:** lekhrajparihar
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1329478/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1329478/)

---

we can assume it as a knapsack DP problem with passtime as cost[n], maxTime as Total Weight,edge time as weight[n]. we have to minimize the total cost with a Weight Constraints (maxTime).
Here is the recursive approach with memoization.
```
class Solution {
public:
    int dp[1001][1001];
    int solve(int time,vector<pair<int,int>> adj[],int v,vector<int> &pass){
        if(time<0) return INT_MAX;
        int n = pass.size();
        if(v==n-1){
            return pass[v];
        }
        if(dp[v][time]!=-1) return dp[v][time];
        int cost = INT_MAX;
        for(auto &x:adj[v]){
            int u = x.first;
            int temp = x.second;
            if(temp<=time){
               int sol = solve(time-temp,adj,u,pass);
            cost = min(cost,sol);
            }
        }
        if(cost==INT_MAX) return dp[v][time] = INT_MAX;
        return dp[v][time] = cost + pass[v]; 
    }
    int minCost(int maxTime, vector<vector<int>>& edges, vector<int>& pass) {
        memset(dp,-1,sizeof(dp));
        int n = pass.size();
        vector<pair<int,int>> adj[n];
        for(int i = 0;i<edges.size();i++){
            adj[edges[i][0]].push_back(make_pair(edges[i][1],edges[i][2]));
             adj[edges[i][1]].push_back(make_pair(edges[i][0],edges[i][2]));
            
        }
        int ans = solve(maxTime,adj,0,pass);
        if(ans==INT_MAX) return -1;
        return ans;
    }
};
```
Please leave a comment if needs help.
If you like it ...please upvote so that it can reach to other people also.