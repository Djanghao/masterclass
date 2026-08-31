# Easy Video Solution ✅ || Dijkstra and Backtracking from last Node 🔥

**Author:** ayushnemmaniwar12
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052981/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052981/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***


***Easy Video Explanation***

https://youtu.be/_RvzWgXbR-A

# Code
```
class Solution {
public:
    vector<bool> findAnswer(int n, vector<vector<int>>& edges) {
        vector<pair<int , int>> adj[n];
        int totalEdges = edges.size();
        for(int i=0;i<totalEdges;i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            int w = edges[i][2];
            adj[u].push_back({v , w});
            adj[v].push_back({u , w});
        }
        
        vector<int> dist(n , INT_MAX);
        priority_queue<pair<int , int> , vector<pair<int , int>> , greater<pair<int , int>>> pq;
        pq.push({0 , 0});
        dist[0] = 0;
        
        while(!pq.empty()) {
            int node = pq.top().second;
            int d = pq.top().first;
            pq.pop();
            
            for(auto it : adj[node]) {
                int v = it.first;
                int w = it.second;
                if(dist[v] > dist[node] + w) {
                    dist[v] = dist[node] + w;
                    pq.push({dist[v] , v});
                }
            }
        }
        
        vector<bool> ans(totalEdges,false);

        if(dist[n-1] == INT_MAX) return ans;
        
        vector<int> vis(n , 0);
        queue<pair<int , int>> q;
        q.push({n-1 , dist[n-1]});
        
        
        set<pair<int , int>> st;
        while(!q.empty()) {
            int node = q.front().first;
            int d = q.front().second;
            q.pop();
            vis[node] = 1;
            for(auto it : adj[node]) {
                int v = it.first;
                int w = it.second;
                int distRemain = dist[node] - w;
                if(distRemain == dist[v]) {
                    st.insert({node , v});
                    st.insert({v , node});
                    q.push({v , dist[v]});
                }
            }
        }
        

        for(int i=0;i<totalEdges;i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            if(st.find({u,v})!=st.end())
                ans[i]=true;
        }
        
        return ans;
    }
};
```
# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
