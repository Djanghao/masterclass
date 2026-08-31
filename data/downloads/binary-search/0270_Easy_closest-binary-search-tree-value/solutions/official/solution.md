# Official Solution

**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solution/](https://leetcode.com/problems/closest-binary-search-tree-value/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Recursive Inorder + Linear search, O(N) time

**Intuition**

The simplest approach (3 lines in Python) is to build inorder traversal and then find the closest element in a sorted array with built-in function `min`.  

![pic](../Figures/270/dummy.png)

This approach serves to identify the subproblems.

**Algorithm**

- Build an inorder traversal array.

- Find the closest to the target element in that array.

**Implementation**

<iframe src="https://leetcode.com/playground/dczSzCsj/shared" frameBorder="0" width="100%" height="378" name="dczSzCsj"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ because to build inorder traversal and then to perform linear search takes linear time.
* Space complexity: $$\mathcal{O}(N)$$ to keep inorder traversal.
<br /> 
<br />


---
### Approach 2: Iterative Inorder, O(k) time

**Intuition**

Let's optimize Approach 1 in the case when the index k of the closest element is much smaller than the tree height H.

First, one could merge both steps by traversing the tree and searching for the closest value at the same time.  

Second, one could stop just after identifying the closest value, there is no need to traverse the whole tree. The closest value is found if the target value is in-between between two in-order array elements `nums[i] <= target < nums[i + 1]`. Then the closest value is one of these elements.

![pic](../Figures/270/iteration.png)

**Algorithm**

- Initiate stack as an empty array and predecessor value as a very small number.

- While root is not null:

    - To build an inorder traversal iteratively, go left as far as you can and add all nodes on the way into the stack.
    
    - Pop the last element from stack `root = stack.pop()`. 

    - If the target is in-between of `pred` and `root.val`, return the closest between these two elements.
    
    - Set predecessor value to be equal to `root.val` and go one step right: `root = root.right`.
    
- We're here because during the loop one couldn't identify the closest value. That means that the closest value is the last value in the inorder traversal, i.e. current predecessor value. Return it. 

**Implementation**

<iframe src="https://leetcode.com/playground/jZKVgBLb/shared" frameBorder="0" width="100%" height="412" name="jZKVgBLb"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(k)$$ in the average case and $$\mathcal{O}(H + k)$$ in the worst case, where k is an index of the closest element. It's known that [the average case is a balanced tree](https://pages.cpsc.ucalgary.ca/~jacobs/Courses/cpsc331/F08/notes/lecture17.pdf), in that case stack always contains a few elements, and hence one does $$2k$$ operations to go to kth element in inorder traversal (k times to push into stack and then k times to pop out of stack). That results in $$\mathcal{O}(k)$$ time complexity. The worst case is a completely unbalanced tree, where you first push H elements into the stack and then pop out k elements, which results in $$\mathcal{O}(H + k)$$ time complexity.

![pic](../Figures/270/unbalanced.png)

* Space complexity: up to $$\mathcal{O}(H)$$ to keep the stack in the case of a non-balanced tree.
<br /> 
<br />


---
### Approach 3: Binary Search, O(H) time 

**Intuition**

Approach 2 works fine when indexing k of the closest element is much smaller than the tree height H.  

Let's now consider another limit and optimize Approach 1 in the case of relatively large k, comparable with N. 

Then it makes sense to use a binary search: go left if the target is smaller than the current root value, and go right otherwise. Choose the closest to the target value at each step.

![pic](../Figures/270/binary.png)

Kudos for this solution goes to @[stefanpochmann](https://leetcode.com/stefanpochmann/).  

**Implementation**

<iframe src="https://leetcode.com/playground/akN4WqeW/shared" frameBorder="0" width="100%" height="276" name="akN4WqeW"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(H)$$ since here one goes from root down to a leaf.

* Space complexity : $$\mathcal{O}(1)$$.