# Official Solution

**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solution/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is a follow-up to [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/). We highly recommend readers solve that problem first. In this article, we will assume you have already solved that problem.

We want to find the lowest common ancestor of the nodes `p` and `q`, but these nodes may not be present in the given binary tree. We can have the following cases:

1. ![figA](../Figures/1644/1644A.png)

*Node LCA will be the lowest common ancestor*

2. ![figB](../Figures/1644/1644B.png)

*q is in the subtree of Node p. Node p will be the lowest common ancestor*

3. ![figC](../Figures/1644/1644C.png)

*p is in the subtree of Node q. Node q will be the lowest common ancestor*

4. ![figD](../Figures/1644/1644D.png)

*There will be no lowest common ancestor*

5. ![figE](../Figures/1644/1644E.png)

*There will be no lowest common ancestor*

6. ![figF](../Figures/1644/1644F.png)

*There will be no lowest common ancestor*

In [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) we cannot have cases 4, 5, and 6 since it is guaranteed that both nodes will be present in the tree.

---

### Approach 1: Depth First Search - Modify LCA Solution

#### Intuition

We can reuse part of the solution from [Lowest Common Ancestor of a Binary Tree I (LCA - I)](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/).

In the LCA - I solution, we recursively search for the common ancestor by checking the tree starting from the root. The stopping condition for the recursion is when the root is either empty or matches one of the nodes (`p` or `q`). In that case, we return the root.

Below is the playground snippet taken from the [LCA - I editorial](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) for reference.

<iframe src="https://leetcode.com/playground/GsXthV6f/shared" frameBorder="0" width="100%" height="242" name="GsXthV6f"></iframe>

This solution doesn't handle the cases where `p` or `q` might not be in the binary tree. The stopping condition for the recursion is when the root is either empty or matches one of the nodes (`p` or `q`). If the root matches `p`, the recursion stops, and we don't check further in that subtree. Similarly, if `q` doesn't exist in the subtree of `p`, we won't know that `q` is missing, leading to incorrect results.

For example:  
- If the method returns `p` as the common ancestor, we need to confirm if `q` is present in the subtree of `p`. If not, the result is incorrect.  
- Similarly, if the method returns `q`, we need to check if `p` is in the subtree of `q`.  
- If the method returns `null`, it means neither `p` nor `q` is in the tree.  

This ensures that both nodes are present before confirming the common ancestor.

#### Algorithm

- Call `LCA(root, p, q)` to find the lowest common ancestor (LCA) of nodes `p` and `q` starting from `root`.
  - If `ans` (the result of `LCA`) is `p`, check if `q` is in the subtree of `p` by calling `dfs(p, q)`.
    - If `dfs(p, q)` returns `true`, return `p` as the answer.
    - If `dfs(p, q)` returns `false`, return `null` (indicating `q` is not in the subtree of `p`).
  - If `ans` is `q`, check if `p` is in the subtree of `q` by calling `dfs(q, p)`.
    - If `dfs(q, p)` returns `true`, return `q` as the answer.
    - If `dfs(q, p)` returns `false`, return `null` (indicating `p` is not in the subtree of `q`).
  - Otherwise, return `ans`, the LCA found by `LCA()` function.

- `LCA` function:
  - If `node` is `null`, or if `node` is either `p` or `q`, return `node` (base case).
  - Recursively call `LCA(node.left, p, q)` and `LCA(node.right, p, q)` to explore the left and right subtrees.
  - If both left and right subtrees contain one of `p` or `q`, return `node` as the LCA.
  - If only the left subtree contains one of `p` or `q`, return the result from the left subtree.
  - If only the right subtree contains one of `p` or `q`, return the result from the right subtree.

- `dfs` function:
  - If `node` is the same as `target`, return `true` (found the target).
  - If `node` is `null`, return `false` (reached a leaf node without finding the target).
  - Recursively search for the target in both the left and right subtrees using logical OR.

#### Implementation

<iframe src="https://leetcode.com/playground/54YeBwAV/shared" frameBorder="0" width="100%" height="500" name="54YeBwAV"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree.

- Time complexity: $O(n)$

    The algorithm performs two main operations:
    1. The `LCA` function performs a depth-first search (DFS) to find the lowest common ancestor. In the worst case, this involves visiting all nodes, resulting in a time complexity of $O(n)$.
    2. The `dfs` function is called twice to check if one node is in the subtree of the other. Each `dfs` call also traverses the tree in a DFS manner, which takes $O(n)$ in the worst case.

    Since these operations are performed sequentially, the overall time complexity is $O(n)$.

- Space complexity: $O(n)$

    The space complexity is determined by the recursion stack used during the DFS traversals. In the worst case, the tree can be a skewed tree (e.g., all nodes in a single branch), leading to a recursion depth of $n$. Additionally, the local variables and function calls contribute constant space, which is negligible compared to the recursion stack. Therefore, the space complexity is $O(n)$.

---

### Approach 2: Depth First Search - 2/3 Conditions

#### Intuition

First let's see how can we confirm that `p` and `q` are present in the tree.

For any given `node`, if any two of the following three conditions hold true, we can say that `p` and `q` are both present in the tree.

1. The `node` itself is either `p` or `q`.  
2. One of the nodes (`p` or `q`) is in the left subtree of `node`.  
3. One of the nodes (`p` or `q`) is in the right subtree of `node`.  

As per the constraints of the problem, all the nodes are unique. So there will not be multiple occurrences of `p` and `q`.

If two of these conditions are true, we can confidently say that both `p` and `q` are in the tree. 

Once we confirm that both nodes are present, we set a flag `nodesFound` to `true`, indicating that the solution is valid. If neither `p` nor `q` is found in the tree, the result will be `null`.  

#### Algorithm

- Initialize a variable `nodesFound` to `false` to track if both nodes `p` and `q` are found.

- Define a `dfs` function to recursively traverse the tree:
  - If `node` is null, return `null` (base case).
  - Recursively call `dfs` on the left and right children of `node`.
  - Initialize a variable `conditions` to 0 to track conditions related to `node`, its children, and target nodes `p` and `q`.

- Check conditions:
  - If `node` is either `p` or `q`, increment `conditions`.
  - If `left` is not `null`, increment `conditions`.
  - If `right` is not `null`, increment `conditions`.

- If `conditions == 2`, set `nodesFound` to `true` (both `p` and `q` are found).

- If both left and right children are not null, or `node` is `p` or `q`, return `node` as the Lowest Common Ancestor (LCA).
  - Otherwise, return the non-null child (either left or right) as the LCA.

- After completing the DFS traversal, store the result of `dfs(root)` in `ans`.

- Return `ans` if both nodes `p` and `q` are found (i.e., `nodesFound == true`), otherwise return `null`.

#### Implementation

<iframe src="https://leetcode.com/playground/9S2ibz4Q/shared" frameBorder="0" width="100%" height="500" name="9S2ibz4Q"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree.

- Time complexity: $O(n)$

    The algorithm performs a depth-first search (DFS) traversal of the entire tree. In the worst case, each node is visited once. Therefore, the time complexity is linear with respect to the number of nodes in the tree, which is $O(n)$.

- Space complexity: $O(n)$

    The space complexity is determined by the recursion stack used during the DFS traversal. In the worst case, the tree can be a skewed tree (e.g., all nodes in a single branch), leading to a recursion depth of $n$. Additionally, the lambda function and other local variables contribute constant space, which is negligible compared to the recursion stack. Therefore, the space complexity is $O(n)$.

---