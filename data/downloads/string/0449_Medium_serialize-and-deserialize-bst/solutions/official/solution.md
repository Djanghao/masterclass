# Official Solution

**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solution/](https://leetcode.com/problems/serialize-and-deserialize-bst/solution/)

---

[TOC]

## Solution

--- 

### How to make the encoded string as compact as possible

This question is similar to the [Google interview question discussed last week](https://leetcode.com/discuss/interview-experience/297576/google-onsite-interview-sde1-new-grad-mountain-view-ca).

[To serialize](https://en.wikipedia.org/wiki/Serialization) a binary tree means to 

- Encode tree structure. 

- Encode node values. 

- Choose delimiters to separate the values in the encoded string.

![bla](../Figures/449/tree_struct.png)

Hence there are three axes of optimisation here.
<br /> 
<br />


---
### Approach 1: Postorder traversal to optimize space for the tree structure.

**Intuition**

Let's use here the fact that BST could be constructed from preorder or postorder traversal only. Please [check this article](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solution/) for a detailed discussion. In brief, it's a consequence of two facts:

- [Binary tree could be constructed from preorder/postorder and inorder traversal](https://leetcode.com/articles/construct-binary-tree-from-postorder-and-inorder-t/).

- [Inorder traversal of BST is an array sorted in the ascending order: `inorder = sorted(preorder)`](https://leetcode.com/articles/delete-node-in-a-bst/).

That means that the BST structure is already encoded in the preorder or postorder traversal and hence they are both suitable for compact serialization. 

Serialization could be easily implemented with both strategies, but for optimal deserialization better to choose the postorder traversal because member/global/static variables are not allowed here. 

![pic](../Figures/449/approach1.png)

**Implementation**

<iframe src="https://leetcode.com/playground/E2pqutxd/shared" frameBorder="0" width="100%" height="500" name="E2pqutxd"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ both for serialization and deserialization. Let's compute the solution with the help of [master theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)) $$T(N) = aT\left(\frac{b}{N}\right) + \Theta(N^d)$$. The equation represents dividing the problem up into $$a$$ subproblems of size $$\frac{N}{b}$$ in $$\Theta(N^d)$$ time. Here one divides the problem into two subproblems `a = 2`, the size of each subproblem (to compute the left and right subtree) is half of the initial problem `b = 2`, and all this happens in a constant time `d = 0`. That means that $$\log_b(a) > d$$ and hence we're dealing with [case 1](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)#Case_1_example) that means $$\mathcal{O}(N^{\log_b(a)}) = \mathcal{O}(N)$$ time complexity.

* Space complexity : $$\mathcal{O}(N)$$, since we store the entire tree. Encoded string: one needs to store $$(N - 1)$$ delimiters, and $$N$$ node values in the encoded string. The tree structure is encoded in the order of values and uses no space.
<br /> 
<br />


---
### Approach 2: Convert int to a 4-byte string to optimize space for node values.

**Intuition**

Approach 1 works fine with the small node values but starts to consume more and more space in the case of large ones. 

For example, the tree `[2, null, 3, null, 4]` is encoded as a string `"4 3 2"` which uses `5` bytes to store the values and delimiters, `1` byte per value or delimiter. So far everything is fine. 

Let's consider now the tree `[12345, null, 12346, null, 12347]` which is encoded as `"12347 12346 12345"` and consumes `17` bytes to store 3 integers and 2 delimiters, `15` bytes for node values only. At the same time, it's known that `4` bytes is enough to store an int value, _i.e._ `12` bytes should be enough for 3 integers. `15 > 12` and hence the storage of values could be optimised.

> How to do it? Convert each integer into a 4-byte string.

![pic2](../Figures/449/four_bytes.png)

**Implementation**

<iframe src="https://leetcode.com/playground/6ayums6y/shared" frameBorder="0" width="100%" height="500" name="6ayums6y"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ both for serialization and deserialization. 

* Space complexity : $$\mathcal{O}(N)$$, since we store the entire tree. Encoded string: one needs $$2(N - 1)$$ bytes for the delimiters and $$4 N$$ bytes for the node values in the encoded string. Tree structure is encoded in the order of node values and uses no space. 
<br /> 
<br />


---
### Approach 3: Get rid of delimiters.

**Intuition**

Approach 2 works well except for delimiter usage.

Since all node values are now encoded as a 4-byte string, one could just split the encoded string into 4-byte chunks, convert each chunk back to the integer, and proceed further. 

![pic3](../Figures/449/no_delimiters.png)

**Implementation**

<iframe src="https://leetcode.com/playground/DqHfAeG5/shared" frameBorder="0" width="100%" height="500" name="DqHfAeG5"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ both for serialization and deserialization. 

* Space complexity : $$\mathcal{O}(N)$$, since we store the entire tree. Encoded string: no delimiters, no additional space for the tree structure, just $$4 N$$ bytes for the node values in the encoded string.