# Find Duplicate Subtrees

**Author:** hchoudh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3241860/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3241860/)

---

# Intuition
Need to check whether the subtree at each node has been seen before. This requires us to come up with a representation of the tree that can easily be checked for equality - a string will do nicely.

# Approach
Write a helper function that traverses the tree in-order and returns the string representation of the subtree.

# Complexity
- Time complexity:
O(N) need to traverse all nodes in the tree once, assuming that the lookup of a hashmap is constant time.

- Space complexity:
O(N) need to store a string for each node of the tree.

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
  var found = <TreeNode?>[];
  var seen = <String,int>{};
  List<TreeNode?> findDuplicateSubtrees(TreeNode? root) {
    go(root);
    return found;
  }

  String go(root) {
    if (root == null) return "";
    var left = go(root!.left);
    var right = go(root!.right);
    String rep = "(" + left + ")" + root.val.toString() + "(" + right + ")";
    seen[rep] = ((seen[rep] != null) ? (seen[rep]! + 1) : 1);
    if (seen[rep] == 2) {
      found.add(root);
    }
    return rep;
  }
}
```