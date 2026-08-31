# Official Solution

**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solution/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solution/)

---

[TOC]

## Solution

---

### Overview

We are given the `root` node of a binary tree.

Our task is to find the longest zigzag path contained in the tree.

---

### Approach: Depth First Search

#### Intuition

We can see that there are only two options available from each parent node. We either go to its left or right child (if they exist).

Let us observe some situations in which we move from a parent node to its children.

Consider a parent node `p`, which itself is a left child. If `p` has a left child, `l`, we cannot combine the edges going into `p` and `l`, because they have the same direction and do not form a zigzag path. We can only begin a new zigzag path of length `1` by including the edge between `p` and `l`.

If `p` has a right child, `r`, we can include the edges going into `p` and `r` together because their directions are opposite and form a zigzag path. If we know the length of the zigzag path until node `p`, including `r` increases the length of the path by `1`.

Now assume, that node `p` itself is a right child. If it has a left child `l`, we can combine the edges going into `p` and `l`. The length of the zigzag path until `l` is equal to the length of the zigzag path until `p` plus `1`. If `p` has a right child, `r`, we must start over with only the edge between `p` and `r` forming a zigzag path of length `1`.

This provides us with a solution to the problem. All we have to do now is keep track of which way we should go to continue forming a zigzag path. Depending on the current direction, we either include the edge of the child in the zigzag path that includes the edge going into the parent node, or we start a new zigzag path with the edge going into the child if the current direction does not match the direction of the child node.

We can use a graph traversal algorithm like depth-first search (DFS) to traverse in the tree. In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

![img](../Figures/1372/1372-1.png)

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

To store the longest zigzag path found thus far, we define an answer variable `pathLength = 0`. We implement a `dfs` method that accepts a `TreeNode node`, a boolean `goLeft` to indicate whether we should go left for the continuation of the zigzag path, and `steps` which stores the length of the zigzag path so far.

It's worth noting that we can substitute any other indication for `goLeft`. We can use whether the parent node is a left or right child, or we can choose whether to continue the zigzag path to the right (similar to left).

In the `dfs` method, we first determine whether `node` is `null` or not. If `node` is `null`, we exit the method. If it is a valid node, we update our answer variable `pathLength = max(pathLength, steps)`.

If `goLeft` is `true`, the zigzag path will continue to the left. We can't go left in the next step to continue this zigzag path because we're already going left in this step. As a result, we call `dfs(node.left, false, steps + 1)`. We passed `steps + 1` because we kept going in a zigzag pattern.

It should be noted that if the left does not exit, this call will be returned while we check if `node` is `null` at the beginning. After the `null` node check, we update `pathLength`, so it should only update `pathLength` for valid nodes.

We use `dfs(node.right, true, 1)` for the right child. Because we must visit the left child the next time, we passed `true` for `goLeft`. We pass `1` for`steps` to begin a new zigzag path including only the parent to the right child edge as it cannot be merged with ongoing path.

If `goLeft` is set to `false`, the zigzag path will continue to the right. We use `dfs(node.left, false, 1)` for the left child because we need to start a new zigzag path from the parent to the left child edge and we can't take left again in the next step. For the right child, we call `dfs(node.right, true, steps + 1)` because we keep continuing in the zigzag pattern.

#### Algorithm

- Initialize a class-level variable `pathLength` to `0` to keep track of the longest ZigZag path found.

- Define the `dfs` function to traverse the tree:
  - If `node` is null, return immediately (base case).
  - Update `pathLength` to be the maximum of its current value and `steps` (tracks the current ZigZag path length).
  - If `goLeft` is `true` (current direction is left):
    - Call `dfs` on the left child with `goLeft` set to `false` and `steps + 1` (continuing the ZigZag path).
    - Call `dfs` on the right child with `goLeft` set to `true` and `steps` reset to `1` (starting a new path in the opposite direction).
  - If `goLeft` is `false` (current direction is right):
    - Call `dfs` on the left child with `goLeft` set to `false` and `steps` reset to `1` (starting a new path in the opposite direction).
    - Call `dfs` on the right child with `goLeft` set to `true` and `steps + 1` (continuing the ZigZag path).

- Define the `longestZigZag` function:
  - Call `dfs` starting at the `root` with `goLeft` set to `true` and `steps` set to `0`.
  - Return the value of `pathLength` as the longest ZigZag path in the tree.

#### Implementation

<iframe src="https://leetcode.com/playground/RVm5UhAK/shared" frameBorder="0" width="100%" height="429" name="RVm5UhAK"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes in the given binary tree.

* Time complexity: $O(n)$

    - Using the `dfs` function, we recursively visit both the childrens of every node once. As a result, it takes $O(n)$ time because there are $n$ nodes in total. We iterate over each edge once to visit all the all nodes, which again takes $O(n)$ operations as there are $n - 1$ edges in the tree.

* Space complexity: $O(n)$

    - The recursion stack used by `dfs` can have no more than $n$ elements in the worst-case scenario where each node is added to it. It would take up $O(n)$ space in that case.

---