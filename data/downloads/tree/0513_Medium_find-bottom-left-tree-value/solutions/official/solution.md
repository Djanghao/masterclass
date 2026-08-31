# Official Solution

**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solution/](https://leetcode.com/problems/find-bottom-left-tree-value/solution/)

---

[TOC]

## Solution


---

### Overview

Our objective is to find the leftmost value at the bottom level of the tree. We are provided with the root of the tree. 

Since we need to find a specific value at the bottom of a tree, we will need to traverse the tree, searching for the leftmost node at the bottom level. When we find that node, we can return its value.

> If you are not familiar with tree traversal, check out our [Explore Card](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/)

---

### Approach 1: Depth-First Search


#### Intuition

We need to find the leftmost node in the bottom level of the tree. As we are concerned with the bottom level specifically, we will need to keep track of the current level/depth as we traverse.

One of the primary ways to traverse a tree is a Depth-First Search (DFS). We will use this approach to search for the leftmost node in the bottom level because it will be easy to keep track of the depth. We will use a preorder traversal, visiting each subtree's root first so that we can keep track of the level and visiting the left child first so that when we get to a new depth, we know that the current node is the leftmost node of that level.

Binary trees are often traversed using recursive methods. Below is an example pseudocode for a preorder traversal.

##### Standard Recursive Preorder Traversal
1. If the tree is empty, return.
2. Handle the root.
3. Traverse the left subtree - call Preorder(root.left).
4. Traverse the right subtree - call Preorder(root.right).

Below is an example tree, with each level's depth labeled.

![Binary Tree with \[1, 2, 3, 4, null, 5, 6, null, null, 7\]](../Figures/513/513_1.png)

A preorder traversal visits the nodes in this order: 1, 2, 4, 3, 5, 7, 6.

We can implement a recursive function `dfs` to search for the leftmost node in the bottom level, which we will call `bottomLeftValue`. 

Generally, when working recursively with trees, the base case is when the tree is empty. If the current node is empty, we return. 

From there, we can build the rest of our recursive function `dfs`. We keep track of the deepest level of the tree we have encountered so far in `maxDepth`. We store the value of the deepest leftmost node we have found thus far in `bottomLeftValue`. To perform a pre-order traversal, we first handle the root, then recursively search the left subtree, then the right subtree. Each time we recursively call `dfs`, we increment the depth by one because the left or right child of the current node is one level deeper than the current node. When we visit the current node, we will check if it is deeper than any node we have discovered yet. If the current node is the deepest we have found so far, we have discovered a new level of the tree. We visit nodes to the left first, so we know this is the leftmost node in this level. We can update `bottomLeftValue` to the current node's value and also update `maxDepth`.

After defining `dfs`, all we have to do to solve the problem is call the function and then return `bottomLeftValue``.


#### Algorithm

1. Initialize a variable `maxDepth` to store the depth of the bottom level of the tree.
2. Initialize a variable `bottomLeftValue` to store the leftmost value in the last row of the tree.
3. Implement a recursive function, `dfs`, that traverses the tree and finds the leftmost value in the last row of the tree. The parameters are `current`, the current node, and `depth`, its depth.
    1. Check whether `current` is empty. If so, return.
    2. Check if the current depth exceeds the global variable `maxDepth`. If it does, that means we have found a new level.
        1. Set `maxDepth` to `depth`.
        2. Set `bottomLeftValue` to the value of the current node.
    3. Recursively call `dfs` on the current node's left subtree and increment `depth` by one.
    4. Recursively call `dfs` on the current node's right subtree and increment `depth` by one.
4. Call `dfs` with `root` and the initial `depth` of `0`.
5. Return `bottomLeftValue`.


#### Implementation



<iframe src="https://leetcode.com/playground/795bdDWi/shared" frameBorder="0" width="100%" height="500" name="795bdDWi"></iframe>



#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n)$

    Traversing the tree with a DFS costs $O(n)$ as we visit each node exactly once. At each visit, we perform $O(1)$ work.


- Space complexity: $O(n)$

    The space complexity of DFS, when implemented recursively, is determined by the maximum depth of the call stack, which corresponds to the depth of the tree. In the worst case, if the tree is entirely unbalanced (e.g., a linked list), the call stack can grow as deep as the number of nodes, resulting in a space complexity of $O(n)$.

---

### Approach 2: Breadth-First Search Right to Left

#### Intuition

The other primary way to traverse a tree is a Breath-First Search (BFS). This traversal method, also known as level-order traversal, could apply to this problem because the algorithm visits all the nodes in each level before moving on to the next level. BFS could be helpful because we are concerned with the last level specifically, and visiting the levels in order means that the final nodes we encounter are on the bottom level. The general algorithm for Breadth-First Search is below.

##### Standard Breadth-First Search
1. Create a queue for storing the nodes on each level.
2. Add the root node to the queue.
3. While the queue is not empty:
    1. Remove the front node of the queue.
    2. Handle the node and add its children to the back of the queue.


Below is an example tree to visualize how BFS works.

![Binary Tree with \[1, 2, 3, 4, null, 5, 6, null, null, 7\]](../Figures/513/513_2.png)

Breath First Search visits the nodes in this order: 1, 2, 3, 4, 5, 6, 7.

In the depth-first search implementation above, we kept track of the depth and `maxDepth` of the tree using a variable. We could use the same strategy to track the depth during the BFS, but it may not be necessary. BFS performs a level order search, meaning the last nodes we encounter will be on the bottom level. We are searching for the leftmost node in the bottom level of the tree. 

> How can we find the leftmost node in the bottom level?  

BFS of a tree is often implemented such that the left child of a given node is visited first, then the right child. If we implement BFS such that the right child of a given node is visited first, then the left child, the last node we visit is the leftmost node in the bottom level of the tree. This makes a variable for depth unnecessary. We can just return the value of the last node we encounter during the search.



#### Algorithm

1. Initialize a Queue `queue` for storing the nodes on each level.
2. Create a new node `current` and set it to `root`.
3. Add `current` to `queue`.
4. While `queue` is not empty:
    1. Remove the front node from the queue and save it in `current`.
    2. If the `current` has a right child, add it to `queue`.
    3. If the `current` has a left child, add it to `queue`.
5. After the while loop, each node in the tree has been visited. The search traversed the whole tree, top to bottom, right to left, so the last node stored in `current` is the leftmost node in the bottom level of the tree, and we return its value.

#### Implementation

<iframe src="https://leetcode.com/playground/g6zXpErc/shared" frameBorder="0" width="100%" height="446" name="g6zXpErc"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time complexity: $O(n)$

    We perform BFS, which costs $O(n)$ because we don't visit a node more than once. At each node, we perform $O(1)$ work.


* Space complexity: $O(n)$

    We require $O(n)$ space for the queue during the BFS for `queue`.