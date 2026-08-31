# C++ || DP || Maximum & 2nd Maximum

**Author:** Susm
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5582613/](https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5582613/)

---

```
class Solution {
    int find(unordered_map<int,vector<int>>& adj,vector<bool>& visited,vector<pair<int,int>>& already,vector<unordered_map<int,int>>& dp,int i=0) {
        visited[i]=1;
        int maxtime=0,secondmax=0;
        for(int j : adj[i]){
            if(!visited[j]){
                int t=find(adj,visited,already,dp,j)+(j&1 ? 1 : 2);
                dp[i][j]=t;
                if(t>=maxtime){
                    secondmax=maxtime;
                    maxtime=t;
                }
                else if(t>secondmax) secondmax=t;
            }
        }
        already[i]={maxtime,secondmax};
        return maxtime;
    }
public:
    vector<int> timeTaken(vector<vector<int>>& edges) {
        unordered_map<int,vector<int>> adj;
        for(auto e : edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }
        int n=adj.size();
        vector<unordered_map<int,int>> dp(n);
        vector<pair<int,int>> already(n);
        vector<bool> visited(n,0);
        vector<int> times(n);
        times[0]=find(adj,visited,already,dp);
        for(int i=1;i<n;i++){
            int maxtime=0;
            for(int j : adj[i]){
                int t=(j&1 ? 1 : 2),mt=0;
                    int m1=already[j].first,m2=already[j].second;
                    mt = (dp[j][i]==m1 ? m2 : m1);
                maxtime=max(maxtime,mt+t);
                if(dp[i][j]!=mt+t){
                    if(mt+t>=already[i].first){
                        already[i].second=already[i].first;
                        already[i].first=mt+t;    
                    }
                    else if(mt+t>already[i].second) already[i].second=mt+t;
                }
                dp[i][j]=mt+t;
            }
            times[i]=maxtime;
        }
        return times;
    }
};
```