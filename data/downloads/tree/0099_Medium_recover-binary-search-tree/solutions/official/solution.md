# Official Solution

**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solution/](https://leetcode.com/problems/recover-binary-search-tree/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Sort an Almost Sorted Array Where Two Elements Are Swapped

**Intuition**

Let's start from straightforward but not optimal solution with a linear time and space complexity. This solution serves to identify and discuss all subproblems.
  
It's known that [inorder traversal of BST is an array sorted in the ascending order](https://leetcode.com/articles/delete-node-in-a-bst/). Here is how one could compute an inorder traversal

<iframe src="https://leetcode.com/playground/CWnG7fvu/shared" frameBorder="0" width="100%" height="157" name="CWnG7fvu"></iframe>

Here two nodes are swapped, and hence inorder traversal is an almost sorted array where only two elements are swapped. To identify two swapped elements in a sorted array is a classical problem that could be solved in linear time. Here is a solution code

<iframe src="https://leetcode.com/playground/kw7SonB2/shared" frameBorder="0" width="100%" height="395" name="kw7SonB2"></iframe>

When swapped nodes are known, one could traverse the tree again and swap their values.

<img src="../Figures/99/iinorde.png" width="700">

**Algorithm**

Here is the algorithm:

1. Construct inorder traversal of the tree. It should be an almost sorted list where only two elements are swapped.

2. Identify two swapped elements x and y in an almost sorted array in linear time.

3. Traverse the tree again. Change value x to y and value y to x.

**Implementation**

<iframe src="https://leetcode.com/playground/Np9LzDXz/shared" frameBorder="0" width="100%" height="500" name="Np9LzDXz"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$. To compute inorder traversal takes $$\mathcal{O}(N)$$ time, to identify and to swap back swapped nodes $$\mathcal{O}(N)$$ in the worst case.

* Space complexity: $$\mathcal{O}(N)$$ since we keep inorder traversal `nums` with N elements.


---
### What Is Coming Next

In approach 1 we discussed three easy subproblems of this hard problem:

1. Construct inorder traversal.

2. Find swapped elements in an almost sorted array where only two elements are swapped.

3. Swap values of two nodes.

Now we will discuss three more approaches, and basically they are all the same :

- Merge steps 1 and 2, i.e. identify swapped nodes during the inorder traversal.

- Swap node values.

The difference in-between the following approaches is in a chosen method to implement inorder traversal :

- Approach 2 : Iterative.

- Approach 3 : Recursive.

- Approach 4 : Morris.

<img src="../Figures/99/mmorris.png" width="700">

Iterative and recursive approaches here do less than _one pass_, and they both need up to $$\mathcal{O}(H)$$ space to keep stack, where H is a tree height.

Morris approach is _two pass_ approach, but it's a constant-space one.


---
### Approach 2: Iterative Inorder Traversal

**Intuition**

Here we construct inorder traversal by iterations and identify swapped nodes at the same time, in one pass.

> Iterative inorder traversal is simple: go left as far as you can, then one step right. Repeat till the end of nodes in the tree.  

To identify swapped nodes, track the last node `pred` in the inorder traversal (i.e. the _predecessor_ of the current node) and compare it with current node value. If the current node value is smaller than its predecessor `pred` value, the swapped node is here. 

There are only two swapped nodes here, and hence one could break after having the second node identified.

Doing so, one could get directly nodes (and not only their values), and hence swap node values in $$\mathcal{O}(1)$$ time, drastically reducing the time needed for step 3.

!?!../Documents/99_LIS.json:1000,310!?!

**Implementation**

[Don't use Stack in Java, use ArrayDeque instead](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html).

<iframe src="https://leetcode.com/playground/ZvdacuKi/shared" frameBorder="0" width="100%" height="500" name="ZvdacuKi"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ in the worst case when one of the swapped nodes is a rightmost leaf.

* Space complexity : up to $$\mathcal{O}(N)$$ to keep the stack in the worst case when the tree is completely lean.


---
### Approach 3: Recursive Inorder Traversal

Iterative approach 2 could be converted into recursive one.

Recursive inorder traversal is extremely simple: follow `Left->Node->Right` direction, i.e. do the recursive call for the _left_ child, then do all the business with the node (= if the node is the swapped one or not), and then do the recursive call for the _right_ child.

On the following figure the nodes are numerated in the order you visit them, please follow `1-2-3-4-5` to compare different DFS strategies.

<img src="../Figures/99/ddfs.png" width="700">

**Implementation**

<iframe src="https://leetcode.com/playground/MD2MLjd8/shared" frameBorder="0" width="100%" height="497" name="MD2MLjd8"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ in the worst case when one of the swapped nodes is a rightmost leaf.

* Space complexity : up to $$\mathcal{O}(N)$$ to keep the stack in the worst case when the tree is completely lean.


---
### Approach 4: Morris Inorder Traversal

We discussed already iterative and recursive inorder traversals, which both have great time complexity though use up to $$\mathcal{O}(N)$$ to keep stack. We could trade in performance to save space. 

The idea of Morris inorder traversal is simple: to use no space but to traverse the tree.

> How that could be even possible? At each node one has to decide where to go: left or right, traverse left subtree or traverse right subtree. How one could know that the left subtree is already done if no additional memory is allowed?  

The idea of [Morris](https://www.sciencedirect.com/science/article/pii/0020019079900681) algorithm is to set the _temporary link_ between the node and its 
[predecessor](https://leetcode.com/articles/delete-node-in-a-bst/): `predecessor.right = root`. So one starts from the node, computes its predecessor and verifies if the link is present.

- There is no link? Set it and go to the left subtree.

- There is a link? Break it and go to the right subtree.  

There is one small issue to deal with : what if there is no left child, i.e. there is no left subtree? Then go straightforward to the right subtree.  

!?!../Documents/99_SEC.json:1000,377!?!

**Implementation**

<iframe src="https://leetcode.com/playground/CQ77XYgS/shared" frameBorder="0" width="100%" height="500" name="CQ77XYgS"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ since we visit each node up to two times.
 
* Space complexity : $$\mathcal{O}(1)$$.