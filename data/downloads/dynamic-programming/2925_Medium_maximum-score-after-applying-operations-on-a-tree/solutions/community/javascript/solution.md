# ✅☑[C++/Java/Python/JavaScript] || Tree || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251849/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251849/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The algorithm is used to find the maximum score after applying a series of operations on a tree.
1. The tree is represented as an adjacency list using the  `g` vector.
1. Two depth-first traversals are performed. The first one computes the sum of values in each subtree (`pre` function), and the second one calculates the maximum score for each node (`dfs` function).
1. The `subtree` array stores the sum of values in each subtree.
1. The `dp` array stores the maximum score for each node.
1. The algorithm returns the maximum score at the root node (node 0).



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    long long maximumScoreAfterOperations(vector<vector<int>>& edges, vector<int>& values) {
        int n = values.size();
        vector<vector<int>> g(n);

        // Create an adjacency list to represent the tree structure.
        for (int i = 0; i < n - 1; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            g[u].push_back(v);
            g[v].push_back(u);
        }

        vector<long long> subtree(n);

        // Initialize the subtree array with values at each node.
        for (int i = 0; i < n; i++) {
            subtree[i] = values[i];
        }

        // First, perform a depth-first traversal to compute the sum of values in each subtree.
        function<void(int, int)> pre = [&](int node, int parent) {
            for (auto child : g[node]) {
                if (child != parent) {
                    pre(child, node);
                    subtree[node] += subtree[child];
                }
            }
        };
        pre(0, -1);

        vector<long long> dp(n, -1);

        // Then, perform another depth-first traversal to calculate the maximum score for each node.
        function<void(int, int)> dfs = [&](int node, int parent) {
            dp[node] = subtree[node] - values[node];
            long long sum = 0ll;
            long long cnt = 0;

            for (auto child : g[node]) {
                if (child != parent) {
                    dfs(child, node);
                    cnt++;
                    sum += dp[child];
                }
            }

            if (cnt) {
                dp[node] = std::max(dp[node], values[node] + sum);
            }
        };
        dfs(0, -1);

        // The maximum score is stored at the root node (node 0).
        return dp[0];
    }
};



```
```C []

#include <stdio.h>
#include <stdlib.h>

#define MAX_N 1005

int n;
int values[MAX_N];
int g[MAX_N][MAX_N];
long long subtree[MAX_N];
long long dp[MAX_N];

void pre(int node, int parent) {
    for (int i = 0; i < n; i++) {
        if (g[node][i] && i != parent) {
            pre(i, node);
            subtree[node] += subtree[i];
        }
    }
}

void dfs(int node, int parent) {
    dp[node] = subtree[node] - values[node];
    long long sum = 0LL;
    long long cnt = 0;
    for (int i = 0; i < n; i++) {
        if (g[node][i] && i != parent) {
            dfs(i, node);
            cnt++;
            sum = sum + dp[i];
        }
    }
    if (cnt)
        dp[node] = (dp[node] > values[node] + sum) ? dp[node] : values[node] + sum;
}

long long maximumScoreAfterOperations(int edges[][2], int* values, int n) {
    for (int i = 0; i < n; i++) {
        subtree[i] = values[i];
    }

    for (int i = 0; i < n - 1; i++) {
        int u = edges[i][0];
        int v = edges[i][1];
        g[u][v] = 1;
        g[v][u] = 1;
    }

    pre(0, -1);
    for (int i = 0; i < n; i++) {
        dp[i] = -1;
    }

    dfs(0, -1);
    return dp[0];
}

int main() {
    n = 5;
    int values[] = {3, 2, 1, 5, 4};
    int edges[4][2] = {{0, 1}, {1, 2}, {0, 3}, {3, 4}};

    long long result = maximumScoreAfterOperations(edges, values, n);
    printf("Maximum score after operations: %lld\
", result);

    return 0;
}



```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public long maximumScoreAfterOperations(int[][] edges, int[] values) {
        int n = values.length;
        List<List<Integer>> g = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            g.add(new ArrayList<>());
        }
        for (int i = 0; i < n - 1; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            g.get(u).add(v);
            g.get(v).add(u);
        }
        
        long[] subtree = new long[n];
        for (int i = 0; i < n; i++) {
            subtree[i] = values[i];
        }
        
        pre(g, 0, -1, subtree, values);
        long[] dp = new long[n];
        for (int i = 0; i < n; i++) {
            dp[i] = -1;
        }
        dfs(g, 0, -1, dp, subtree, values);
        return dp[0];
    }
    
    private void pre(List<List<Integer>> g, int node, int parent, long[] subtree, int[] values) {
        for (int child : g.get(node)) {
            if (child != parent) {
                pre(g, child, node, subtree, values);
                subtree[node] += subtree[child];
            }
        }
    }
    
    private void dfs(List<List<Integer>> g, int node, int parent, long[] dp, long[] subtree, int[] values) {
        dp[node] = subtree[node] - values[node];
        long sum = 0;
        int cnt = 0;
        for (int child : g.get(node)) {
            if (child != parent) {
                dfs(g, child, node, dp, subtree, values);
                cnt++;
                sum += dp[child];
            }
        }
        if (cnt > 0) {
            dp[node] = Math.max(dp[node], values[node] + sum);
        }
    }
}



```
```python3 []
from typing import List

class Solution:
    def maximumScoreAfterOperations(self, edges: List[List[int]], values: List[int]) -> int:
        n = len(values)
        g = [[] for _ in range(n)]
        for edge in edges:
            u, v = edge
            g[u].append(v)
            g[v].append(u)
        
        subtree = [0] * n
        for i in range(n):
            subtree[i] = values[i]
        
        def pre(node, parent):
            nonlocal subtree
            for child in g[node]:
                if child != parent:
                    pre(child, node)
                    subtree[node] += subtree[child]
        
        pre(0, -1)
        dp = [-1] * n
        
        def dfs(node, parent):
            nonlocal dp
            dp[node] = subtree[node] - values[node]
            sum = 0
            cnt = 0
            for child in g[node]:
                if child != parent:
                    dfs(child, node)
                    cnt += 1
                    sum += dp[child]
            if cnt > 0:
                dp[node] = max(dp[node], values[node] + sum)
        
        dfs(0, -1)
        return dp[0]



```
```javascript []

class Solution {
    maximumScoreAfterOperations(edges, values) {
        const n = values.length;
        const g = new Array(n).fill(null).map(() => []);
        for (const edge of edges) {
            const [u, v] = edge;
            g[u].push(v);
            g[v].push(u);
        }
        
        const subtree = new Array(n);
        for (let i = 0; i < n; i++) {
            subtree[i] = values[i];
        }
        
        const pre = (node, parent) => {
            for (const child of g[node]) {
                if (child !== parent) {
                    pre(child, node);
                    subtree[node] += subtree[child];
                }
            }
        };
        
        pre(0, -1);
        
        const dp = new Array(n).fill(-1);
        
        const dfs = (node, parent) => {
            dp[node] = subtree[node] - values[node];
            let sum = 0;
            let cnt = 0;
            for (const child of g[node]) {
                if (child !== parent) {
                    dfs(child, node);
                    cnt++;
                    sum += dp[child];
                }
            }
            if (cnt > 0) {
                dp[node] = Math.max(dp[node], values[node] + sum);
            }
        };
        
        dfs(0, -1);
        return dp[0];
    }
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---