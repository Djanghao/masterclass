# Dart || DFS (Recursion) || 2 line logic

**Author:** CodeSagePath
**Votes:** 6
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5420983/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5420983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves checking whether two binary trees can be made identical by performing flip operations, where you can swap any node's left and right subtrees. The approach revolves around recursive comparisons of nodes and their subtrees in both their original order and in a flipped order.



# Approach
<!-- Describe your approach to solving the problem. -->
- Base Case:

    If both root1 and root2 are null, they are flip equivalent (true).

    If only one of them is null or their values differ, they are not flip equivalent (false).

-   Recursive Checks:

    Without Flipping: Recursively check if root1.left matches root2.left and root1.right matches root2.right.

    With Flipping: Recursively check if root1.left matches root2.right and root1.right matches root2.left.

- Return Condition:

    Return true if either recursive check (with or without flipping) returns true.
    Return false if none of the checks satisfy the conditions.

# Complexity
- Time complexity: \uD835\uDC42(\uD835\uDC5B), where \uD835\uDC5B is the number of nodes in the smaller tree. Each node is visited exactly once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h), where \u210E is the height of the tree due to the recursive calls on the call stack.
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
  bool flipEquiv(TreeNode? root1, TreeNode? root2) {
    if (root1 == null && root2 == null) {
      return true;
    }

    if (root1 == null || root2 == null || root1.val != root2.val) {
      return false;
    }

    // check without flipping
    bool withoutFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);

    // check with flipping
    bool withFlip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return withFlip || withoutFlip;
  }
}
```