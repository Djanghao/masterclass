# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-cameras/solution/](https://leetcode.com/problems/binary-tree-cameras/solution/)

---

[TOC]

## Solution
---
### Approach 1: Dynamic Programming

**Intuition**

Let's try to cover every node, starting from the top of the tree and working down.  Every node considered must be covered by a camera at that node or some neighbor.

Because cameras only care about local state, we can hope to leverage this fact for an efficient solution.  Specifically, when deciding to place a camera at a node, we might have placed cameras to cover some subset of this node, its left child, and its right child already.

**Algorithm**

Let `solve(node)` be some information about how many cameras it takes to cover the subtree at this node in various states.  There are essentially 3 states:

* [State 0] Strict subtree:  All the nodes below this node are covered, but not this node.
* [State 1] Normal subtree:  All the nodes below and including this node are covered, but there is no camera here.
* [State 2] Placed camera:  All the nodes below and including this node are covered, and there is a camera here (which may cover nodes above this node).

Once we frame the problem in this way, the answer falls out:

* To cover a strict subtree, the children of this node must be in state 1.
* To cover a normal subtree without placing a camera here, the children of this node must be in states 1 or 2, and at least one of those children must be in state 2.
* To cover the subtree when placing a camera here, the children can be in any state.

<iframe src="https://leetcode.com/playground/9RMjEFK8/shared" frameBorder="0" width="100%" height="480" name="9RMjEFK8"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(H)$$, where $$H$$ is the height of the given tree.
<br />
<br />


---
### Approach 2: Greedy

**Intuition**

Instead of trying to cover every node from the top down, let's try to cover it from the bottom up - considering placing a camera with the deepest nodes first, and working our way up the tree.

If a node has its children covered and has a parent, then it is strictly better to place the camera at this node's parent.

**Algorithm**

If a node has children that are not covered by a camera, then we must place a camera here.  Additionally, if a node has no parent and it is not covered, we must place a camera here.

<iframe src="https://leetcode.com/playground/SDtoVPrq/shared" frameBorder="0" width="100%" height="500" name="SDtoVPrq"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(H)$$, where $$H$$ is the height of the given tree.
<br />
<br />