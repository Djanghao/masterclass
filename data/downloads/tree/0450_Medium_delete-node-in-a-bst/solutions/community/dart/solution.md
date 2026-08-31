# [Dart] Concise solution with recursive

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/3171934/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/3171934/)

---

As usual search for the deleting node, if found check left is null, yes return right, same check for right.

Both have nodes, there is many way but I prefer to attach deleting left part to deleting right's left most.

So, find the right's left most and attach the deleting left part. After attached, the right will already modifed, so just return right to finish the deletion process

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
  TreeNode? deleteNode(TreeNode? root, int key) {
    if (root == null) {
      return null;
    }
    if (root.val == key) {
      // If left not found return right
      if (root.left == null) {
        return root.right;
      }
      // If right not found return left
      if (root.right == null) {
        return root.left;
      }
      // Find last left of deleting right
      var rightLeft = findLastLeft(root.right!);
      // Attach right left most to deleting root.left
      rightLeft.left = root.left;
      return root.right;
    } else if (root.val > key) {
      root.left = deleteNode(root.left, key);
    } else {
      root.right = deleteNode(root.right, key);
    }

    return root;
  }

  TreeNode findLastLeft(TreeNode root) {
    if (root.left == null) {
      return root;
    }
    return findLastLeft(root.left!);
  }
}
```