# BEATS 100%

**Author:** Alpha113
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5555518/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5555518/)

---

![image](./images/0.png)
```
class Solution {
public:
    vector<int> minimumTime(int n, vector<vector<int>>& edges, vector<int>& disappear) {
        ios::sync_with_stdio(false);
        vector <vector <pair <int, int>>> g(n);
        for(auto &it: edges){
            g[it[0]].push_back({it[1], it[2]});
            g[it[1]].push_back({it[0], it[2]});
        }
        vector <int> dist(n, INT_MAX);
        priority_queue <pair<long long, int>> q;
        dist[0] = 0;
        q.push({-dist[0], 0});
        while(!q.empty()){
            auto el = q.top();
            q.pop();
            int v = el.second;
            long long weight = -el.first;
            if(dist[v] < weight){
                continue;
            }
            for(auto &[to, weight] : g[v]){
                if(dist[v] + weight < disappear[to] && dist[v] + weight < dist[to]){
                    dist[to] = dist[v] + weight;                  
                    q.push({-dist[to], to});
                }
            }            
        }
        for(int i = 0; i < n; i++){
            if(dist[i] == INT_MAX){
                dist[i] = -1;
            }
        }
        return dist;        
       
    }
};
```