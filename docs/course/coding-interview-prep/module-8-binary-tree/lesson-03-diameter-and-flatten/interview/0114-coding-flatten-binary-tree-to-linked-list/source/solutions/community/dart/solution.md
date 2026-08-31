# Very easy recursion solution with great explanation

**Author:** engmagedr
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/5965246/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/5965246/)

---

# Intuition
We need to flatten each sub tree and put it to the right of the parent node

# Approach
first i had flatten the left tree and take a ref for the last node on this tree then do the same to the right tree too and now put the right branch to the right of left branch and return the last right node if there is right branch or last left node if ther is left branch or the node it self if ther is no left or right branches so the parent can use it when it tree to add more trees 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```dart []
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
  TreeNode? flatten(TreeNode? root) {

    if(root == null) return null;

    final lastLeftNode = flatten(root.left);
    final lastRightNode = flatten(root.right);

    if(lastLeftNode != null ){
        lastLeftNode?.right = root.right;
        root.right = root.left;
        root.left = null;
    }

    return lastRightNode ?? lastLeftNode ?? root;
  }
}
```