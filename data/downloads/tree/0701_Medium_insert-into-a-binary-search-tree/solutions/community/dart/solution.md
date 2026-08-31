# Insert into binary search tree

**Author:** edjosteneslima
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5088031/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5088031/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  TreeNode? insertIntoBST(TreeNode? root, int val) {
    if (root == null) {
        return TreeNode(val);
    }

    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    } else if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    }

    return root;
  }
}
```