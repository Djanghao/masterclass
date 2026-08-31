# Dart Solution

**Author:** lrazo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4232920/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4232920/)

---

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
  List<int> ans = [];
  TreeNode? prev;
  int c = 1, max = 0;

  List<int> findMode(TreeNode? root) {
    ans = [];
    sol(root);
    return ans;
  }

  void sol(TreeNode? root) {
    if (root == null) {
      return;
    }
    sol(root.left);
    if (prev != null) {
      if (root!.val == prev!.val) {
        c++;
      } else {
        c = 1;
      }
    }
    prev = TreeNode(root!.val);
    if (c > max) {
      max = c;
      ans.clear();
      ans.add(root.val);
    } else if (c == max) {
      ans.add(root.val);
    }
    sol(root.right);
  }
}

```