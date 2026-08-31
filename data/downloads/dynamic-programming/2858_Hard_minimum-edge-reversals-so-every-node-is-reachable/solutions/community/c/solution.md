# [Java/C++/Python] DP on Tree, 2 Solutions

**Author:** lee215
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052139/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052139/)

---

# **Solution 1: Memo DFS**
`G[i][j]` is the cost to go from `i` to `j`.
For edge `[i, j]`,
we have `G[i][j] = 0, G[j][i] = 1`.

In each call of `dfs(i, j)`,
`i` is the parent, `j` is the current node,
and we return the cost from `j` to all other nodes in this direction.
We recursively accumulate `dfs(j, k) + G[j][k]`,
where `k` is the children of `j`.
and then return the sum.

Finally we return `dfs(-1, i)` for each node `i` as the root.

Time `O(n)`, worst `O(n^2)`
Space `O(n)`
<br>

**C++**
```cpp
    vector<int> minEdgeReversals(int n, vector<vector<int>>& edges) {
        unordered_map<int, unordered_map<int, int>> G, dp;
        for (auto& e : edges) {
          G[e[0]][e[1]] = 0, G[e[1]][e[0]] = 1;
          dp[e[0]][e[1]] = dp[e[1]][e[0]] = dp[-1][e[0]] = dp[-1][e[1]] = -1;
        }

        function<int(int, int)> dfs = [&](int i, int j) {
          if (dp[i][j] >= 0)
              return dp[i][j];
          dp[i][j] = 0;
          for (const auto& k : G[j]) {
            if (k.first == i) continue;
            dp[i][j] += dfs(j, k.first) + k.second;
          }
          return dp[i][j];
        };

        vector<int> res(n);
        for (int i = 0; i < n; i++) {
          res[i] = dfs(-1, i);
        }
        return res;
    }
```

**Python**
```py
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        G = defaultdict(dict)
        for i,j in edges:
            G[i][j], G[j][i] = 0, 1

        @cache
        def dp(i, j):
            return sum(dp(j, k) + G[j][k] for k in G[j] if k != i)

        return [dp(-1, i) for i in range(n)]
```
<br>

# Solution 2: Twice DFS

The solution is a good but actuallly TLE soluiton.
In the case of `[[0,1],[0,2],[0,3]....[0,n-1]]`,
each edge will be picked in each call of `dfs`,
it will become `O(n^2)` in total.

One solution is get the result for one root,
then pass the result in the tree by one more `dfs`.

Time `O(n)`
Space `O(n)`

**Java**
```java
    Map<Integer, Map<Integer, Integer>> G = new HashMap<>();
    int[] res;

    public int[] minEdgeReversals(int n, int[][] edges) {
        G.clear();
        for (int[] e : edges) {
            G.computeIfAbsent(e[0], x -> new HashMap<>()).put(e[1], 0);
            G.computeIfAbsent(e[1], x -> new HashMap<>()).put(e[0], 1);
        }

        res = new int[n];
        Arrays.fill(res, -1);

        dfs(0, dp(-1, 0));
        return res;
    }

    private int dp(int i, int j) {
        int sum = 0;
        for (Integer k : G.get(j).keySet()) {
            if (k == i) continue;
            sum += dp(j, k) + G.get(j).get(k);
        }
        return sum;
    }

    private void dfs(int i, int v) {
        res[i] = v;
        for (Integer j : G.get(i).keySet())
            if (res[j] < 0)
                dfs(j, v - G.get(i).get(j) + G.get(j).get(i));
    }
```

**C++**
```cpp
    vector<int> minEdgeReversals(int n, vector<vector<int>>& edges) {
        unordered_map<int, unordered_map<int, int>> G;
        for (auto& e : edges) {
            G[e[0]][e[1]] = 0, G[e[1]][e[0]] = 1;
        }
        vector<int> res(n, -1);

        function<int(int, int)> dp = [&](int i, int j) {
            int cur = 0;
            for (auto& k : G[j]) {
                if (k.first == i) continue;
                cur += dp(j, k.first) + k.second;
            }
            return cur;
        };

        function<void(int, int)> dfs = [&](int i, int v) {
            res[i] = v;
            for (auto& j : G[i])
                if (res[j.first] < 0)
                    dfs(j.first, v - j.second + G[j.first][i]);
        };

        dfs(0, dp(-1, 0));
        return res;
    }
```
**Python**
```py
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        G = defaultdict(dict)
        for i,j in edges:
            G[i][j], G[j][i] = 0, 1

        def dp(i, j):
            return sum(dp(j, k) + G[j][k] for k in G[j] if k != i)

        def dfs(i, v = 0):
            res[i] = v
            for j in G[i]:
                if res[j] < 0:
                    dfs(j, v - G[i][j] + G[j][i])

        res = [-1] * n
        dfs(0, dp(-1, 0))
        return res
```
