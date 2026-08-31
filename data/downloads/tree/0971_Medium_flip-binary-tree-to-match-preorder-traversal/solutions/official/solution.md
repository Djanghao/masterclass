# Official Solution

**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solution/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solution/)

---

[TOC]

## Solution
---
### Approach 1: Depth-First Search

**Intuition**

As we do a pre-order traversal, we will flip nodes on the fly to try to match our voyage with the given one.

If we are expecting the next integer in our voyage to be `voyage[i]`, then there is only at most one choice for path to take, as all nodes have different values.

**Algorithm**

Do a depth first search.  If at any node, the node's value doesn't match the voyage, the answer is `[-1]`.

Otherwise, we know when to flip: the next number we are expecting in the voyage `voyage[i]` is different from the next child.

<iframe src="https://leetcode.com/playground/VzfWsiG2/shared" frameBorder="0" width="100%" height="500" name="VzfWsiG2"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(N)$$.
<br />
<br />