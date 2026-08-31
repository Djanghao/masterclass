# Official Solution

**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solution/](https://leetcode.com/problems/boundary-of-binary-tree/solution/)

---

[TOC]

## Solution

---
### Approach #1 Simple Solution [Accepted]

**Algorithm**

One simple approach is to divide this problem into three subproblems- left boundary, leaves and right boundary.

* Left Boundary: We keep on traversing the tree towards the left and keep on adding the nodes in the $$res$$ array, provided the current node isn't a leaf node. If at any point, we can't find the left child of a node, but its right child exists, we put the right child in the $$res$$ and continue the process. The following animation depicts the process.

<!--![Left_Boundary](../Figures/545_Boundary_Left.gif)-->

!?!../Documents/545_Boundary_Of_Binary_Tree1.json:1000,563!?!

* Leaf Nodes: We make use of a recursive function `addLeaves(res,root)`, in which we change the root node for every recursive call. If the current root node happens to be a leaf node, it is added to the $$res$$ array. Otherwise, we make the recursive call using the left child of the current node as the new root. After this, we make the recursive call using the right child of the current node as the new root. The following animation depicts the process.

<!--![Leaf_Boundary](../Figures/545_Boundary_Leaf.gif)-->
!?!../Documents/545_Boundary_Of_Binary_Tree2.json:1000,563!?!

* Right Boundary: We perform the same process as the left boundary. But, this time, we traverse towards the right. If the right child doesn't exist, we move towards the left child. Also, instead of putting the traversed nodes in the $$res$$ array, we push them over a stack during the traversal. After the complete traversal is done, we pop the element from over the stack and append them to the $$res$$ array. The following animation depicts the process.

<!--![Right_Boundary](../Figures/545_Boundary_Right.gif)-->
!?!../Documents/545_Boundary_Of_Binary_Tree3.json:1000,563!?!

<iframe src="https://leetcode.com/playground/De94qHAF/shared" frameBorder="0" width="100%" height="500" name="De94qHAF"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n)$$ One complete traversal for leaves and two traversals upto depth of binary tree for left and right boundary.

* Space complexity : $$O(n)$$ $$res$$ and $$stack$$ is used.

---

### Approach #2 Using PreOrder Traversal [Accepted]

**Algorithm**

Before we dive into this approach, let's look at the preorder traversal of a simple Binary Tree as shown below:

![Preorder Traversal](../Figures/545_Preorder.png)

From the above figure, we can observe that our problem statement is very similar to the Preorder traversal. Actually, the order of traversal is the same(except for the right boundary nodes, for which it is the reverse), but we need to selectively include the nodes in the return result list. Thus, we need to include only those nodes in the result, which are either on the left boundary, the leaves or the right boundary.

In order to distinguish between the various kinds of nodes, we make use of a $$flag$$ as follows:

* Flag=0: Root Node.

* Flag=1: Left Boundary Node.

* Flag=2: Right Boundary Node.

* Flag=3: Others(Middle Node).

We make use of three lists $$\text{left\_boundary}$$, $$\text{right\_boundary}$$, $$\text{leaves}$$ to store the appropriate nodes and append the three lists at the end.

We go for the normal preorder traversal, but while calling the recursive function for preorder traversal using the left child or the right child of the current node, we also pass the $$flag$$ information indicating the type of node that the current child behaves like.

For obtaining the flag information about the left child of the current node, we make use of the function `leftChildFlag(node, flag)`. In the case of a left child, the following cases are possible, as can be verified by looking at the figure above:

* The current node is a left boundary node: In this case, the left child will always be a left boundary node. e.g. relationship between E & J in the above figure.

* The current node is a root node: In this case, the left child will always be a left boundary node. e.g. relationship between A & B in the above figure.

* The current node is a right boundary node: In this case, if the right child of the current node doesn't exist, the left child always acts as the right boundary node. e.g. G & N. But, if the right child exists, the left child always acts as the middle node. e.g. C & F.

Similarly, for obtaining the flag information about the right child of the current node, we make use of the function `rightChildFlag(node, flag)`. In the case of a right child, the following cases are possible, as can be verified by looking at the figure above:

* The current node is a right boundary node: In this case, the right child will always be a right boundary node. e.g. relationship between C & G in the above figure.

* The current node is a root node: In this case, the right child will always be a left boundary node. e.g. relationship between A & C in the above figure.

* The current node is a left boundary node: In this case, if the left child of the current node doesn't exist, the right child always acts as the left boundary node. e.g. B & E. But, if the left child exists, the left child always acts as the middle node.

Making use of the above information, we set the $$flag$$ appropriately, which is used to determine the list in which the current node has to be appended.

<iframe src="https://leetcode.com/playground/cfFjCy7u/shared" frameBorder="0" width="100%" height="500" name="cfFjCy7u"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n)$$ One complete traversal of the tree is done.

* Space complexity : $$O(n)$$ The recursive stack can grow upto a depth of $$n$$. Further, $$\text{left\_boundary}$$, $$\text{right\_boundary}$$ and $$\text{leaves}$$ combined together can be of size $$n$$.

---