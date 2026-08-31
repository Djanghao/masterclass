# [C++] DFS + DP | Vector Counter Implementation | O(n)

**Author:** uds5501
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/743220/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/743220/)

---

This is a classic sub-tree class problem where you have to update child counts and then the parent's count.

Each counter is stored in its own `dp[node]`

First update the `child` and then update the `parent` count vector using:
```
	for (int i=0; i<27; i++) {
			dp[node][i] += dp[child][i];
	}
```

Time Complexity : `O(n)`
Space : `O(27*n)`

C++ Solution : 
```
class Solution {
public:
    void dfs (int node, int par, vector<vector<int>> &g, vector<vector<int>> &dp, vector<int> &ans, string &labels) {
        dp[node][labels[node]-'a']++;
        for (auto &child: g[node]) {
            if (child != par) {
                dfs(child, node, g, dp, ans, labels);
                for (int i=0; i<27; i++) {
                    dp[node][i] += dp[child][i];
                }
            }
        }
        ans[node] = dp[node][labels[node]-'a'];
    }
    vector<int> countSubTrees(int n, vector<vector<int>>& edges, string labels) {
        vector<vector<int>> g(n);
        for (int i=0; i<edges.size(); i++) {
            g[edges[i][0]].push_back(edges[i][1]);
            g[edges[i][1]].push_back(edges[i][0]);
        }
        vector <vector<int>> dp(n, vector<int>(27, 0));
        vector<int> ans(n);
        dfs(0, -1, g, dp, ans, labels);
        return ans;
    }
};
```