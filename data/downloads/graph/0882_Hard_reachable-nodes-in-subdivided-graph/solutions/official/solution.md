# Official Solution

**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solution/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solution/)

---

[TOC]

## Solution
---
### Approach 1: Dijkstra's

**Intuition**

Treating the original graph as a weighted, undirected graph, we can use Dijkstra's algorithm to find all reachable nodes in the original graph.  However, this won't be enough to solve examples where subdivided edges are only used partially.

When we travel along an edge (in either direction), we can keep track of how much we use it.  At the end, we want to know every node we reached in the original graph, plus the sum of the utilization of each edge.

**Algorithm**

We use *Dijkstra's algorithm* to find the shortest distance from our source to all targets.  This is a textbook algorithm, refer to [this link](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) for more details.

Additionally, for each (directed) edge `(node, nei)`, we'll keep track of how many "new" nodes (new from subdivision of the original edge) were `used`.  At the end, we'll sum up the utilization of each edge.

Please see the inline comments for more details.

<iframe src="https://leetcode.com/playground/PktDsMD2/shared" frameBorder="0" width="100%" height="500" name="PktDsMD2"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(E \log N)$$, where $$E$$ is the length of `edges`.

* Space Complexity:  $$O(E)$$.
<br />
<br />