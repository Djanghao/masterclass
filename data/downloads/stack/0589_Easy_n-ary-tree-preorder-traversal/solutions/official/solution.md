# Official Solution

**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solution/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solution/)

---

[TOC]

## Solution

---

### Approach 1: Iterations

**Algorithm**

First of all, here is the definition of the tree ```Node``` which we would use in the following implementation.

<iframe src="https://leetcode.com/playground/UsFWSiF9/shared" frameBorder="0" width="100%" height="259" name="UsFWSiF9"></iframe>

Let's start from the root and then at each iteration pop the current node out of the stack and push its child nodes. In the implemented strategy we push nodes into the output list following the order ```Top->Bottom``` and ```Left->Right```, which naturally reproduces preorder traversal.

<iframe src="https://leetcode.com/playground/n2dx92jn/shared" frameBorder="0" width="100%" height="395" name="n2dx92jn"></iframe>


**Complexity Analysis**

* Time complexity: we visit each node exactly once, and for each visit, the complexity of the operation (*i.e.* appending the child nodes) is proportional to the number of child nodes ```n``` (n-ary tree). Therefore the overall time complexity is $$\mathcal{O}(N)$$, where $$N$$ is the number of nodes, *i.e.* the size of the tree.

* Space complexity: depending on the tree structure, we could keep up to the entire tree, therefore, the space complexity is $$\mathcal{O}(N)$$.