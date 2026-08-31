# ✅☑[C++/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4223524/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4223524/)

---



# PLEASE UPVOTE IF IT HELPED

---

# Approaches
**(Also explained in the code)**
1. The `maximumPoints` function takes a vector of edges, a vector of coins, and an integer `k` as input.

1. It represents a problem where you are traveling along a tree-shaped graph and collecting coins. The goal is to maximize the points while reducing the value of each coin.

1. The function starts by creating an adjacency list `g` to represent the graph based on the provided edges.

1. It uses a 2D DP array `dp` to store intermediate results. The `memset` function initializes the DP array with -1 values.

1. The code defines a recursive DFS function `dfs` to calculate the maximum points starting from a given node. It takes the current node, its parent, and the number of reductions as parameters.

1. If the DP array already contains a result for the current node and reduction level, it returns that result to avoid redundant calculations.

1. If the number of reductions exceeds 14, it means the coins have been reduced too much, so the function returns 0.

1. It calculates the value of the current coins after applying the specified number of reductions.

1. The code then explores two ways to proceed:

    - `way1` represents the case where you collect the current coin and reduce it by `k`.
    - `way2` represents the case where you collect half of the current coin value.
1. It recursively explores child nodes in the graph, considering two possibilities: one where the current node's coin is reduced and one where it's not. The code accumulates the points from both ways.

1. Finally, the function returns the maximum of `way1` and `way2` and stores this result in the DP array for the current node and reduction level.

1. The function is called starting from the root node (node 0) with zero reductions.

1. The result is stored in `dp[0][0]`, which represents the maximum points starting from the root node with no coin reductions.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    

# Code
```C++ []

class Solution {
public:
    int maximumPoints(vector<vector<int>>& edges, vector<int>& coins, int k) {
        int n = coins.size();
        vector<vector<int>> g(n); // Create an adjacency list for the graph.

        // Populate the adjacency list based on the input edges.
        for (auto edge : edges) {
            int u = edge[0];
            int v = edge[1];
            g[u].push_back(v);
            g[v].push_back(u);
        }

        int dp[n][15]; // Create a 2D DP array to store intermediate results.
        memset(dp, -1, sizeof(dp)); // Initialize the DP array with -1 values.

        // Define a DFS function to calculate the maximum points.
        function<int(int, int, int)> dfs = [&](int node, int parent, int reduce) {
            if (dp[node][reduce] != -1)
                return dp[node][reduce];
            if (reduce >= 14) {
                return dp[node][reduce] = 0;
            }

            int currCoins = coins[node];
            for (int j = 0; j < reduce; j++)
                currCoins /= 2;

            int way1 = currCoins - k;
            int way2 = currCoins / 2;

            for (auto child : g[node]) {
                if (child != parent) {
                    dfs(child, node, reduce + 1);
                    dfs(child, node, reduce);
                    way1 = way1 + dp[child][reduce];
                    way2 = way2 + dp[child][reduce + 1];
                }
            }

            return dp[node][reduce] = max(way1, way2); // Store and return the maximum points.
        };

        dfs(0, -1, 0); // Start the DFS from the root node (node 0) with initial parameters.

        return dp[0][0]; // Return the maximum points from the root node with zero reduction.
    }
};

```
```C []

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int maximumPoints(int** edges, int edgesSize, int* edgesColSize, int* coins, int coinsSize, int k) {
    int n = coinsSize;
    int** g = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        g[i] = (int*)malloc(0 * sizeof(int));
    }

    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0];
        int v = edges[i][1];
        g[u] = (int*)realloc(g[u], (edgesColSize[i] + 1) * sizeof(int));
        g[u][edgesColSize[i]] = v;
        g[v] = (int*)realloc(g[v], (edgesColSize[i] + 1) * sizeof(int));
        g[v][edgesColSize[i]] = u;
    }

    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)malloc(15 * sizeof(int));
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 15; j++) {
            dp[i][j] = -1;
        }
    }

    int ans = 0;

    int dfs(int node, int parent, int reduce) {
        if (dp[node][reduce] != -1) {
            return dp[node][reduce];
        }
        if (reduce >= 14) {
            return dp[node][reduce] = 0;
        }

        int currCoins = coins[node];
        for (int j = 0; j < reduce; j++) {
            currCoins /= 2;
        }

        int way1 = currCoins - k;
        int way2 = currCoins / 2;

        for (int i = 0; i < edgesColSize[node]; i++) {
            int child = g[node][i];
            if (child != parent) {
                dfs(child, node, reduce + 1);
                dfs(child, node, reduce);
                way1 = way1 + dp[child][reduce];
                way2 = way2 + dp[child][reduce + 1];
            }
        }

        return dp[node][reduce] = (way1 > way2) ? way1 : way2;
    }

    dfs(0, -1, 0);

    return dp[0][0];
}


```
```Java []

class Solution {
    public int maximumPoints(int[][] edges, int[] coins, int k) {
        int n = coins.length;
        List<List<Integer>> g = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            g.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            g.get(u).add(v);
            g.get(v).add(u);
        }

        Integer[][] dp = new Integer[n][15];

        Function<Integer, Integer> dfs = node -> {
            if (dp[node][k] != null) {
                return dp[node][k];
            }
            if (k >= 14) {
                return dp[node][k] = 0;
            }

            int currCoins = coins[node];
            for (int j = 0; j < k; j++) {
                currCoins /= 2;
            }

            int way1 = currCoins - k;
            int way2 = currCoins / 2;

            for (int child : g.get(node)) {
                if (dp[child][k] == null) {
                    dp[child][k] = dfs.apply(child);
                }
                if (dp[child][k + 1] == null) {
                    dp[child][k + 1] = dfs.apply(child);
                }
                way1 += dp[child][k];
                way2 += dp[child][k + 1];
            }

            return dp[node][k] = Math.max(way1, way2);
        };

        dfs.apply(0);

        return dp[0][0];
    }
}

```

```python3 []
class Solution:
    def maximumPoints(self, edges: List[List[int]], coins: List[int], k: int) -> int:
        n = len(coins)
        g = [[] for _ in range(n)]

        for edge in edges:
            u, v = edge
            g[u].append(v)
            g[v].append(u)

        dp = [[-1] * 15 for _ in range(n)]

        def dfs(node, parent, reduce):
            if dp[node][reduce] != -1:
                return dp[node][reduce]
            if reduce >= 14:
                return 0

            currCoins = coins[node]
            for j in range(reduce):
                currCoins //= 2

            way1 = currCoins - k
            way2 = currCoins // 2

            for child in g[node]:
                if child != parent:
                    dfs(child, node, reduce + 1)
                    dfs(child, node, reduce)
                    way1 += dp[child][reduce]
                    way2 += dp[child][reduce + 1]

            dp[node][reduce] = max(way1, way2)
            return dp[node][reduce]

        dfs(0, -1, 0)

        return dp[0][0]


```
```javascript []

/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var maximumPoints = function(edges, coins, k) {
    const n = coins.length;
    const g = Array(n).fill().map(() => []);

    for (const edge of edges) {
        const [u, v] = edge;
        g[u].push(v);
        g[v].push(u);
    }

    const dp = Array(n).fill().map(() => Array(15).fill(-1));

    const dfs = (node, parent, reduce) => {
        if (dp[node][reduce] !== -1) {
            return dp[node][reduce];
        }
        if (reduce >= 14) {
            return dp[node][reduce] = 0;
        }

        let currCoins = coins[node];
        for (let j = 0; j < reduce; j++) {
            currCoins = Math.floor(currCoins / 2);
        }

        let way1 = currCoins - k;
        let way2 = Math.floor(currCoins / 2);

        for (const child of g[node]) {
            if (child !== parent) {
                dfs(child, node, reduce + 1);
                dfs(child, node, reduce);
                way1 += dp[child][reduce];
                way2 += dp[child][reduce + 1];
            }
        }

        dp[node][reduce] = Math.max(way1, way2);
        return dp[node][reduce];
    };

    dfs(0, -1, 0);

    return dp[0][0];
};

```
---


# PLEASE UPVOTE IF IT HELPED

---
---

---

