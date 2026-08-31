# Official Solution

**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solution/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solution/)

---

[TOC]

## Solution

---

### Approach 1: Breadth First Search (BFS)

**Intuition**

> If you are not familiar with BFS traversal, we suggest you read our relevant [LeetCode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1376/).

BFS is perfect when we are dealing specifically with rows/levels of a binary tree. With BFS, we handle one row of the tree at a time.

Here, we need to find the maximum value in each row. We can simply perform a BFS and for each row, keep track of the maximum value we have seen so far. We will initialize an integer `currMax` to a small value like negative infinity. Then we go through the row and try to update `currMax` when we see larger values. After handling the row, we add `currMax` to our answer.

**Algorithm**

1. If the `root` is null (empty) tree, just return an empty list.
2. Initialize the answer list `ans` and a `queue` with the `root` to perform BFS.
3. Perform BFS - while the `queue` is not empty:
    - Initialize `currMax` to a small value and save the length of the queue in `currentLength`.
    - Iterate `currentLength` times:
        - Remove a `node` from the `queue`.
        - Update `currMax` with `node.val` if it is larger.
        - For each child of `node`, if it is not null, push it to the `queue`.
    - Add `currMax` to `ans`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/P7pFhbid/shared" frameBorder="0" width="100%" height="500" name="P7pFhbid"></iframe>

**Complexity Analysis**

Given $$n$$ as the number of nodes in the tree,

* Time complexity: $$O(n)$$

    During the BFS, we visit each node in the tree once. At each node, we perform $$O(1)$$ work.

* Space complexity: $$O(n)$$

    In a perfect binary tree, the final row has $$O(\frac{n}{2}) = O(n)$$ nodes, all of which will be in `queue`.
    
<br/>

---

### Approach 2: Depth First Search (DFS)

**Intuition**

> Note: This problem is perfect for BFS, but an interviewer might you to implement DFS as a follow-up. We have included a DFS approach for completeness.

In BFS, we handle each row explicitly, so it's easy to just keep track of the maximum value as we traverse through the row.

In DFS, the order in which we move through the tree is not related to the rows. Thus, we need to be more creative to find the maximum value in each row. The first observation to make is that each row can be described by the depth of its nodes.

![depth](../Figures/515/1.png)
<br>

The depth of a node is its distance from the root. The root has a depth of `0`, and every child has a depth of `1` greater than its parent. You may also notice that in terms of indices, each node's depth corresponds to its index in the answer.

For example, if `ans` is our answer list, then `ans[2]` holds the maximum value of all nodes with depth `2`.

If we keep track of each node's depth during the traversal, then we can update `ans` directly. How do we keep track of the depth? We will pass an additional argument `depth` in our `dfs` function. When we initially call `dfs` with `root`, we will pass `depth = 0`. When we call `dfs` on a child, we will pass `depth + 1`.

There is one problem: how do we know what length `ans` should be? We will initialize `ans` as an empty list. If we are at a `depth` that would be out of bounds if we tried to access `ans[depth]`, then we will simply initialize the current `node.val` as the maximum value seen at `depth` so far by pushing `node.val` to `ans`.

**Algorithm**

1. Initialize `ans` as an empty list.
2. Define a function `dfs(node, depth)`:
    - If `node` is null, return.
    - If `depth == ans.length`, then push `node.val` to `ans`. Otherwise, try to update `ans[depth]` with `node.val` if its larger.
    - Call `dfs` on `node.left` and `node.right` with `depth + 1` as the second argument.
3. Call `dfs(root, 0)` and then `return ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/CmiiemQN/shared" frameBorder="0" width="100%" height="463" name="CmiiemQN"></iframe>

**Complexity Analysis**

Given $$n$$ as the number of nodes in the tree and $$h$$ as the max depth of the tree,

* Time complexity: $$O(n)$$

    During the DFS, we visit each node in the tree once. At each node, we perform $$O(1)$$ work.

* Space complexity: $$O(h)$$

    We use extra space for the recursion call stack. The most calls in the call stack at any given time will be the max depth of the tree. In the worst-case scenario where the tree is like a linked list, the max depth will be $$O(n)$$.
    
<br/>

---

### Approach 3: DFS, Iterative

**Intuition**

We can also implement DFS iteratively using a stack. Each entry in the stack will be a pair `node, depth`. We will use a while loop to perform the DFS, with each iteration being analogous to a function call from the previous approach. As such, we will perform the same process in each while loop iteration: try to update `ans` with `node.val`, then push the children of `node` to the stack if they exist.

**Algorithm**

1. If the `root` is null (empty) tree, just return an empty list.
2. Initialize the answer list `ans` and a `stack` with `(root, 0)`.
3. While the `stack` is not empty:
    - Pop `(node, depth)` from the stack.
    - If `depth == ans.length`, then push `node.val` to `ans`. Otherwise, try to update `ans[depth]` with `node.val` if its larger.
    - If `node.left` is not null, push `(node.left, depth + 1)` to `stack`.
    - If `node.right` is not null, push `(node.right, depth + 1)` to `stack`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/Gc9wyzzK/shared" frameBorder="0" width="100%" height="500" name="Gc9wyzzK"></iframe>

**Complexity Analysis**

Given $$n$$ as the number of nodes in the tree and $$h$$ as the max depth of the tree,

* Time complexity: $$O(n)$$

    During the DFS, we visit each node in the tree once. At each node, we perform $$O(1)$$ work.

* Space complexity: $$O(h)$$

    We use extra space for the recursion call stack. The most calls in the call stack at any given time will be the max depth of the tree. In the worst-case scenario where the tree is like a linked list, the max depth will be $$O(n)$$.

    We pop the top node from the stack and then push its child nodes onto the stack based on the DFS traversal strategy. This process of pushing and popping forms a path-like structure within the stack, and the length of this path will not exceed the height of the tree. Therefore, $$O(h)$$ space will be used.
    
<br/>

---