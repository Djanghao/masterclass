# Official Solution

**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solution/](https://leetcode.com/problems/bricks-falling-when-hit/solution/)

---

[TOC]

---
### Approach #1: Reverse Time and Union-Find [Accepted]

**Intuition**

The problem is about knowing information about the connected components of a graph as we cut vertices.  In particular, we'll like to know the size of the "roof" (component touching the top edge) between each cut.  Here, a cut refers to the erasure of a vertex.

As we may know, a useful data structure for joining connected components is a disjoint set union structure.  The key idea in this problem is that we can use this structure if we work in reverse: instead of looking at the graph as a series of sequential cuts, we'll look at the graph after all the cuts, and reverse each cut.

**Algorithm**

We'll modify our typical disjoint-set-union structure to include a `dsu.size` operation, that tells us the size of this component.  The way we do this is whenever we make a component point to a new parent, we'll also send it's size to that parent.

We'll also include `dsu.top`, which tells us the size of the "roof", or the component connected to the top edge.  We use an *ephemeral* "source" node with label `R * C` where all nodes on the top edge (with row number `0`) are connected to the source node.

For more information on DSU, please look at *Approach #2* in the [article here](https://leetcode.com/articles/redundant-connection/).

Next, we'll introduce `A`, the grid after all the cuts have happened, and initialize our disjoint union structure on the graph induced by `A` (nodes are grid squares with a brick; edges between 4-directionally adjacent nodes).

After, if we get an cut at `(r, c)` but the original `grid[r][c]` was always `0`, then we couldn't have had a meaningful cut - the number of dropped bricks is `0`.

Otherwise, we'll look at the size of the new roof after adding this brick at `(r, c)`, and compare them to find the number of dropped bricks.

Since we were working in reverse time order, we should reverse our working answer to arrive at our final answer.

<iframe src="https://leetcode.com/playground/Lna6PTkh/shared" frameBorder="0" width="100%" height="500" name="Lna6PTkh"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \cdot \alpha(N))$$, where $$N = R \cdot C$$ is the number of grid squares, and $$\alpha$$ is the [Inverse-Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse). We will insert at most $$N$$ nodes into the disjoint-set data structure which will require $$O(N \cdot \alpha(N))$$ time.  There will also be at most $$Q$$ hits where we must add a brick into the disjoint-set data structure which will require $$O(Q \cdot \alpha(N))$$ time. Since each hit location is unique, $$Q$$ must be less than or equal to $$N$$, so we can simplify the time complexity to $$O(N \cdot \alpha(N))$$. 

* Space Complexity: $$O(N)$$.