# Official Solution

**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solution/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solution/)

---

[TOC]

### Approach #1: Convert to Graph [Accepted]

**Intuition**

Instead of a binary tree, if we converted the tree to a general graph, we could find the shortest path to a leaf using breadth-first search.

**Algorithm**

We use a depth-first search to record in our graph each edge traveled from parent to node.

After, we use a breadth-first search on nodes that started with a value of `k`, so that we are visiting nodes in order of their distance to `k`. When the node is a leaf (it has one outgoing edge, where the `root` has a "ghost" edge to `null`), it must be the answer.

<iframe src="https://leetcode.com/playground/hWTqP8mU/shared" frameBorder="0" width="100%" height="500" name="hWTqP8mU"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ where $$N$$ is the number of nodes in the given input tree. We visit every node a constant number of times.

* Space Complexity: $$O(N)$$, the size of the graph.

---
### Approach #2: Annotate Closest Leaf [Accepted]

**Intuition and Algorithm**

Say from each node, we already knew where the closest leaf in its subtree is. Using any kind of traversal plus memoization, we can remember this information.

Then the closest leaf to the target (in general, not just subtree) has to have the lowest common ancestor with the `target` that is on the path from the `root` to the `target`. We can find the path from `root` to `target` via any kind of traversal, and look at our annotation for each node on this path to determine all leaf candidates, choosing the best one.

<iframe src="https://leetcode.com/playground/fL4CVewb/shared" frameBorder="0" width="100%" height="500" name="fL4CVewb"></iframe>

**Complexity Analysis**

* Time and Space Complexity: $$O(N)$$. The analysis is the same as in *Approach #1*.