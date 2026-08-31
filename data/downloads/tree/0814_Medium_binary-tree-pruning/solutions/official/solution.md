# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-pruning/solution/](https://leetcode.com/problems/binary-tree-pruning/solution/)

---

[TOC]

---
### Approach #1: Recursion [Accepted]

**Intuition**

Prune children of the tree recursively.  The only decisions at each node are whether to prune the left child or the right child.

**Algorithm**

We'll use a function `containsOne(node)` that tells us whether the subtree at this `node` contains a `1`, and prunes all subtrees that do not contain `1`.

If for example, `node.left` subtree does not contain a one, then we should prune it via `node.left = null`.

Also, the parent needs to be checked.  If for example the tree is a single node `0`, the answer is an empty tree.

<iframe src="https://leetcode.com/playground/gqG6CJnF/shared" frameBorder="0" width="100%" height="497" name="gqG6CJnF"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the tree.  We process each node once.

* Space Complexity: $$O(N)$$, the recursion call stack can be as large as the height $$H$$ of the tree. In the worst case scenario, $$H=N$$, when the tree is skewed.