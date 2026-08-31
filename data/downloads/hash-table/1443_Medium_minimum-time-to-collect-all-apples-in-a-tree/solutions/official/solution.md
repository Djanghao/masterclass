# Official Solution

**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solution/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solution/)

---

[TOC]

## Solution

---

### Overview

The problem presents an undirected tree with `n` nodes. Some nodes of the tree might have an apple. Our task is to compute the minimum time it takes to collect all the apples. Because traversal over each edge takes one unit of time, our task is to find the fewest number of steps required to collect all of the apples, starting at vertex `0` and coming back to this vertex.

Before moving on to the solution, consider some of the graph terminologies that will be used later:

![img](../Figures/1443/1443-1.png)

1. **Child**: A node that is one edge further away from a given node in a rooted tree. In the above image, nodes `3, 4` are children of `1`, which is called the parent.
2. **Descendants**: Descendants of a node are children, children of children, and so on. In the above image, nodes `3, 4, 6, 7, 9` are all descendants of `1`.
3. **Subtree**: A subtree of a node `T` is a tree `S` consisting of a node `T` and all of its descendants in `T`. The subtree corresponding to the root node is the entire tree.

---

### Approach: Depth First Search

#### Intuition

We can see intuitively that it is best to explore all children of each node without returning to the root. This will avoid travelling the same path multiple times.

Let's take an example to understand it better. Say we start with `root` node and a child `p`. Node `p` has two children, `c1` and `c2`, each having an apple. We can see that the path `root->p->c1->p->c2->p->root` is always preferable to `root->p->c1->p->root->p->c2->p->root`. Here's a visual representation of both scenarios:

![img](../Figures/1443/1443-2.png)

It shows that we should visit all children of a node before going back. Also notice that if we know the time it takes to collect all the apples in the subtrees of `c1` and `c2`, we can use them to compute the time required to collect apples in the subtree of `p`. And, if we have the time it takes to collect all the apples for node `p`, we can compute the answer of its parent, which is `root`(in the example). A depth-first search (DFS) is a good algorithm for solving such problems where we need to compute the answer of a parent node using its children.

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the next branch and continue exploring.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

Following from the above discussion, the idea is to visit all the children of every node recursively, compute the time it takes to collect apples from each of the children, and use that time to compute the answer of the parent node.

Let's say we have a node `c1` which is a child of a node `p`. We first find the time it takes to collect all the apples in the subtree of `c1`, let's call it `t`. If `t = 0` and `hasApple[c1] = false`, that means there are no apples in this subtree and there is no point in visiting it.

Otherwise, we must visit the subtree and collect all the apples. The cost of this will be `t + 2`. The `+ 2` is because we spend one second moving to `c1`, then after we collect all the apples, we have to spend another second to move from `c1` back to `p`.

Here's a visual example. The numbers beside each edge represent how much time we need to spend crossing it, and the numbers in each node represent how much time it costs to collect all apples in the subtree:

![img](../Figures/1443/1443-3.png)


#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Start a DFS traversal.
    - We use a function `dfs` to perform the traversal. For each call, pass `node, parent, adj, hasApple` as the parameters. The `dfs` would return the time to collect all the apples in `node`'s subtree. We start with node `0` and parent as `-1`.
    - Mark the `node` as visited.
    - Create a variable `totalTime` to store the time required to collect all the apples in the `node`'s subtree. Initalize it with `0`.
    - Create another variable `childTime` to store time required to collect all the apples for each immediate child of `node`. Intialize it with `0`.
    - Iterate over all the children of the `node` (nodes that share an edge) and check if any `child` is equal to the `parent`. If the `child` is equal to the `parent`, we will not visit it again.
    - If the `child` is not equal to the `parent`, recursively call the dfs with node as `child` and parent as `node`. At the end of `dfs` traversal, we have the time required to collect all the apples in its subtree. Store it in `childTime`.
    - If the `child` has an apple (`hasApple[child] = true`) or there are any apples in its subtree, which can be checked if we need any time to collect apples (`childTime > 0`), we must visit `child`, which takes one unit of time, collect all apples in the `child`'s subtree which takes `childTime`, and return, which again takes one unit of time. So, we add `childTime + 2` to the `totalTime`.
    - If neither the child nor its subtree has apples, we don't need to include the time to visit this `child`, as we will consider we never visited this `child`'s subtree.
4. At the end of `dfs` traversal for node `0`, we have the time required to collect the apples in the subtree of node `0`.

#### Implementation

<iframe src="https://leetcode.com/playground/YRbGqzxi/shared" frameBorder="0" width="100%" height="500" name="YRbGqzxi"></iframe>

#### Complexity Analysis

Here, $n$ be the number of nodes.

* Time complexity: $O(n)$

    - Each node is visited by the `dfs` function once, which takes $O(n)$ time in total. We also iterate over the edges of every node once (since we don't visit a node more than once, we don't iterate its edges more than once), which adds $O(n)$ time since we have $n - 1$ edges.
    - We also require $O(n)$ time to initialize the adjacency list and the `visit` array.

* Space complexity: $O(n)$

    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.
    - We also require $O(n)$ space for the adjacency list and the `visit` array.