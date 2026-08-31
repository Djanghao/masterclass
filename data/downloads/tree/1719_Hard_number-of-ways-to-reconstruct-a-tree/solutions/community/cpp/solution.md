# SOLUTION IN CPP

**Author:** durgesh4993
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/4367652/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/4367652/)

---

# Code
```
class Solution {
public:
    int checkWays(vector<vector<int>>& e) {
        unordered_map<int,unordered_set<int>> adj;
        for(auto x:e){
            adj[x[0]].emplace(x[1]);
            adj[x[1]].emplace(x[0]);
        }
        priority_queue<pair<int,int>> q;
        for(auto [i,a]:adj) q.push({a.size(),i});
        int n=q.size(),fl=0;
        unordered_set<int> vis;
        while(!q.empty()){
            auto [sz,cur]=q.top();q.pop();
            int u=0,usz=n+1;
            if(!vis.empty()){
                for(auto x:adj[cur]){
                    if(vis.count(x) && usz>adj[x].size()){
                        usz=adj[x].size();
                        u=x;
                    }
                }
            }
            vis.emplace(cur);
            if(u==0){
                if(sz!=(n-1)) return 0;
                continue;
            }
            for(auto x:adj[cur]){
                if(x==u) continue;
                if(adj[u].count(x)==0) return 0;
            }
            if(usz==sz) fl=1;
        }
        if(fl==1) return 2;
        return 1;
    }
};
```