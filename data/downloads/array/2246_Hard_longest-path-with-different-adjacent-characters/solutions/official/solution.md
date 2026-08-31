# Official Solution

**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solution/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solution/)

---

[TOC]

## Solution

---

### Overview

The problem presents an undirected tree with `n` nodes. Each node of the tree has a character associated with it. Our task is to find the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.

---

### Approach 1: Depth First Search

#### Intuition

Intuitively, we can think that for any parent node, the longest path will be formed by choosing at most the two longest chains of its child nodes. Here's a visual explanation of the two scenarios that could occur where node `p` is the parent node:

![img](../Figures/2246/2246-1.png)

So, for a node `p` if we find the two longest chains of its child nodes, say `L1` and `L2` we can compute the longest path centered at node `p`. For each node, we can find the maximum of value `1 + L1 + L2` to find the answer. The addition of one comes for the node `p` itself.

Let's take an example to understand this better. Consider the following subtree, where each node has a character and the length of the longest chain starting from the node (including it). Assume, we have visited all the children of node `a` and are yet to compute the answer for the longest path centered at node `a`.

![img](../Figures/2246/2246-2.png)

We pick up the two longest chains, which have characters different from those of node `a`. In this case, these are the nodes with the characters `b` and `d`. It should be noted, that depending on the children of a node and the characters associated with the children and the node, we might not be unable to pick up any chains or might only be able to pick up one chain. We will not be able to pick up any chains centered at the node when it does not have any children or all its children have the same character as the node. In such cases, we will consider the length of the longest and second longest chains amongst its children as `0`.

![img](../Figures/2246/2246-3.png)

The longest path centered at node `a` will be `1 + 2 + 3 = 6`.

Going forward, we also need the length of the longest chain starting from `a` to be used by its parent. It would be `1 + L1`, where `L1` is the length of the longest chain of a child, which leads to `1 + 3 = 4`.

![img](../Figures/2246/2246-4.png)

This way we can figure out the length of the longest path by selecting each node as the center and using the two longest chains of its children.

A good algorithm to pass the information from the children to their parents is a depth-first search (DFS). In DFS, we explore nodes as far as possible along each branch. Upon reaching the end of the current branch, we backtrack to the next possible branch and continue exploring.

Following the above approach, the idea is to visit all the children of every node recursively, get the length of the longest chain starting from the child, and use the longest and second longest chains to get the longest path centered at that node.

We initialize the answer variable `longestPath = 1`, since a single node can always be taken as its own path. We implement a DFS traversal algorithm for a `node` that returns the length of longest chain starting from the `node` and begin with the root `0`. We initialize two variables, say `longestChain = 0` and `secondLongestChain = 0` to store the longest and second longest chains amongst its children.

We recursively iterate over each `child` of the `node`. We store the longest chain starting from `child` in another variable, say `longestChainStartingFromChild`. Using `longestChainStartingFromChild`, we update `longestChain` and `secondLongestChain` to store the longest and second longest chains amongst the children of the `currentNode`.

The answer variable is updated to `longestPath = max(longest, longestChain + secondLongestChain + 1)`. In the end, we return the longest chain starting from the `node` (including it) which is `1 + longestChain`. The answer is updated with both chains because we are treating the current `node` as the center. But when we return, we can only include one chain, otherwise there would be three branches at the current `node` which is not a valid path.

#### Algorithm

1. Initialize an array `children`, where `children[X]` contains all the children of node `X`.
2. Initialize the answer variable `longestPath = 1` (a single node can always be selected).
3. Start a DFS traversal.
    - We use a `dfs` function to perform the traversal. For each call, pass `currentNode`, `children`, `s`, and `longestPath` as the parameters. It returns the length of the longest chain starting from that `currentNode`. 
    - Initialize two integers `longestChain = 0` and `secondLongestChain = 0`, to store the longest and the second longest chains across all the children of the `currentNode`.
    - Iterate over all the children and for every `child`, recursively call the dfs function with `child, children, s, longestPath` as the parameters. This call returns the length of longest path `longestChainStartingFromChild` starting from `child`.
    - Use `longestChainStartingFromChild` to update `longestChain` and `secondLongestChain`.
    - After iterating over all the children, use `longestChain` and `secondLongestChain` to update the `longestPath` to `max(longestPath, longestChain + secondLongestChain + 1)`. The `+1` comes from the `currentNode` which connects the two chains.
    - Return the length of the longest chain including the `currentNode` which is `longestChain + 1`.
4. Return `longestPath`.

#### Implementation

<iframe src="https://leetcode.com/playground/mh9argsJ/shared" frameBorder="0" width="100%" height="500" name="mh9argsJ"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes.

* Time complexity: $O(n)$

    - Each node is visited by the `dfs` function once, which takes $O(n)$ time in total. We also iterate over the edges of every node once (since we don't visit a node more than once, we don't iterate its edges more than once), which adds $O(n)$ time since we have $n - 1$ edges.
    - We also need $O(n)$ time to initialize the `children` array.

* Space complexity: $O(n)$

    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. So, we would take up $O(n)$ space in the worst case.
    - We also need $O(n)$ space for the the `children` array.

---

### Approach 2: Breadth First Search

#### Intuition

We can also use a breadth-first search (BFS) algorithm using the child nodes to get the answer for the parent node.

We need to visit all the children first, get the length of the longest chain using each child, and use it to compute the answer for the parent node. So, we need to move from the leaf nodes to the root.

As we know, in a tree, each step from top to bottom is part of a level/depth. The level count starts with `0` (for the root node) and increments by `1` at each level or step. Here, we need a BFS traversal that covers all of the nodes at the current level, say at level `l` before moving to the nodes present one level above at level `l - 1`. To perform such a traversal, we push all the leaf nodes into the BFS queue first and then move up until we reach the root.

Similar to the above approach, we initialize the answer variable `longestPath = 1`, since a single node is always an answer. We declare an array, say `childrenCount` to count the number of children of each node. We also initialize a 2D array, `longestChains` where `longestChains[node][0]` and `longestChains[node][1]` store the longest and second longest chains among its children. If a node, say `A` has no children or all children are covered, we update `longestChains[A][0]` to store the length of the longest chain starting from `A` (including it) to be used by its parent. 

We push the leaf nodes into the queue (nodes with `childrenCount == 0`). For each leaf node, say `A` we also set the longest chain starting from `A` to `longestChains[A][0] = 1`.

Next, we perform the BFS traversal until the queue is empty. We pop out the first element, say `currentNode` from the queue. We get the `currentNode`'s parent from `parent[currentNode]`, let's call it `par`.

We get the longest chain starting from the `currentNode` in `longestChainStartingFromCurrNode` using `longestChainStartingFromCurrNode = longestChains[currentNode][0]`. If the characters of the `currentNode` and its parent do not match, we update the `longestChains[par]` using `longestChainStartingFromNode` if possible.

The answer variable is updated to `longestPath = max(longest, longestChains[par][0] + longestChains[par][1] + 1)`. We also reduce the child count of the `par` by one to mark that we have covered a child of the `par` node.

If the child count of a node reaches `0`, i.e., `childrenCount[par] == 0` it means we have covered all its children, and it would behave as a leaf node. We push the `par` into the queue and also increment `longestChains[par][0]` by `1` to store the largest chain starting from the `par` to be used for its parent.

This algorithm of moving from leaf nodes to the root by decrementing the count of children is similar to the topological sort algorithm (Kahn's algorithm). If you are not familiar with this algorithm, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/).

#### Algorithm

1. Initialize an array `childrenCount`, that stores the number of children of a node `i` in `childrenCount[i]`.
    - To populate it, we iterate over all the nodes, and for each node, increment `childrenCount[parent[node]]` by 1. Since the root node `0` does not have a parent, we start iterating from node `1` to node `n - 1`.
2. Initialize another 2D-array `longestChains[n][2]`. For a node `i`, it stores the length of the longest and second longest chains among its children in `longestChains[i][0]` and `longestChains[i][1]` respectively. We initialize it with `0`.
3. Initialize a queue and the answer variable `longestPath = 1`.
4. Iterate over all the nodes and for each `node`, check if it is a leaf node and not a root node (does not have a parent).
    - If it is a leaf node, i.e., `childCount[node] == 0 & node != 0`, we push it into the queue. We also set `longestChain[node][0] = 1` as this node does not have any children and this is the longest chain we can form including it. It will help find the answer of its parent.
5. Then, while the queue is not empty:
    - Dequeue the first element `currentNode` from the queue.
    - Fetch the parent `par` of the `currentNode` from `parents[currentNode]`.
    - Get the longest chain starting from the `currentNode` from `longestChainStartingFromCurrNode = longestChains[currentNode][0]` to update the longest (`longestChains[par][0]`) and second (`longestChains[par][1]`) longest chains of the `par` if possible.
    - Update the `longestPath` with `max(longestPath, longestChains[par][0] + longestChains[par][1] + 1)`. `par` is an intermediate node that connects the longest and second longest chains of it.
    - Because we covered the `currentNode` which is a child of `par`, we deduct `childrenCount[par]` by `1`.
    - If there are no more children of the `par` to visit, i.e., `childrenCount[par] == 0 `, we push the `par` to the queue. It behaves as a leaf node. We increase `longestChain[par][0]` by `1` to include `par` in the longest chain. We do not push root node `0` into the queue since it does not have a parent.
6. Return `longestPath`.

#### Implementation

<iframe src="https://leetcode.com/playground/CPkCV8Wy/shared" frameBorder="0" width="100%" height="500" name="CPkCV8Wy"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes.

* Time complexity: $O(n)$

    - Each node is only queued once, which takes $O(1)$ time for each node. We also iterate over the edges of every node once. Since we only visit each node once, we won't iterate over a node's edges multiple times. There are $n - 1$ edges, so we need $O(n)$ time.
    - We also need $O(n)$ time to initialize the `childrenCount` and the `longestChains` arrays.

* Space complexity: $O(n)$

    - In the worst case, the queue can grow to a size linear with `n`.
    - We also require $O(n)$ space each for the `childrenCount` and the `longestChains` arrays.