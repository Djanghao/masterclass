# Official Solution

**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solution/](https://leetcode.com/problems/increasing-order-search-tree/solution/)

---

[TOC]

## Solution
---
### Approach 1: In-Order Traversal

**Intuition**

The definition of a binary search tree is that for every node, all the values of the left branch are less than the value at the root, and all the values of the right branch are greater than the value at the root.

Because of this, an *in-order traversal* of the nodes will yield all the values in increasing order.

**Algorithm**

Once we have traversed all the nodes in increasing order, we can construct new nodes using those values to form the answer.

<iframe src="https://leetcode.com/playground/ew76ZiPj/shared" frameBorder="0" width="100%" height="378" name="ew76ZiPj"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---
### Approach 2: Traversal with Relinking

**Intuition and Algorithm**

We can perform the same in-order traversal as in *Approach 1*.  During the traversal, we'll construct the answer on the fly, reusing the nodes of the given tree by cutting their left child and adjoining them to the answer.

<iframe src="https://leetcode.com/playground/XzaFfyeo/shared" frameBorder="0" width="100%" height="361" name="XzaFfyeo"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(H)$$ in *additional* space complexity, where $$H$$ is the height of the given tree, and the size of the implicit call stack in our in-order traversal.
<br />
<br />