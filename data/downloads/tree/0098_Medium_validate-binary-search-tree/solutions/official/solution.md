# Official Solution

**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solution/](https://leetcode.com/problems/validate-binary-search-tree/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/490012303" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Tree definition

First of all, here is the definition of the ```TreeNode``` which we would use.

<iframe src="https://leetcode.com/playground/nTSde6HH/shared" frameBorder="0" width="100%" height="225" name="nTSde6HH"></iframe>


---
#### Intuition

On the first sight, the problem is trivial. Let's traverse the tree and check at each step if `node.right.val > node.val` and `node.left.val < node.val`. This approach would even work for some trees

![compute](../Figures/98/98_not_bst.png)

The problem is this approach will not work for all cases. Not only the right child should be larger than the node but all the elements in the right subtree. Here is an example :

![compute](../Figures/98/98_not_bst_3.png)

That means one should keep both upper and lower limits for each node while traversing the tree, and compare the node value not with children values but with these limits.


---
### Approach 1: Recursive Traversal with Valid Range

The idea above could be implemented as a recursion. One compares the node value with its upper and lower limits if they are available. Then one repeats the same step recursively for left and right subtrees.

!?!../Documents/98_LIS.json:1000,462!?!

<iframe src="https://leetcode.com/playground/oRVSzy7c/shared" frameBorder="0" width="100%" height="497" name="oRVSzy7c"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since we visit each node exactly once.
* Space complexity: $$\mathcal{O}(N)$$ since we keep up to the entire tree.


---

### Approach 2: Iterative Traversal with Valid Range

The above recursion could be converted into iteration, with the help of an explicit stack. DFS would be better than BFS since it works faster here.

<iframe src="https://leetcode.com/playground/WDMg4fFD/shared" frameBorder="0" width="100%" height="500" name="WDMg4fFD"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since we visit each node exactly once.
* Space complexity: $$\mathcal{O}(N)$$ since we keep up to the entire tree.

---

### Approach 3: Recursive Inorder Traversal

**Algorithm**

Let's use the order of nodes in the [inorder traversal](https://leetcode.com/articles/binary-tree-inorder-traversal/)

`Left -> Node -> Right`.

![postorder](../Figures/145_transverse.png)

Here the nodes are enumerated in the order you visit them, and you could follow `1-2-3-4-5` to compare different strategies.

`Left -> Node -> Right` order of inorder traversal means for BST that each element should be smaller than the next one.

Hence the algorithm with $$\mathcal{O}(N)$$ time complexity and $$\mathcal{O}(N)$$ space complexity could be simple:

- Compute inorder traversal list `inorder`.

- Check if each element in `inorder` is smaller than the next one.

![postorder](../Figures/98/98_bst_inorder.png)

> Do we need to keep the whole `inorder` traversal list?

Actually, no. The last added inorder element is enough to ensure at each step that the tree is BST (or not). Hence one could merge both steps into one and reduce the used space.

**Code**

We can implement the algorithm recursively.

<iframe src="https://leetcode.com/playground/kTAK5wfJ/shared" frameBorder="0" width="100%" height="480" name="kTAK5wfJ"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ in the worst case when the tree is a BST or the "bad" element is a rightmost leaf.

* Space complexity: $$\mathcal{O}(N)$$ for the space on the run-time stack.

---

### Approach 4: Iterative Inorder Traversal

Alternatively, we could implement the above algorithm iteratively.

<iframe src="https://leetcode.com/playground/NnjD3EVy/shared" frameBorder="0" width="100%" height="500" name="NnjD3EVy"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ in the worst case when the tree is BST or the "bad" element is the rightmost leaf.

* Space complexity: $$\mathcal{O}(N)$$ to keep `stack`.