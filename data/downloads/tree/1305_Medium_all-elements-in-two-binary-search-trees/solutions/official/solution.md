# Official Solution

**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solution/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solution/)

---

[TOC]

## Solution

---

### Prerequisites

To solve this problem we will use recursive and iterative inorder traversals. Here are prerequisites you might want to check:

1. There are three DFS ways to traverse the tree: preorder, postorder, and inorder. Please check two minutes picture explanation, if you don't remember them quite well: [here is the Python version](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/283746/all-dfs-traversals-preorder-inorder-postorder-in-python-in-1-line) and [here is Java version](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/328601/all-dfs-traversals-preorder-postorder-inorder-in-java-in-5-lines).

2. > Inorder traversal of BST is an array sorted in ascending order.

3. To compute in inorder traversal follow the direction `Left -> Node -> Right`.

<iframe src="https://leetcode.com/playground/UEYRFWup/shared" frameBorder="0" width="100%" height="174" name="UEYRFWup"></iframe>

![traversal](../Figures/1305/inorder.png)
<br />
<br />


---
### Approach 1: Recursive Inorder Traversal + Sort, Linearithmic Time.

Let's start with the shortest possible solution: 

- Implement recursive inorder traversal, 1 line in Python, 5 lines in Java.

- Compute inorder traversal of each tree.

- Merge both lists and then sort the result.

![traversal](../Figures/1305/recursive_inorder.png)

This solution takes one minute to write, but the time complexity is linearithmic. 

**Implementation**

<iframe src="https://leetcode.com/playground/LVcpqvSd/shared" frameBorder="0" width="100%" height="480" name="LVcpqvSd"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}((N + M)\log(M + N))$$, where $$M$$ and $$N$$ are node numbers. To build inorder traversals takes $$\mathcal{O}(N + M)$$, to merge and sort the resulting lists - $$\mathcal{O}((N + M)\log(M + N))$$.
    
* Space complexity: $$\mathcal{O}(N + M)$$ to keep the output. 
<br />
<br />


---
### Approach 2: Iterative Inorder Traversal, One Pass, Linear Time.

**Intuition**

Now let's optimize the first approach. 

First, since both inorder traversals are already sorted, [one could merge them into one sorted list in linear time](https://leetcode.com/articles/merged-two-sorted-lists/). However, it's still a two-pass solution: first to build two inorder traversals and then to merge them.

A more elegant way here is to build iteratively inorder traversals for both trees in parallel, and at each step update the output list by the smallest value between both trees. That will be a pass solution. Here is how it works:

![traversal](../Figures/1305/iterative.png)

**Algorithm**

- Do iterative inorder traversal of both trees in parallel.

    - At each step add the smallest available value in the output.
     
- Return output list.

**Implementation**

!?!../Documents/1305_LIS.json:1000,530!?!

<iframe src="https://leetcode.com/playground/VriePQY4/shared" frameBorder="0" width="100%" height="500" name="VriePQY4"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N + M)$$, where $$M$$ and $$N$$ are node numbers. It's a one-pass approach along each tree. 
    
* Space complexity: $$\mathcal{O}(N + M)$$ to keep the output and both stacks. 
<br />
<br />


---
### Further Reading 

Here we implemented _recursive_ and _iterative_ inorder traversals. There is also _Morris_ inorder traversal, which is used for problems which require constant space solution. Here is a detailed comparison and implementation of all three inorder traversals: [Recover BST](https://leetcode.com/articles/recover-binary-search-tree/). 
<br />
<br />