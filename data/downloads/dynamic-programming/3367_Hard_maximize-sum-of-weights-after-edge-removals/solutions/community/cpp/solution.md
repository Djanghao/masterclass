# DFS Dynamic Programming

**Author:** ttn628826
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6078142/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6078142/)

---

# Approach

1. Dynamic Programming on Trees:

  - Use a DP table $dp[u][state]$ where:
    - $dp[u][0]$: Maximum weight sum when node $u$ can select at most $k$ edges.
    - $dp[u][1]$: Maximum weight sum when node $u$ can select at most $k-1$ edges (to account for the parent edge inclusion).

2. DFS Traversal:

  - Traverse the tree starting from an arbitrary root (node $0$).
  - For each node, compute:
    - The base sum ($sumWeights$): Total weight sum if none of the edges contribute to maximizing the weight.
    - Edge contributions ($differences$): The additional contribution of each edge if it is included in the weight sum.

3. Greedy Edge Selection:

  - Sort the $differences$ array in descending order to prioritize edges with the highest positive contributions.
  - Add the top $k$ contributions for $dp[u][0]$ and the top $k-1$ for $dp[u][1]$.

4. Final Result:

  - The result is the value of $dp[0][0]$ after processing the entire tree.

# Complexity
- Time complexity:

  - DFS Traversal: $O(n)$ (process each node and edge once).
  - Sorting Edge Contributions: $O(k\u22C5log(\u2061k))$ per node. Since each node can have at most $n\u22121$ neighbors, sorting dominates for $n\u226Bk$.
  - Total: $O(n+k\u22C5log\u2061(k))$, where $n$ is the number of nodes.

- Space complexity:

  - DP Table: $O(2n)=O(n)$.
  - Call Stack: $O(n)$ (for the DFS recursion).
  - Total: $O(n)$.

# Code
```cpp []
class Solution {
    void dfs(vector<vector<pair<int, int>>>& adj, int u, int parent, int k, vector<vector<long long>>& dp) {
        vector<long long> differences;
        long long sumWeights = 0;

        // Explore all neighbors of the current node
        for (auto [v, w] : adj[u]) {
            if (v == parent) 
                continue;  // Skip the parent node to avoid backtracking

            dfs(adj, v, u, k, dp);  // Recursively process the child node

            // Difference in weight contribution between keeping and removing the edge
            differences.push_back(w + dp[v][1] - dp[v][0]);

            // Accumulate the base case sum (dp[v][0]) for the subtree rooted at v
            sumWeights += dp[v][0];
        }

        // Sort differences in descending order to prioritize edges with higher contributions
        sort(rbegin(differences), rend(differences));

        // Case 1: Select at most `k` edges for the current node
        dp[u][0] = sumWeights;
        for (int i = 0; i < min(k, (int)differences.size()); ++i) {
            if (differences[i] > 0) 
                dp[u][0] += differences[i];
        }

        // Case 2: Select at most `k-1` edges for the current node (for parent inclusion)
        dp[u][1] = sumWeights;
        for (int i = 0; i < min(k - 1, (int)differences.size()); ++i) {
            if (differences[i] > 0) 
                dp[u][1] += differences[i];
        }
    }

public:
    long long maximizeSumOfWeights(vector<vector<int>>& edges, int k) {
        int n = edges.size() + 1;  // Total nodes in the tree
        vector<vector<pair<int, int>>> adj(n);

        // Build adjacency list
        for (auto& e : edges) {
            int u = e[0], v = e[1], w = e[2];
            adj[u].emplace_back(v, w);
            adj[v].emplace_back(u, w);
        }

        // dp[u][0]: Maximum sum when at most `k` edges are selected for node `u`
        // dp[u][1]: Maximum sum when at most `k-1` edges are selected for node `u` (to consider parent inclusion)
        vector<vector<long long>> dp(n, vector<long long>(2, -1));

        // Start DFS from the root node (0)
        dfs(adj, 0, -1, k, dp);

        // The result is the maximum sum when starting from the root node with at most `k` edges
        return dp[0][0];
    }
};

```