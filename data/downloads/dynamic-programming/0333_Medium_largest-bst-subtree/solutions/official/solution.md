# Official Solution

**Link:** [https://leetcode.com/problems/largest-bst-subtree/solution/](https://leetcode.com/problems/largest-bst-subtree/solution/)

---

[TOC]

## Solution

--- 

### Overview

We need to find the largest subtree which is also a Binary Search Tree (BST), where the largest means subtree has the maximum number of nodes.

**Binary Search Tree** is a binary tree data structure in which all of its nodes have the following properties:

- The left subtree of a node contains only nodes with values less than the node’s value.
- The right subtree of a node contains only nodes with values greater than the node’s value.
- The left and right subtree of each node in a BST should also be binary search trees. While this property is not directly stated in the problem description, it can be inferred since all nodes must have the above two properties.

If you are unfamiliar with binary search trees, we encourage you to check out our [BST Explore Card](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/). We have also included a few similar practice problems that you can try:

1. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
2. [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
3. [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
4. [House Robber III](https://leetcode.com/problems/house-robber-iii/)

</br>

---

### Approach 1: Pre-Order Traversal

**Intuition**

We need to find the largest BST of the given tree. The root of the largest BST could be any node in the given tree. Hence we can think of traversing each node of the given tree and check if the subtree rooted at the current node is a BST or not. If it is a valid BST, we can count the nodes in this tree and update the answer. Otherwise, we will search for the largest BST in the left and right subtrees.

This approach is suboptimal and might result in time limit exceeded (TLE). However, it is presented here for learning purposes. It explains a few methods that solve classic problems related to binary trees, such as counting the number of nodes and finding the maximum and minimum valued nodes in subtrees. As such, the intention of this approach is to provide a better foundation for understanding the subsequent approaches.

Note that the efficiency of this approach could be improved by caching the results for each of the operations listed below. However, this optimization is not implemented here because this approach is only intended to be used as a stepping stone to help us understand the subsequent optimized solutions.

##### How to check if a binary tree is a Binary Search Tree?
> We can create a function isValidBST which will return True if the subtree rooted at the current node is a valid BST. At each node of the tree: <br />
> - **The left subtree of a node contains only nodes with values less than the current node’s value.**    
   We can call a findMax function which will explore all of the nodes in the left subtree and return the maximum node value. If the max value is less than the current node value it means all nodes in the left subtree have a smaller value than the current node. <br /> <br />
> - **The right subtree of a node contains only nodes with values greater than the current node’s value.**     
   We can call a findMin function which will explore all of the nodes in the right subtree and return the minimum node value. If the min value is more than the current node's value it means all nodes in the right subtree have greater value than the current node. <br /> <br />
> - **The left and right subtree of a node must also be a binary search tree.**    
   To check this condition we can recursively call this isValidBST function on the left child and the right child of the current node. <br /> <br />
>   If all these three conditions are true then the subtree rooted at the current node is also a Binary Search Tree.

```scala
isValidBST root:
    // An empty tree is a valid Binary Search Tree.
    if root is NULL
        return True

    leftMax = max node value in root's left subtree

    if leftMax >= root's value
        return False

    rightMin =  min node value in root's right subtree

    if rightMin <= root's value
        return False

    if root's left and root's right subtree are BST
        return True

    return False
```

![check BST](../Figures/333/Slide1.JPG)

##### How to find min / max node value in a binary tree?
> We can create a function findMax which will return the max node value in the subtree rooted at the current node. Recursively get max value from the left and right subtrees of the current node.     
> The max node of the current subtree will be the max value from `left subtree max value`, `right subtree max value`, or `current node value`.    
> We can use a similar process to get the minimum node value.

```scala
findMax in root:
    // Max node in an empty tree should be smaller than parent.
    if root is NULL
        return INT_MIN (Max node is smallest possible value)

    maxValue = max of root's value and root's left subtree and root's right subtree
    return maxValue


findMin in root:
    // Min node in an empty tree should be larger than parent.
    if root is NULL
        return INT_MAX (Min node is largest possible value)

    minValue = min of root's value and root's left subtree and root's right subtree
    return minValue
```

<br />

!?!../Documents/333/slideshow1.json:960,540!?!

<br />


##### How to count nodes in a given binary tree?
> We can create a function countNodes which will return the number of nodes in the subtree rooted at the current node. Recursively get the number of nodes in the left and right subtree of the current node.      
> Then, the total number of nodes in the subtree rooted at the current node will be 1 (for the current node) plus the number of nodes in the left subtree plus the number of nodes in the right subtree.

```scala
countNodes in root:
    if root is NULL
        return 0 (No nodes in an empty tree)

    current size = 1 (for current root) + nodes in root's left subtree + nodes in root's right subtree
    return current size
```

<br />

!?!../Documents/333/slideshow2.json:960,540!?!

<br />

**Algorithm**

1. Traverse each node of the given tree one by one.
2. For each node of the given tree:
    - Perform the following steps to check if the subtree rooted at the current node is a BST:
      - For each node in the current tree, find the maximum value in the left subtree of the current node, and find the minimum value in the right subtree of the current node.
      - If the current node is greater than the left subtree's max value **and** smaller than the right subtree's min value **and** the left and right subtrees are also BSTs, then return `True`.
  	- Otherwise, the subtree rooted at the current node is not a BST, so return `False`.
    - If it is a BST, then perform the following steps to count the number of nodes in this subtree:
      - Recursively get the number of nodes in the left and right subtree of the current node.
      - Return 1 (for the current node) plus the number of nodes in its left subtree plus the number of nodes in its right subtree.
3. If the tree rooted at the current node is BST, then its subtrees must contain smaller size BSTs.  In this case, return the current BST size as there is no need to check either of the subtrees.
4. Otherwise, we need to return the maximum size BST found in the left or right subtree of the current node.

**Implementation**


<iframe src="https://leetcode.com/playground/ZopFCgTj/shared" frameBorder="0" width="100%" height="500" name="ZopFCgTj"></iframe>


**Complexity Analysis**

Here, $$N$$ and $$H$$ are the number of nodes and the max height of the given tree respectively.

* Time complexity: $$O(N^3)$$.

  - In the `isValidBST` function, each node of the tree is traversed and at each node, the max node value is found in each left subtree and min node value is found in each right subtree.
  
    To find the max and min valued nodes we traverse the whole subtrees, which leads to a total of $$O(N)$$ time for both of the functions.
  
    Thus, an $$O(N)$$ operation is performed at each node to find the min and max valued node. This is done once for each of the $$N$$ nodes in the tree, which leads to an overall time of $$O(N^2)$$ to determine if the given tree is a Binary Search Tree.

  - The `countNodes` function traverses all of the nodes in the given tree, hence it takes $$O(N)$$ time.

  - In the `largestBSTSubtree` function, we traverse all nodes of the given tree, and for each node, we find if the subtree rooted at the current node is a BST which takes $$O(N^2)$$ time and if it is a BST we count the nodes in this subtree which takes $$O(N)$$ time. Hence, it is $$O(N^2 + N)$$ time operation for each tree node. 
  
  Thus to check all $$N$$ nodes, this approach requires $$O(N \cdot (N^2 + N))$$ time.
  
* Space complexity: $$O(N)$$.

  - The recursion call stack can take at most $$O(H)$$ space; in the worst-case scenario, the height of the tree will equal $$N$$.
    

<br/>

---

### Approach 2: Pre-Order Traversal Optimized

**Intuition**

One strategy we can use when trying to improve an approach is to identify the bottleneck of the performance and try to fix it. Our time complexity analysis revealed that the `isValidBST` function takes $$O(N^2)$$ time, which makes it a good candidate for us to try to improve. To reduce the time complexity of this step, let's consider if there are any alternative ways to determine if a binary tree is a BST. 
As it turns out, binary search trees have a special property; the node values, when printed using an in-order traversal, are strictly increasing. We can take advantage of this property to efficiently determine if a subtree is BST or not.

Remember, in BST, all of the node values in the left subtree are lower than the root, and all of the node values in the right subtree are higher than the root. So traversing all left subtree nodes first then the current node and then the right subtree (i.e. inorder-traversal) will traverse the nodes in strictly increasing order of their values. 

We can store the in-order traversal of the given tree in an array, and check if the array is strictly increasing or not.

![inorder](../Figures/333/Slide41.JPG)

Furthermore, we can implement this optimization without using the extra array space. We only need to compare the current node value with the previous node value in the in-order traversal. So we only need to store one variable that points to the previous node and compare it with the current node. If at any step the previous node is not strictly smaller than the current node then the in-order traversal will not be strictly increasing. Hence, it is not a BST. 

<br />

!?!../Documents/333/slideshow3.json:960,540!?!

<br />

Now, we can traverse each node of the given tree and check if the subtree rooted at the current node is a valid BST or not in $$O(N)$$ time as opposed to $$O(N^2)$$ time. If it is a BST we can count the nodes in this tree and return the answer. Otherwise, we will look for the largest BST in left and right subtrees.

**Algorithm**

1. Traverse each node in the given tree one by one.
2. For each node of the given tree:
    - Perform the following steps to check if the subtree rooted at the current node is a BST.
      - Check if the in-order traversal of the tree is in sorted order.   
      - Keep a `previous` variable to point to the previously visited node while performing an in-order traversal of the tree.
      - Traverse the left subtree first.
      - Compare the current node with the previous node (if it is the first node of the traversal, then there is no need to compare), if the previous node's value is not smaller than the current node's value then it means the in-order traversal is not in strictly increasing order, so return `false`.
      - Update `previous` with the current node.
      - Traverse the right subtree of the current node.
    - If it is a BST, perform the following steps to count the number of nodes in this subtree.
      - Recursively get the number of nodes in the left and right subtree of the current node.
      - Return 1 plus the number of nodes in left subtree plus the number of nodes in right subtree.
3. If the tree rooted at the current node is a BST, then its subtrees will contain smaller BSTs so return the BST size from here. There is no need to check further.
4. Otherwise, we need to return the size of the largest BST found in the left or right subtree of the current node.

**Implementation**

<iframe src="https://leetcode.com/playground/iqLXzo6B/shared" frameBorder="0" width="100%" height="500" name="iqLXzo6B"></iframe>


**Complexity Analysis**

Here, $$N$$ and $$H$$ are the number of nodes and the max height of the given tree respectively.

* Time complexity: $$O(N^2)$$.

   - In the `isValidBST` function, we perform an in-order traversal of the tree rooted at the given node, hence each node is visited once. So it takes $$O(N)$$ time.

  - The `countNodes` function traverses all of the nodes in the given tree, hence it takes $$O(N)$$ time.

  - In the `largestBSTSubtree` function, we traverse all nodes of the given tree, and for each node, we find if the subtree rooted at the current node is a BST which takes $$O(N)$$ time. If it is a BST, we count the nodes in this subtree which also takes $$O(N)$$ time. Hence, it is an $$O(N + N)$$ time operation for each tree node. Thus for $$N$$ nodes it takes $$O(N \cdot (N + N))$$ time.

* Space complexity: $$O(N)$$.

  - Recursive stack can take at most $$O(H)$$ space; in the worst-case scenario, the height of the tree will equal $$N$$.


<br/>

---

### Approach 3: Post-Order Traversal

**Intuition**

In the previous approaches, we traversed the tree from root to leaf. This resulted in us checking some of the same subtrees multiple times because a smaller subtree can be a part of many larger subtrees.

For example, in the first approach, we repeatedly found the minimum and maximum elements in some smaller subtrees. In the second approach, we performed an in-order traversal of smaller subtrees multiple times. Instead of performing repeat calculations, we can bubble up the results `(like minimum, maximum, isSubtreeBST)` from the subtrees. This allows us to evaluate `isValidBST` for each subtree before we evaluate it for the subtree's parent node, thus avoiding redundant traversals.

![repeated-checks](../Figures/333/Slide69.JPG)

By traversing each tree's children first, we can pass information about subtrees up to the parent. This information can be used by the parent to determine if the parent node is a BST in constant time. 

A left subtree needs to tell its parent whether it is BST and the maximum value in it. This allows us to compare the maximum value with the parent’s data to check the BST property. 

Similarly, the right subtree needs to tell its parent whether it is BST and the minimum value it contains.

In the previous approaches, we also used the `countNodes` function to traverse the same set of nodes on which `isValidBST` was called.     
We know that the size of a tree is equal to 1 plus the left subtree size plus the right subtree size.

So, instead of calling `countNodes` separately, we can pass the number of nodes in the current subtree up to the parent as well to get the size of the current tree in constant time.

Thus, the following information must be passed up the tree when finding the largest BST: 
1. Whether each subtree itself is BST.  
2. The maximum value in the subtree. 
3. The minimum value in the subtree.
4. Size of the subtree.

<br />

!?!../Documents/333/slideshow4.json:960,540!?!

<br />

When checking if a node is the root of a BST, we check if its value is larger than the largest value in the left subtree, smaller than the smallest value in the right subtree, and both the left and right subtrees are also binary search trees.

However, we do not need to make all of these checks. We can observe that to determine if the current node is a BST, we only need to use the minimum, and maximum values returned by the calls to its children.

When a subtree is not a BST, all the trees this subtree is a part of will also not be binary search trees. So whenever the current subtree is not a BST, instead of returning the minimum and maximum value stored in the tree, we can return $$[-infinity, infinity]$$, such that all of the nodes above this subtree will also fail the BST check.

Note that this return value is the opposite of what we return for a $$NULL$$ node, $$[infinity, -infinity]$$. This range is used so that a $$NULL$$ node will never cause its parent to fail the BST check.

**Algorithm**

1. Traverse each node of the given tree in a post-order manner. <br>That is, visit the left child, then the right child, and then the root node.
2. For each node, perform the following checks to determine if the subtree rooted at the current node is a BST:
	- Current node's value should be smaller than minimum node value of right subtree.
	- Current node's value should be greater than maximum node value of left subtree.
3. If the tree rooted at the current node is BST:
	- Calculate the size of the current subtree by adding 1 (for the current node) to the size of the left subtree plus the size of the right subtree.
4. Otherwise, if the current node is not a BST, return max BST size in left or right subtree of the current node.

**Implementation**


<iframe src="https://leetcode.com/playground/e2vqzuAb/shared" frameBorder="0" width="100%" height="500" name="e2vqzuAb"></iframe>


**Complexity Analysis**

Here, $$N$$ and $$H$$ are the number of nodes and the max height of the given tree respectively.

* Time complexity: $$O(N)$$.

  - In `largestBSTSubtree` function, we traverse all nodes of the given tree, and for each node, we find if the subtree rooted at the current node is a BST which takes $$O(1)$$ time and if it is a BST, we calculate the number of nodes in this subtree which also takes $$O(1)$$ time. Thus, for $$N$$ nodes this algorithm takes $$O(N)$$ time.

* Space complexity: $$O(N)$$.

  - Recursive stack can take at most $$O(H)$$ space; in the worst-case scenario, the height of the tree will equal $$N$$.