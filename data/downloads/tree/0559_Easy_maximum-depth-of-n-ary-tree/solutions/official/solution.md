# Official Solution

**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solution/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solution/)

---

[TOC]

## Solution

**Tree definition**

First of all, please refer to [this article](https://leetcode.com/articles/maximum-depth-of-binary-tree/) for the solution in the case of a binary tree. This article offers the same ideas with a bit of generalization. 

Here is the definition of the ```TreeNode``` which we would use.

<iframe src="https://leetcode.com/playground/hmveGKk8/shared" frameBorder="0" width="100%" height="259" name="hmveGKk8"></iframe>
<br />
<br />


---
### Approach 1: Recursion

**Algorithm**

The intuitive approach is to solve the problem by recursion. Here we demonstrate an example with the DFS (Depth First Search) strategy. 

<iframe src="https://leetcode.com/playground/eR3N3e7W/shared" frameBorder="0" width="100%" height="310" name="eR3N3e7W"></iframe>

**Complexity analysis**

* Time complexity: we visit each node exactly once, thus the time complexity is $$\mathcal{O}(N)$$, where $$N$$ is the number of nodes.

* Space complexity: in the worst case, the tree is completely unbalanced, *e.g.* each node has only one child node, the recursion call would occur $$N$$ times (the height of the tree), therefore the storage to keep the call stack would be $$\mathcal{O}(N)$$. But in the best case (the tree is completely balanced), the height of the tree would be $$\log(N)$$. Therefore, the space complexity in this case would be $$\mathcal{O}(\log(N))$$.
<br />
<br />


---
### Approach 2: Iteration

We could also convert the above recursion into iteration, with the help of stack.

>The idea is to visit each node with the DFS strategy while updating the maximum depth at each visit.

So we start from a stack that contains the root node and the corresponding depth which is ```1```. Then we proceed to the iterations: pop the current node out of the stack and push the child nodes. The depth is updated at each step. 

<iframe src="https://leetcode.com/playground/cYZ5pMUM/shared" frameBorder="0" width="100%" height="429" name="cYZ5pMUM"></iframe>  

**Complexity analysis**

* Time complexity: $$\mathcal{O}(N)$$.

* Space complexity: $$\mathcal{O}(N)$$.