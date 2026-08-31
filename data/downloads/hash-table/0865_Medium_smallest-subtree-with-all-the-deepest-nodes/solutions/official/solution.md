# Official Solution

**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solution/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solution/)

---

[TOC]

## Solution
---
### Approach 1: Paint Deepest Nodes

**Intuition**

We try a straightforward approach that has two phases.

The first phase is to identify the nodes of the tree that are deepest.  To do this, we have to annotate the depth of each node.  We can do this with a depth first search.

Afterwards, we will use that annotation to help us find the answer:

* If the `node` in question has maximum depth, it is the answer.

* If both the left and right child of a `node` have a deepest descendant, then the answer is this parent `node`.  

* Otherwise, if some child has a deepest descendant, then the answer is that child.

* Otherwise, the answer for this subtree doesn't exist.

**Algorithm**

In the first phase, we use a depth first search `dfs` to annotate our nodes.

In the second phase, we also use a depth first search `answer(node)`, returning the answer for the subtree at that `node`, and using the rules above to build our answer from the answers of the children of `node`.

Note that in this approach, the `answer` function returns answers that have the deepest nodes of the *entire* tree, not just the subtree being considered.

<iframe src="https://leetcode.com/playground/YbCjTSPT/shared" frameBorder="0" width="100%" height="500" name="YbCjTSPT"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the tree.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---
### Approach 2: Recursion

**Intuition**

We can combine both depth first searches in *Approach #1* into an approach that does both steps in one pass.  We will have some function `dfs(node)` that returns both the answer for this subtree, and the distance from `node` to the deepest nodes in this subtree.

**Algorithm**

The `Result` (on some subtree) returned by our (depth-first search) recursion will have two parts:
* `Result.node`: the largest depth node that is equal to or an ancestor of all the deepest nodes of this subtree.
* `Result.dist`: the number of nodes in the path from the root of this subtree, to the deepest node in this subtree.

We can calculate these answers disjointly for `dfs(node)`:

* To calculate the `Result.node` of our answer:

    * If one `childResult` has deeper nodes, then `childResult.node` will be the answer.

    * If they both have the same depth nodes, then `node` will be the answer.

* The `Result.dist` of our answer is always 1 more than the largest `childResult.dist` we have.

<iframe src="https://leetcode.com/playground/4tLcM433/shared" frameBorder="0" width="100%" height="500" name="4tLcM433"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the tree.

* Space Complexity:  $$O(N)$$.
<br />
<br />