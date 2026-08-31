# This TLE is just dumb, the same solution sometimes pass...

**Author:** casd82
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1064634/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1064634/)

---

I submitted the exact same code in the contest, but TLE.
Just saw a post with the exact same solution as mine, so I tried it again, and now it passes. lmao.

```
class Solution {
public:
    int minTrioDegree(int n, vector<vector<int>>& edges) {
        vector<unordered_set<int>> adj(n+1);
        int res = INT_MAX;
        for (vector<int>& edge : edges) {
            adj[edge[0]].insert(edge[1]);
            adj[edge[1]].insert(edge[0]);
        }

        for (int i = 1; i < n; ++i) {
            for (auto iter1 = adj[i].begin(); iter1 != adj[i].end(); ++iter1) {
                if (*iter1 <= i) continue;
                for (auto iter2 = adj[i].begin(); iter2 != adj[i].end(); ++iter2) {
                    int u = *iter1, v = *iter2;
                    if (v <= u) continue;
                    if (adj[u].count(v)) {
                        int cur = adj[i].size() + adj[u].size() + adj[v].size() - 6;
                        res = min(res, cur);
                    }
                }
            }
        }
        
        return res == INT_MAX ? -1 : res;
    }
};
```