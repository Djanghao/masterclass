# Official Solution

**Link:** [https://leetcode.com/problems/max-area-of-island/solution/](https://leetcode.com/problems/max-area-of-island/solution/)

---

[TOC]

### Approach #1: Depth-First Search (Recursive) [Accepted]

**Intuition and Algorithm**

We want to know the area of each connected shape in the grid, then take the maximum of these.

If we are on a land square and explore every square connected to it 4-directionally (and recursively squares connected to those squares, and so on), then the total number of squares explored will be the area of that connected shape.

To ensure we don't count squares in a shape more than once, let's use `seen` to keep track of squares we haven't visited before. It will also prevent us from counting the same shape more than once.

<iframe src="https://leetcode.com/playground/CQGNqDhr/shared" frameBorder="0" name="CQGNqDhr" width="100%" height="479"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(R*C)$$, where $$R$$ is the number of rows in the given `grid`, and $$C$$ is the number of columns.  We visit every square once.

* Space complexity: $$O(R*C)$$, the space used by `seen` to keep track of visited squares and the space used by the call stack during our recursion.

---
### Approach #2: Depth-First Search (Iterative) [Accepted]

**Intuition and Algorithm**

We can try the same approach using a stack-based, (or "iterative") depth-first search.

Here, `seen` will represent squares that have either been visited or are added to our list of squares to visit (`stack`). For every starting land square that hasn't been visited, we will explore 4-directionally around it, adding land squares that haven't been added to `seen` to our `stack`.

On the side, we'll keep a count `shape` of the total number of squares seen during the exploration of this shape. We'll want the running max of these counts.

<iframe src="https://leetcode.com/playground/khZHhSir/shared" frameBorder="0" name="khZHhSir" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(R*C)$$, where $$R$$ is the number of rows in the given `grid`, and $$C$$ is the number of columns. We visit every square once.

* Space complexity: $$O(R*C)$$, the space used by `seen` to keep track of visited squares and the space used by `stack`.