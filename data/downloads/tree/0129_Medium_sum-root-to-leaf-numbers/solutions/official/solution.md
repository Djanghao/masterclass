# Official Solution

**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solution/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solution/)

---

[TOC]

## Solution

---

### Overview

**Prerequisites**

There are three DFS ways to traverse the tree: preorder, postorder and inorder. Please check two minutes picture explanation, if you don't remember them quite well: [here is the Python version](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/283746/all-dfs-traversals-preorder-inorder-postorder-in-python-in-1-line) and [here is the Java version](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/328601/all-dfs-traversals-preorder-postorder-inorder-in-java-in-5-lines).

**Optimal Strategy to Solve the Problem**

> Root-to-left traversal is so-called _DFS preorder traversal_. To implement it, one has to follow a straightforward strategy Root->Left->Right. 

Since one has to visit all nodes, the best possible time complexity here is linear. Hence all interest here is to improve the space complexity. 

> There are 3 ways to implement preorder traversal: iterative, recursive, and Morris. 

Iterative and recursive approaches here do the job in one pass, but they both need up to $$\mathcal{O}(H)$$ space to keep the stack, where $$H$$ is a tree height.

Morris's approach is a two-pass approach, but it's a constant-space one.

![diff](../Figures/129/preorder2.png)

<br />
<br />


---
### Approach 1: Iterative Preorder Traversal.

**Intuition**

Here we implement standard iterative preorder traversal with the stack:

- Push root into the stack.

- While the stack is not empty:

    - Pop out a node from the stack and update the current number.
    
    - If the node is a leaf, update the root-to-leaf sum.
    
    - Push right and left child nodes into the stack.
    
- Return root-to-leaf sum.  

!?!../Documents/129_LIS.json:1000,383!?!

**Implementation**

Note, that 
[Javadocs recommends to use ArrayDeque and not Stack as a stack implementation](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html).

<iframe src="https://leetcode.com/playground/37WttJQN/shared" frameBorder="0" width="100%" height="500" name="37WttJQN"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node. 
    
* Space complexity: up to $$\mathcal{O}(H)$$ to keep the stack, where $$H$$ is a tree height.  
<br />
<br />


---
### Approach 2: Recursive Preorder Traversal.

Iterative approach 1 could be converted into recursive one.

Recursive preorder traversal is extremely simple: follow Root->Left->Right direction, i.e. do all the business with the node (= update the current number and root-to-leaf sum), and then do the recursive calls for the left and right child nodes.

P.S.
Here is the difference between _preorder_ and the other DFS recursive traversals. In the following figure, the nodes are numerated in the order you visit them, please follow `1-2-3-4-5` to compare different DFS strategies implemented as recursion.

![diff](../Figures/129/ddfs2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/ZbmeNbW9/shared" frameBorder="0" width="100%" height="395" name="ZbmeNbW9"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node. 
    
* Space complexity: up to $$\mathcal{O}(H)$$ to keep the recursion stack, where $$H$$ is a tree height.  
<br />
<br />


---
### Approach 3: Morris Preorder Traversal.

We discussed already iterative and recursive preorder traversals, which both have great time complexity though use up to $$\mathcal{O}(H)$$ to keep the stack. We could trade in performance to save space.

The idea of Morris preorder traversal is simple: to use no space but to traverse the tree.

> How that could be even possible? At each node one has to decide where to go: to the left or to the right, traverse the left subtree, or traverse the right subtree. How one could know that the left subtree is already done if no additional memory is allowed?  

The idea of [Morris](https://www.sciencedirect.com/science/article/pii/0020019079900681) algorithm is to set the _temporary link_ between the node and its 
[predecessor](https://leetcode.com/articles/delete-node-in-a-bst/): `predecessor.right = root`. So one starts from the node, computes its predecessor, and verifies if the link is present.

- There is no link? Set it and go to the left subtree.

- There is a link? Break it and go to the right subtree.  

There is one small issue to deal with what if there is no left child, i.e. there is no left subtree? Then go straight to the right subtree.

**Implementation**

!?!../Documents/129_RES.json:1000,408!?!

<iframe src="https://leetcode.com/playground/2M2w6NNr/shared" frameBorder="0" width="100%" height="500" name="2M2w6NNr"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$.
    
* Space complexity: $$\mathcal{O}(1)$$. 
<br />
<br />