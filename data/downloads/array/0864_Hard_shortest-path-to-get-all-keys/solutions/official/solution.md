# Official Solution

**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solution/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solution/)

---

[TOC]

## Solution
---
### Approach 1: Brute Force + Permutations

**Intuition and Algorithm**

We have to pick up the keys $$K$$ in some order, say $$K_{\sigma_i}$$.

For each ordering, let's do a breadth first search to find the distance to the next key.

For example, if the keys are `'abcdef'`, then for each ordering such as `'bafedc'`, we will try to calculate the candidate distance from `'@' -> 'b' -> 'a' -> 'f' -> 'e' -> 'd' -> 'c'`.

Between each segment of our path (and corresponding breadth-first search), we should remember what keys we've picked up.  Keys that are picked up become part of a mask that helps us identify what locks we are allowed to walk through during the next breadth-first search.

Each part of the algorithm is relatively straightforward, but the implementation in total can be quite challenging.  See the comments for more details.

<iframe src="https://leetcode.com/playground/bMednP5j/shared" frameBorder="0" width="100%" height="500" name="bMednP5j"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(R * C * \mathcal{A} * \mathcal{A}!)$$, where $$R, C$$ are the dimensions of the grid, and $$\mathcal{A}$$ is the maximum number of keys ($$\mathcal{A}$$ because it is the "size of the alphabet".)  Each `bfs` is performed up to $$\mathcal{A} * \mathcal{A}!$$ times.

* Space Complexity:  $$O(R * C + \mathcal{A}!)$$, the space for the `bfs` and to store the candidate key permutations.
<br />
<br />


---
### Approach 2: Points of Interest + Dijkstra

**Intuition and Algorithm**

Clearly, we only really care about walking between points of interest: the keys, locks, and starting position.  We can use this insight to speed up our calculation.

Let's make this intuition more formal: any walk can be decomposed into *primitive* segments, where each segment (between two points of interest) is primitive if and only if it doesn't touch any other point of interest in between.

Then, we can calculate the distance (of a primitive segment) between any two points of interest, using a breadth first search.

Afterwards, we have some graph (where each node refers to at most $$13$$ places, and at most $$2^6$$ states of keys).  We have a starting node (at `'@'` with no keys) and ending nodes (at anywhere with all keys.)  We also know all the costs to go from one node to another - each node has outdegree at most 13.  This shortest path problem is now ideal for using Dijkstra's algorithm.

Dijkstra's algorithm uses a priority queue to continually searches the path with the lowest cost to destination, so that when we reach the target, we know it must have been through the lowest cost path.  Refer to [this link](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) for more detail.

Again, each part of the algorithm is relatively straightforward (for those familiar with BFS and Dijkstra's algorithm), but the implementation in total can be quite challenging.

<iframe src="https://leetcode.com/playground/Mox2BNP6/shared" frameBorder="0" width="100%" height="500" name="Mox2BNP6"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(RC(2\mathcal{A} + 1) + \mathcal{E} \log \mathcal{N})$$, where $$R, C$$ are the dimensions of the grid, and $$\mathcal{A}$$ is the maximum number of keys, $$\mathcal{N} = (2\mathcal{A} + 1) * 2^\mathcal{A}$$ is the number of nodes when we perform Dijkstra's, and $$\mathcal{E} = \mathcal{N} * (2 \mathcal{A} + 1)$$ is the maximum number of edges.

* Space Complexity:  $$O(\mathcal{N})$$.
<br />
<br />