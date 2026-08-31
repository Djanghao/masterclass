# c++ Djikstra and dfs

**Author:** CodingMission
**Votes:** 77
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/1097180/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/1097180/)

---

**Please upvote if you find this useful**

Definition of Restricted Paths : Path from source node(n) to target node(1) should have strictly increasing shortest distance to source(n) for all nodes in path.

- Idea is to calculate shortest distance from node n to all nodes and save it in dist array.
- Then use dfs from source to all the nodes whose weight is greater than source node. 
- Return 1 if we have reached node 1 or return saved value for source if it's value is not -1(which means it's not visited yet)
- Save the result for reuse later.
- Return result. (this is the count of Restricted paths)

```
typedef pair<int, int> pii;
class Solution {
public:
    int countRestrictedPaths(int n, vector<vector<int>>& edges) {
        unordered_map<int, vector<pair<int, int>>> gp;
        for (auto& edge : edges) {
            gp[edge[0]].push_back({edge[1], edge[2]});
            gp[edge[1]].push_back({edge[0], edge[2]});
        }
        
        vector<int> dist(n + 1, INT_MAX);
        priority_queue<pii, vector<pii>, greater<pii> > pq;
        pq.push({0, n});
        dist[n] = 0;
        
		int u, v, w;
        while (!pq.empty()) {
            pii p = pq.top(); pq.pop();
            u = p.second;
            for (auto& to : gp[u]) {
                v = to.first, w = to.second;
                if (dist[v] > dist[u] + w) {
                    dist[v] = dist[u] + w;
                    pq.push({dist[v], v});
                }
            }
        }
        vector<int> dp(n + 1, -1);
        return dfs(gp, n, dp, dist);
    }
    
    int dfs(unordered_map<int, vector<pair<int, int>>>& gp, int s, vector<int>& dp, vector<int>& dist) {
        int mod = 1e9+7;
        if (s == 1) return 1;
        if (dp[s] != -1) return dp[s];
        int sum = 0, weight, val;
        for (auto& n : gp[s]) {
            weight = dist[s];
            val = dist[n.first];
            if (val > weight) {
                sum = (sum % mod + dfs(gp, n.first, dp, dist) % mod) % mod;
            }
        }
        return dp[s] = sum % mod;
    }
};
```
