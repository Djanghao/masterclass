# 1 line Ruby and Python

**Author:** StefanPochmann
**Votes:** 159
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34212/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34212/)

---

Just a bit shorter/different than previous solutions.

Ruby:

    def max_depth(root)
      root ? 1 + [max_depth(root.left), max_depth(root.right)].max : 0
    end

Python:

    def maxDepth(self, root):
        return 1 + max(map(self.maxDepth, (root.left, root.right))) if root else 0