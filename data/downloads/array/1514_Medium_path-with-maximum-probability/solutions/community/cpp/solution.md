# ✅100.00%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 148
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5696030/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5696030/)

---

# Intuition \u2712\uFE0F
#### To solve this problem, we need to find the path between two nodes in an undirected graph that maximizes the product of edge probabilities. The Bellman-Ford algorithm, which is typically used to find the shortest paths in graphs with negative weights, can be adapted to solve this problem. Instead of minimizing distances, we will maximize probabilities by updating the maximum probability to reach each node iteratively.

---
# Approach \uD83D\uDE80
#### 1\uFE0F\u20E3Initialize an array `dist` where `dist[i]` holds the maximum probability to reach node `i` from the start node. Set `dist[start] = 1 `since the probability of starting at the start node is 1.
#### 2\uFE0F\u20E3 Perform up to `n-1` iterations, where `n` is the number of nodes. In each iteration, check each edge and update the probability of reaching the neighboring nodes.
#### 3\uFE0F\u20E3 For each edge `(u, v)`, if the probability of reaching `v` through `u` (i.e., `dist[u] * succProb[i]`) is greater than the current known probability to reach `v` (`dist[v]`), update `dist[v]`. Similarly, update `dist[u]` if the probability of reaching `u` through `v` is greater.
#### 4\uFE0F\u20E3After completing the iterations, `dist[end]` will contain the maximum probability of reaching the end node from the start node. If there's no path, it will remain `0`.
---

- # Time complexity:\u23F2\uFE0F
#### The algorithm runs in $$O(n\xD7E)$$, where $$n$$ is the number of nodes and $$E$$ is the number of edges. This is because we perform `n-1` iterations over all the edges.

- # Space complexity:\uD83D\uDEF0\uFE0F
#### The space complexity is $$O(n)$$ since we are using an array `dist` of size `n` to store the maximum probability for each node.
---
# Code
```python []
class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        dist = [0] * n
        dist[start] = 1
        
        for _ in range(n - 1):
            updated = False
            for i, (u, v) in enumerate(edges):
                if dist[u] * succProb[i] > dist[v]:
                    dist[v] = dist[u] * succProb[i]
                    updated = True
                if dist[v] * succProb[i] > dist[u]:
                    dist[u] = dist[v] * succProb[i]
                    updated = True
            if not updated:
                break
        
        return dist[end]
```
```C++ []
class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start_node, int end_node) {
        vector<double> maxProb(n, 0.0);
        maxProb[start_node] = 1.0;

        for (int i = 0; i < n - 1; ++i) {
            bool updated = false;
            for (int j = 0; j < edges.size(); ++j) {
                int u = edges[j][0];
                int v = edges[j][1];
                double prob = succProb[j];

                if (maxProb[u] * prob > maxProb[v]) {
                    maxProb[v] = maxProb[u] * prob;
                    updated = true;
                }
                if (maxProb[v] * prob > maxProb[u]) {
                    maxProb[u] = maxProb[v] * prob;
                    updated = true;
                }
            }
            if (!updated) break;
        }

        return maxProb[end_node];
    }
};

```
```javascript []
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let maxProb = new Array(n).fill(0.0);
    maxProb[start_node] = 1.0;

    for (let i = 0; i < n - 1; i++) {
        let updated = false;
        for (let j = 0; j < edges.length; j++) {
            let u = edges[j][0];
            let v = edges[j][1];
            let prob = succProb[j];

            if (maxProb[u] * prob > maxProb[v]) {
                maxProb[v] = maxProb[u] * prob;
                updated = true;
            }
            if (maxProb[v] * prob > maxProb[u]) {
                maxProb[u] = maxProb[v] * prob;
                updated = true;
            }
        }
        if (!updated) break;
    }

    return maxProb[end_node];
};

```
```java []
class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start_node, int end_node) {
        double[] maxProb = new double[n];
        maxProb[start_node] = 1.0;

        for (int i = 0; i < n - 1; i++) {
            boolean updated = false;
            for (int j = 0; j < edges.length; j++) {
                int u = edges[j][0];
                int v = edges[j][1];
                double prob = succProb[j];

                if (maxProb[u] * prob > maxProb[v]) {
                    maxProb[v] = maxProb[u] * prob;
                    updated = true;
                }
                if (maxProb[v] * prob > maxProb[u]) {
                    maxProb[u] = maxProb[v] * prob;
                    updated = true;
                }
            }
            if (!updated) break;
        }

        return maxProb[end_node];
    }
}

```
```C# []
public class Solution {
    public double MaxProbability(int n, int[][] edges, double[] succProb, int start_node, int end_node) {
        double[] maxProb = new double[n];
        maxProb[start_node] = 1.0;

        for (int i = 0; i < n - 1; i++) {
            bool updated = false;
            for (int j = 0; j < edges.Length; j++) {
                int u = edges[j][0];
                int v = edges[j][1];
                double prob = succProb[j];

                if (maxProb[u] * prob > maxProb[v]) {
                    maxProb[v] = maxProb[u] * prob;
                    updated = true;
                }
                if (maxProb[v] * prob > maxProb[u]) {
                    maxProb[u] = maxProb[v] * prob;
                    updated = true;
                }
            }
            if (!updated) break;
        }

        return maxProb[end_node];
    }
}

```
---
![Screenshot 2023-08-20 065922.png](./images/0.png)


