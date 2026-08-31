# 2 lines in Ruby

**Author:** StefanPochmann
**Votes:** 7
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/72725/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/72725/)

---

Inspired by [jeantimex's solution](https://leetcode.com/discuss/59787/share-my-java-recursive-solution).

    def inorder_successor(root, p)
      root = root.right while root && root.val <= p.val
      root && inorder_successor(root.left, p) || root
    end