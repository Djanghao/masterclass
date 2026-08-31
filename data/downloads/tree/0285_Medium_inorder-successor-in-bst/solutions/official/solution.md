# Official Solution

**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solution/](https://leetcode.com/problems/inorder-successor-in-bst/solution/)

---

[TOC]

## Solution

---

### Overview

This is a very popular programming interview problem and there are a couple of ways we can approach it. This problem is very similar to `finding the Inorder Successor in a Binary Tree`. The first solution that we will look at applies to any kind of binary tree because it does not rely on any special properties of the tree. Our second solution will take into account the sorted nature of the binary search tree and will thus, improve upon the overall time complexity of the previous solution. The inorder successor of a particular node is simply the node that comes after this node during the inorder traversal of the tree. There are a few scenarios that we must consider for the inorder successor of a node to understand our first algorithm properly.

![Few examples of inorder successors](../Figures/285/img1.png)


*Figure 1. Few examples of inorder successors.*


![Inorder example](../Figures/285/img2.png)


*Figure 2. Another unique example of an inorder successor.*


</br>

---

### Approach 1: Without using BST properties

**Intuition**

As mentioned in the overview section of this article, we will first discuss the approach that applies to any binary tree and is not specifically for a binary search tree. This is not the most efficient approach out there considering it doesn't incorporate the search properties associated with the structure of a binary search tree. However, for the sake of completeness, we are including this approach in the official solution since the interviewer may ask you to find the inorder successor for a binary tree :)

We hinted briefly at the different cases for the inorder successor and we will look at these cases more concretely in this solution. The algorithm is based on handling these cases one by one. There are just two cases that we need to account for in this approach.

***When the node has a right child***

The inorder successor in this case is the leftmost node in the tree rooted at the right child. Let's look at a couple of examples to depict this point.

![Case 1](../Figures/285/img3.png)


*Figure 3. Case 1 is when the given node has the right child.*


Let's look at yet another example where there is a right child who doesn't have a left child. In this case, the right child itself will be the inorder successor of the designated node.

![Case 1](../Figures/285/img4.png)


*Figure 4. Another example of when the node has a right child.*


***When the node doesn't have a right child***

This is trickier to handle than the first case. In this case, one of the ancestors acts as the inorder successor. That ancestor can be the immediate parent, or, it can be one of the ancestors further up the tree.

![Case 2](../Figures/285/img5.png)


*Figure 5. When the node does not have the right child.*


In this case, we need to perform the inorder traversal on the tree and keep track of a `previous` node which is the predecessor to the current node we are processing. If at any point the predecessor `previous` is equal to the node given to us then the current node will be its inorder successor. Why? Because we are performing the inorder traversal on the tree to find the successor node via simulation.

**Algorithm**

1. We define two class variables for this algorithm: `previous` and `inorderSuccessorNode`. The `previous` variable will only be used when handling the second case as previously explained and the `inorderSuccessorNode` will ultimately contain the result to be returned.
2. Inside the function `inorderSuccessor`, we first check which of the two cases we need to handle. For that, we simply check for the presence of the right child.
   * *The right child exists* 

       In this case, we assign the right child to a node called `leftmost` and we iterate until we reach a node (`leftmost`) that doesn't have a left child. We iteratively assign `leftmost = leftmost.left` and that's how we will get the leftmost node in the subtree.


   * *The right child does not exist*

        1. As mentioned before, this case is trickier to handle. For this, we define another function called `inorderCase2` and we will pass it a `node` and the node `p`. 
        2. We perform simple inorder traversal and hence, we first recurse on the left child of the `node`.
        3. Then, when the recursion returns, we check if the class variable `previous` is equal to the node `p`. If that is the case, then it means `p` is the inorder predecessor of `node` or in other words, the `node` is the inorder successor of the node `p` and we return from that point onwards. We assign `inorderSuccessorNode` to `node` and return from this function.

3. Finally, we return the `inorderSuccessorNode` as our result.

**Implementation**

<iframe src="https://leetcode.com/playground/LihaFuhX/shared" frameBorder="0" width="100%" height="500" name="LihaFuhX"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ where $$N$$ is the number of nodes in the tree. 

    * For case 1, we might have a scenario where the root node has a right subtree that is left-skewed. Something like the following.

        ![Time complexity skewed](../Figures/285/img6.png)

        *Figure 6. A skewed tree for worst-case time complexity.*

        In this case, we have to process all of the nodes to find the leftmost node and hence, the overall time complexity is $$O(N)$$. 
        
    * For case 2, we might have to process the entire tree before finding the in-order successor. Let's look at an example tree to understand when that might happen.

        ![Time complexity skewed](../Figures/285/img7.png)

        *Figure 7. A skewed tree for worst-case time complexity.*

* Space Complexity: Space Complexity: $$O(N)$$ for the second case since we might have a skewed tree leading to a recursion stack containing all $$N$$ nodes. For the first case, we don't have any additional space complexity since we simply use a while loop to find the successor.

---

### Approach 2: Using BST properties

**Intuition**

In the previous approach, we did not use any of the binary-search tree properties. However, the optimal solution for this problem comes from utilizing those properties and that's what we will explore in this solution. Specifically, we'll make use of the standard BST property where the left descendants have smaller values than the current node and the right descendants have larger values than the current node. We don't need to handle any specific cases here and we can start with the root node directly and reach our inorder successor. Let's see the choices we have when comparing the value of the given node `p` to the current `node` in the tree.

![BST property depiction](../Figures/285/img8.png)


*Figure 8. Skipping half of the binary search tree.*


By comparing the values of the node `p` and the current node in the tree during our traversal, we can discard half of the remaining nodes at each step, and thus, for a balanced binary search tree we can search for our order successor in logarithmic time rather than linear time. That's a huge improvement over the previous solution.

**Algorithm**

1. We start our traversal with the root node and continue the traversal until our current `node` reaches a `null` value i.e. there are no more nodes left to process.
2. At each step we compare the value of node `p` with that of `node`.
   1. If `p.val >= node.val` that implies we can safely discard the left subtree since all the nodes there including the current `node` have values less than `p`. 
   
       ![Skipping the left subtree](../Figures/285/img9.png)

       *Figure 9. Skipping the left subtree.*
   
   2. However, if `p.val < node.val`, that implies that the successor must lie in the left subtree *and* that the current `node` is a ***potential candidate for inorder successor***. Thus, we update our local variable for keeping track of the successor, `successor`, to `node`. 
   
       ![Skipping the right subtree](../Figures/285/img10_edit.png)

       *Figure 10. Skipping the right subtree and recording a potential candidate for the successor.*
   
3. Return `successor`.

    ![Returning the candidate.](../Figures/285/img11.png)

    *Figure 11. Returning the candidate.*

> We don't handle duplicate node values in the algorithm below. That is left as an exercise for the reader to solve :) It's a slight variation but an important one to understand for follow-up questions in an interview.

**Implementation**

<iframe src="https://leetcode.com/playground/VhE6n8Ba/shared" frameBorder="0" width="100%" height="378" name="VhE6n8Ba"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ since we might end up encountering a skewed tree and in that case, we will just be discarding one node at a time. For a balanced binary search tree, however, the time complexity will be $$O(\text{log}N)$$ which is what we usually find in practice.

* Space Complexity: $$O(1)$$ since we don't use recursion or any other data structures for getting our successor.