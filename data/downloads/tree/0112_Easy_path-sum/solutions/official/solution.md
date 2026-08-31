# Official Solution

**Link:** [https://leetcode.com/problems/path-sum/solution/](https://leetcode.com/problems/path-sum/solution/)

---

[TOC]

## Solution

---

### Binary tree definition

First of all, here is the definition of the ```TreeNode``` which we would use in the following implementation.

<iframe src="https://leetcode.com/playground/XJfppTQT/shared" frameBorder="0" width="100%" height="225" name="XJfppTQT"></iframe>
<br />
<br />


---
### Approach 1: Recursion

The most intuitive way is to use recursion here. One is going through the tree by considering at each step the node itself and its children. If node *is not* a leaf, one calls recursively `hasPathSum` method for its children with a sum decreased by the current node value. If node *is* a leaf, one check if the current sum is zero, *i.e.* if the initial sum was discovered.

<iframe src="https://leetcode.com/playground/2h6vUwHY/shared" frameBorder="0" width="100%" height="242" name="2h6vUwHY"></iframe>

**Complexity Analysis**

* Time complexity : we visit each node exactly once, thus the time complexity is $$\mathcal{O}(N)$$, where $$N$$ is the number of nodes.
* Space complexity : in the worst case, the tree is completely unbalanced, *e.g.* each node has only one child node, the recursion call would occur $$N$$ times (the height of the tree), therefore the storage to keep the call stack would be $$\mathcal{O}(N)$$. But in the best case (the tree is completely balanced), the height of the tree would be $$\log(N)$$. Therefore, the space complexity in this case would be $$\mathcal{O}(\log(N))$$.
<br />
<br />


---
### Approach 2: Iterations

**Algorithm**

We could also convert the above recursion into iteration, with the help of stack. DFS would be better than BFS here since it works faster except in the worst case. In the worst case the path `root->leaf` with the given sum is the last considered one and in this case, DFS results in the same productivity as BFS. 

>The idea is to visit each node with the DFS strategy while updating the remaining sum to cumulate at each visit.

So we start from a stack that contains the root node and the corresponding remaining sum which is ```sum - root.val```. Then we proceed to the iterations: pop the current node out of the stack and return ```True``` if the remaining sum is `0` and we're on the leaf node. If the remaining sum is not zero or we're not on the leaf yet then we push the child nodes and corresponding remaining sums into the stack.  

<!--![LIS](../Figures/112/112_tr.gif)-->
!?!../Documents/112_LIS.json:1000,543!?!

<iframe src="https://leetcode.com/playground/cus6e5Ju/shared" frameBorder="0" width="100%" height="500" name="cus6e5Ju"></iframe>

**Complexity Analysis**

* Time complexity: the same as the recursion approach $$\mathcal{O}(N)$$.
* Space complexity: $$\mathcal{O}(N)$$ since in the worst case, when the tree is completely unbalanced, *e.g.* each node has only one child node, we would keep all $$N$$ nodes in the stack. But in the best case (the tree is balanced), the height of the tree would be $$\log(N)$$. Therefore, the space complexity in this case would be $$\mathcal{O}(\log(N))$$.