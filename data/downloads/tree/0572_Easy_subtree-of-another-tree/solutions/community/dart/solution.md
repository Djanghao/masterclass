# Dart subtree equality approach

**Author:** Selger
**Votes:** 1
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/4715740/](https://leetcode.com/problems/subtree-of-another-tree/solutions/4715740/)

---

# Intuition
For every node in root tree check equality of its subtree against provided subtree.

# Complexity
O(n^2)

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
  bool isSubtree(TreeNode? root, TreeNode? subRoot) {     
    if(root == null) {
        return false;
    }

    final isSubtreeIsEqual = isTreeEqual(root, subRoot);
    if(isSubtreeIsEqual) {
        return true;
    }
    else {
        final leftResult = isSubtree(root.left, subRoot);
        final rightResult = isSubtree(root.right, subRoot);
        return leftResult | rightResult;
    }
  }

  bool isTreeEqual(TreeNode? root, TreeNode? anotherRoot) {
      if(root == null || anotherRoot == null) {
          return root == anotherRoot;
      }
      final currNodeEquality = (root.val == anotherRoot.val);
      return currNodeEquality & isTreeEqual(root.left, anotherRoot.left) & isTreeEqual(root.right, anotherRoot.right);
  }

}
```