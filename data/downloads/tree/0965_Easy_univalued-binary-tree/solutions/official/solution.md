# Official Solution

**Link:** [https://leetcode.com/problems/univalued-binary-tree/solution/](https://leetcode.com/problems/univalued-binary-tree/solution/)

---

[TOC]

## Solution
---
### Approach 1: Depth-First Search

**Intuition and Algorithm**

Let's output all the values of the array.  After, we can check that they are all equal.

To output all the values of the array, we perform a depth-first search.

<iframe src="https://leetcode.com/playground/YmASBunM/shared" frameBorder="0" width="100%" height="378" name="YmASBunM"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---
### Approach 2: Recursion

**Intuition and Algorithm**

A tree is univalued if both its children are univalued, plus the root node has the same value as the child nodes.

We can write our function recursively.  `left_correct` will represent that the left child is correct: ie., that it is univalued, and the root value is equal to the left child's value.  `right_correct` will represent the same thing for the right child.  We need both of these properties to be true.

<iframe src="https://leetcode.com/playground/gRV5CroQ/shared" frameBorder="0" width="100%" height="208" name="gRV5CroQ"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the number of nodes in the given tree.

* Space Complexity:  $$O(H)$$, where $$H$$ is the height of the given tree.
<br />
<br />