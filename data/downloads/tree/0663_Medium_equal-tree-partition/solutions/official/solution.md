# Official Solution

**Link:** [https://leetcode.com/problems/equal-tree-partition/solution/](https://leetcode.com/problems/equal-tree-partition/solution/)

---

[TOC]

### Approach #1: Depth-First Search [Accepted]

**Intuition and Algorithm**

After removing some edge from `parent` to `child`, (where the `child` cannot be the original `root`) the subtree rooted at `child` must be half the sum of the entire tree.

Let's record the sum of every subtree. We can do this recursively using a depth-first search. After, we should check that half the sum of the entire tree occurs somewhere in our recording (and not from the total of the entire tree.)

Our careful treatment and analysis above prevented errors in the case of these trees:
```python
  0
 / \
-1  1

 0
  \
   0
```

<iframe src="https://leetcode.com/playground/WTEPTEdR/shared" frameBorder="0" width="100%" height="463" name="WTEPTEdR"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ where $$N$$ is the number of nodes in the input tree. We traverse every node.

* Space Complexity: $$O(N)$$, the size of `seen`, and the implicit call stack in our DFS.