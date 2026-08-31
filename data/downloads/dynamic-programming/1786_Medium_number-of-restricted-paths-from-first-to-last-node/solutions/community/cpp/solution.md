# Detailed Solution || BFS-DFS-DP

**Author:** ragnar1101
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/3998408/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/3998408/)

---

Please copy the code in your compiler for better visiblity

# Code
```
//In this question first we need to find the minimum weight(smiliar to minimum distance) it takes to reach the end node from every node
// after that we traverse from first node in search of a valid path and we keep a count and return it
class Solution {
public:
    const int MOD = 1e9 + 7;

    int dfs(int node, int end, vector<int>& dis, unordered_map<int, vector<pair<int, int>>>& adj, vector<int>& dp) {
        if (node == end) {
            return dp[node]=1;        // when we reach the final destination we retrun 1 which signifies a path found
        }

        if(dp[node]!=-1)return dp[node];

        int count = 0;

        for (auto u : adj[node]) {
            if (dis[node] > dis[u.first]) {            // we only move forward when condition is satisfied
                int path = dfs(u.first, end, dis, adj, dp);
                count = (count + path) % MOD;  // Update count with modular arithmetic.
            }
        }

        return dp[node]=count;
    }

    int countRestrictedPaths(int n, vector<vector<int>>& edges) {
        unordered_map<int, vector<pair<int, int>>> adj;

        for (int i = 0; i < edges.size(); i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            int wt = edges[i][2];

            adj[u].push_back({v, wt});
            adj[v].push_back({u, wt}); // Assuming an undirected graph
        }

        vector<int> dis(n + 1, INT_MAX);
        dis[n] = 0;

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, n}); // Push the starting node with distance 0

        while (!pq.empty()) {
            int dist = pq.top().first;
            int node = pq.top().second;
            pq.pop();

            for (auto u : adj[node]) {
                int adjNode = u.first;
                int adjDist = u.second;

                if (dis[adjNode] > dist + adjDist) {
                    dis[adjNode] = dist + adjDist;
                    pq.push({dis[adjNode], adjNode});
                }
            }
        }
        // calling dfs from node 1 to last node 
        //this will return no of restricated path
        vector<int> dp(n + 1, -1);      // dp array
        int i = 1;                      //starting from node 1
        return dfs(i, n, dis, adj, dp);
    }
};

```