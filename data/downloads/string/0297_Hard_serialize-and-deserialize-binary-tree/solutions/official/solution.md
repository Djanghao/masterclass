# Official Solution

**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/)

---

[TOC]

## Solution

---

### Approach 1: Depth First Search (DFS)


**Intuition**

<center><img src="../Figures/297_BST.png" width="550px" /></center>

The **serialization** of a `Binary Search Tree` is essentially to encode its values and more importantly its structure. One can traverse the tree to accomplish the above task. And it is well known that we have two general strategies to do so:

- *Breadth First Search* (`BFS`)

    We scan through the tree level by level, following the order of height, from top to bottom. The nodes on higher levels would be visited before the ones with lower levels.
     
- *Depth First Search* (`DFS`)

    In this strategy, we adopt `depth` as the priority, so that one would start from a root and reach all the way down to a certain leaf, and then back to the root to reach another branch.

    The DFS strategy can further be distinguished as `preorder`, `inorder`, and `postorder` depending on the relative order among the root node, left node, and right node.
    
In this task, however, the `DFS` strategy is more adapted to our needs, since the linkage among the adjacent nodes is naturally encoded in the order, which is rather helpful for the later task of **deserialization**. 

Therefore, in this solution, we demonstrate an example with the `preorder` DFS strategy. One can check out more tutorials about `Binary Search Tree` on the [LeetCode Explore](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/).

**Algorithm**

First of all, here is the definition of the ```TreeNode``` which we will use in the following implementation.

<iframe src="https://leetcode.com/playground/mCAf8aax/shared" frameBorder="0" width="100%" height="225" name="mCAf8aax"></iframe>



The preorder DFS traverse follows *recursively* the order of `root -> left subtree -> right subtree`.

As an example, let's serialize the following tree. Note that serialization contains information about the node values as well as the information about the tree structure.


<!--![LIS](../Figures/297/297_tr.gif)-->
!?!../Documents/297_LIS.json:1000,622!?!


We start from the root, node `1`, the serialization string is ```1,```. Then we jump to its left subtree with the root node `2`, and the serialization string becomes ```1,2,```. Now starting from node `2`, we visit its left node `3` (```1, 2, 3, None, None,```) and right node `4` (```1, 2, 3, None, None, 4, None, None```) sequentially. Note that ```None, None,``` appears for each leaf to mark the absence of left and right child nodes, this is how we save the tree structure during the serialization. And finally, we get back to the root node `1` and visit its right subtree which happens to be a leaf node `5`. Finally, the serialization string is done as ```1, 2, 3, None, None, 4, None, None, 5, None, None,```.


<iframe src="https://leetcode.com/playground/T3RLagkj/shared" frameBorder="0" width="100%" height="395" name="T3RLagkj"></iframe>

Now let's deserialize the serialization string constructed above ```1,2,3,None,None,4,None,None,5,None,None,```. It goes along the string, initiates the node value and then calls itself to construct its left and right child nodes. 

<iframe src="https://leetcode.com/playground/PKsU8BeG/shared" frameBorder="0" width="100%" height="446" name="PKsU8BeG"></iframe>

**Complexity Analysis**

* Time complexity: in both serialization and deserialization functions, we visit each node exactly once, thus the time complexity is $$O(N)$$, where $$N$$ is the number of nodes, *i.e.* the size of the tree. 

* Space complexity: in both serialization and deserialization functions, we keep the entire tree, either at the beginning or at the end, therefore, the space complexity is $$O(N)$$. 
 
The solutions with BFS or other DFS strategies normally will have the same time and space complexity.
 
**Further Space Optimization**

In the above solution, we store the node value and the references to ```None``` child nodes, which means $$N \cdot V + 2N$$ complexity, where $$V$$ is the size of the value. That is called *natural serialization* and has been implemented above.

The $$N \cdot V$$ component here is the encoding of values, and can't be optimized further, but there is a way to reduce the $$2N$$ part which is the encoding of the tree structure.

The number of unique binary tree structures that can be constructed using `n` nodes is $$C(n)$$, where $$C(n)$$ is the `nth` Catalan number. Please refer to [this article](https://leetcode.com/articles/unique-binary-search-trees/) for more information.

There are $$C(n)$$ possible structural configurations of a binary tree with n nodes, so the largest index value that we might need to store is $$C(n) - 1$$. That means storing the index value could require up to 1 bit for $$n \leq 2$$, or $$\lceil log_2(C(n) - 1) \rceil$$ bits for $$n > 2$$.

In this way, one could reduce the encoding of the tree structure by $$\log N$$. More precisely, the [Catalan numbers](https://en.wikipedia.org/wiki/Catalan_number) grow as $$C(n) \sim \frac{4^n}{n^{3/2}\sqrt{\pi}}$$ and hence the theoretical minimum of storage for the tree structure that could be achieved is $$log(C(n)) \sim 2n - \frac{3}{2}\log(n) - \frac{1}{2}\log(\pi)$$