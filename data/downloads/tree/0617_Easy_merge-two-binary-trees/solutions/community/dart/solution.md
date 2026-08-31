# DFS Approach

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/5441961/](https://leetcode.com/problems/merge-two-binary-trees/solutions/5441961/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
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
  TreeNode? mergeTrees(TreeNode? root1, TreeNode? root2) {
    if (root1 == null && root2 == null) return null;
    if (root1 != null && root2 == null) return root1;
    if (root1 == null && root2 != null) return root2;

    // At this point both [root1] and [root2] are not null.
    TreeNode node = TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
    node.left = mergeTrees(root1?.left, root2?.left);
    node.right = mergeTrees(root1?.right, root2?.right);

    return node;
  }
}
```