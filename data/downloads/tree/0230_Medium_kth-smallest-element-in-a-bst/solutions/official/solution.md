# Official Solution

**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/)

---

[TOC]

## Solution

--- 

### How to traverse the tree

There are two general strategies to traverse a tree:
     
- *Depth First Search* (`DFS`)

    In this strategy, we adopt the `depth` as the priority, so that one would start from a root and reach all the way down to a certain leaf, and then backtracks until it finds another unexplored branch. The DFS strategy can further be distinguished as `preorder`, `inorder`, and `postorder` depending on the relative order among the root node, left node, and right node.
    
- *Breadth First Search* (`BFS`)

    We scan through the tree level by level, following the order of height, from top to bottom. The nodes on higher levels would be visited before the ones with lower levels.
    
In the following figure, the nodes are enumerated in the order you visit them, please follow `1-2-3-4-5` to compare different strategies.

![postorder](../Figures/230/bfs_dfs.png)

> To solve the problem, one could use the property of BST: inorder traversal of BST is an array sorted in ascending order. 

<br /> 
<br />


---
### Approach 1: Recursive Inorder Traversal

It's a very straightforward approach with $$O(N)$$ time complexity. The idea is to build an inorder traversal of BST which is an array sorted in the ascending order. Now the answer is the `k - 1`th element of this array. 

![bla](../Figures/230/inorder.png)

<iframe src="https://leetcode.com/playground/BViuw8kt/shared" frameBorder="0" width="100%" height="293" name="BViuw8kt"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N)$$ to build a traversal. 
* Space complexity : $$O(N)$$ to keep an inorder traversal.
<br />
<br />


---
### Approach 2: Iterative Inorder Traversal

The above recursion could be converted into iteration, with the help of stack. This way one could speed up the solution because there is no need to build the entire inorder traversal, and one could stop after the kth element.

![bla](../Figures/230/iteration.png)

<iframe src="https://leetcode.com/playground/SMHuZz96/shared" frameBorder="0" width="100%" height="310" name="SMHuZz96"></iframe>

**Complexity Analysis**

* Time complexity: $$O(H + k)$$, where $$H$$ is a tree height. This complexity is defined by the stack, which contains at least $$H + k$$ elements, since before starting to pop out one has to go down to a leaf. This results in $$O(\log N + k)$$ for the balanced tree and $$O(N + k)$$ for a completely unbalanced tree with all the nodes in the left subtree. 

* Space complexity: $$O(H)$$ to keep the stack, where $$H$$ is a tree height. That makes $$O(N)$$ in the worst case of the skewed tree, and $$O(\log N)$$ in the average case of the balanced tree.
<br />
<br />


---
### Follow up

> What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Click here to learn how to [insert a node into a BST](https://leetcode.com/articles/insert-into-a-bst/) and [delete a node from a BST](https://leetcode.com/articles/delete-node-in-a-bst/), the time complexity of these operations is $$O(H)$$, where $$H$$ is a height of the binary tree. $$H = \log N$$ for the balanced tree and $$H = N$$ for a skewed tree.

Hence without any optimisation insert/delete + search of kth element has $$O(2H + k)$$ complexity. How to optimize that? 

That's a design question, basically, we're asked to implement a structure that contains a BST inside and optimises the following operations :

- Insert

- Delete

- Find kth smallest

Seems like a database description, isn't it? Let's use here the same logic as for [LRU cache](https://leetcode.com/articles/lru-cache/) design, and combine an indexing structure (we could keep BST here) with a doubly-linked list. 

Such a structure would provide:

- $$O(H)$$ time for the insert and delete.

- $$O(k)$$ for the search of kth smallest.

![bla](../Figures/230/linked_list2.png)

The overall time complexity for insert/delete + search of kth smallest is $$O(H + k)$$ instead of $$O(2H + k)$$. 

**Complexity Analysis**

* Time complexity for insert/delete + search of kth smallest: $$O(H + k)$$, where $$H$$ is a tree height. $$O(\log N + k)$$ in the average case, $$O(N + k)$$ in the worst case.

* Space complexity : $$O(N)$$ to keep the linked list.