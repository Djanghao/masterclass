# Official Solution

**Link:** [https://leetcode.com/problems/maximum-average-subtree/solution/](https://leetcode.com/problems/maximum-average-subtree/solution/)

---

[TOC]

## Solution

---

### Approach 1: Postorder Traversal


**Intuition and Algorithm**

To calculate average value of a subtree rooted at `node`, we need two things:

1. Sum of all values of the nodes in the subtree of `node`, let's refer to it as `ValueSum(node)`.
2. Count of the nodes in the `node` subtree, let's refer to it as `NodeCount(node)`.

Then, the average for subtree rooted at `node` will be `ValueSum(node)/NodeCount(node)`.

Now, to calculate these values for a subtree rooted at `node`, we can derive them from the child nodes of `node`.

1. `ValueSum(node) = ValueSum(node.left) + ValueSum(node.right) + Value(node)`
2. `NodeCount(node) = NodeCount(node.left) + NodeCount(node.right) + 1`

Also, for any leaf node `leaf`, we know that:

1. `ValueSum(leaf) = node.val`
2. `NodeCount(leaf) = 1`

Looking at these equations, we can see that we can calculate average for each of the node in the tree by traversing bottom up i.e. first visit and calculate `ValueSum` and `NodeCount` for child nodes and then use these child nodes values to solve for parent node. This order of tree traversal is popularly known as postorder traversal.

![img](../Figures/1120/1.png)

You can read more about different binary tree traversals [here](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/).

<iframe src="https://leetcode.com/playground/RwpXG7kf/shared" frameBorder="0" width="100%" height="500" name="RwpXG7kf"></iframe>


**Complexity Analysis**

* Time complexity : $$O(N)$$, where $$N$$ is the number of nodes in the tree. This is because we visit each and every node only once, as we do in postorder traversal.

* Space complexity : $$O(N)$$, because we will create $$N$$ states for each of the nodes in the tree. Also, in cases where we have a skewed tree, we will implicitly maintain a recursion stack of size $$N$$, hence space complexity from this will also be $$O(N)$$.