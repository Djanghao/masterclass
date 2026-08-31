# Official Solution

**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solution/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solution/)

---

[TOC]

## Solution
---
### Approach #1 (Top Down Depth-first Search) [Accepted]

**Algorithm**

A top down approach is similar to an in-order traversal. We use a variable `length` to store the current consecutive path length and pass it down the tree. As we traverse, we compare the current node with its parent node to determine if it is consecutive. If not, we reset the length.

<iframe src="https://leetcode.com/playground/iwz2wgFT/shared" frameBorder="0" name="iwz2wgFT" width="100%" height="275"></iframe>

@lightmark presents [a neat approach](https://leetcode.com/discuss/66486/short-and-simple-c-solution) without storing the maxLength as a global variable.

<iframe src="https://leetcode.com/playground/L59dWijX/shared" frameBorder="0" name="L59dWijX" width="100%" height="224"></iframe>

**Complexity analysis**

* Time complexity : $$O(n)$$.
The time complexity is the same as an in-order traversal of a binary tree with $$n$$ nodes.

* Space complexity : $$O(n)$$.
The extra space comes from implicit stack space due to recursion. For a skewed binary tree, the recursion could go up to $$n$$ levels deep.

---
### Approach #2 (Bottom Up Depth-first Search) [Accepted]

**Algorithm**

The bottom-up approach is similar to a post-order traversal. We return the consecutive path length starting at current node to its parent. Then its parent can examine if its node value can be included in this consecutive path.

<iframe src="https://leetcode.com/playground/jEqAfzMx/shared" frameBorder="0" name="jEqAfzMx" width="100%" height="394"></iframe>

**Complexity analysis**

* Time complexity : $$O(n)$$.
The time complexity is the same as a post-order traversal in a binary tree, which is $$O(n)$$.

* Space complexity : $$O(n)$$.
The extra space comes from implicit stack space due to recursion. For a skewed binary tree, the recursion could go up to $$n$$ levels deep.