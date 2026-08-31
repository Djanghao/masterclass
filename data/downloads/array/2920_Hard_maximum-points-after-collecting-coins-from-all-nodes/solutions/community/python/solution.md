# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220643/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220643/)

---

# **Explanation**
Each node has two options
`op1` is to pay the cost `k`, but don't affect children.
`op1` is to collect the half, but reduce half of children.'

`floor(coin / 2)` is same as the bit shift to right.
We use `v` to represent the number of bit shifts.
Noticed that `coins[i] <= 1000`,
so after 14 bit shift,
no coin will be left.

So we apply dfs `dp` with memorization,
each node will recursivly check two options.
One small optimisation is that,
If `coin > k + k`, `op1` is always better than `op2`.
<br>

# **Complexity**
For each node,
we have 15 states for `v` from `0` to `14`.

Time `O(15n)`
Space `O(15n)`
<br>
 
**Java**
```java
    List<Integer>[] G;
    int[] vis;
    int dfs(int i, int p, int[] A, int k, int v) {
        if (v > 13) return 0;
        if (vis[i] > v) return 0;
        vis[i]++;
        int op1 = (A[i] >> v) - k, op2 = A[i] >> v + 1;
        for (int j : G[i]) {
            if (j == p) continue;
            op1 += dfs(j, i, A, k, v);
            op2 += dfs(j, i, A, k, v + 1);
        }
        return Math.max(op1, op2);
    }

    int maximumPoints(int[][] edges, int[] A, int k) {
        int n = edges.length + 1;
        G = new List[n];
        vis = new int[n];
        for (int i = 0; i < n; i++) {
            G[i] = new ArrayList();
        }
        for (int[] e : edges) {
            G[e[0]].add(e[1]);
            G[e[1]].add(e[0]);
        }
        return dfs(0, -1, A, k, 0);
    }
```

**C++**
Inspired from @vortrubac idea.
```cpp
    int vis[100001] = {};
    int dfs(int i, int p, vector<vector<int>> &G, vector<int>& A, int k, int v) {
        if (v > 13) return 0;
        if (vis[i] > v) return 0;
        int op1 = (A[i] >> v) - k, op2 = A[i] >> v + 1;
        vis[i]++;
        for (int j : G[i])
            if (j != p) {
                op1 += dfs(j, i, G, A, k, v);
                op2 += dfs(j, i, G, A, k, v + 1);
            }
        return max(op1, op2);
    }
    int maximumPoints(vector<vector<int>>& edges, vector<int>& A, int k) {
        vector<vector<int>> G(edges.size() + 1);
        for (auto &e : edges) {
            G[e[0]].push_back(e[1]);
            G[e[1]].push_back(e[0]);
        }
        return dfs(0, -1, G, A, k, 0);
    }
```

**Python**
```py
    def maximumPoints(self, edges: List[List[int]], A: List[int], k: int) -> int:
        n = len(edges) + 1
        G = [set() for i in range(n)]
        for i,j in edges:
            G[i].add(j)
            G[j].add(i)

        @cache
        def dp(i, pre, v):
            if v > 13:
                return 0
            a = A[i] >> v
            op1 = a - k + sum(dp(j, i, v) for j in G[i] if j != pre)
            if a >= k + k:
                return op1
            op2 = (a >> 1) + sum(dp(j, i, v + 1) for j in G[i] if j != pre)
            return max(op1, op2)

        return dp(0, -1, 0)
```
