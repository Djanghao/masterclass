# Dart solution with recursion

**Author:** rafat_meraz
**Votes:** 0
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/6120108/](https://leetcode.com/problems/leaf-similar-trees/solutions/6120108/)

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
  bool leafSimilar(TreeNode? root1, TreeNode? root2) {
    List<int> root1Nodes = [];
    List<int> root2Nodes = [];
    leafNodes(root1, root1Nodes);
    leafNodes(root2, root2Nodes);
    return checkNodesEquality(root1Nodes, root2Nodes);
  }

  bool checkNodesEquality(List<int> l1, List<int> l2) {
    if (l1.length != l2.length) return false;
    for (int i=0; i<l1.length; i++)  {
        if (l1[i] != l2[i]) return false;
    }
    return true;
  }

  void leafNodes(TreeNode? root, List<int> list) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
        list.add(root.val);
        return;
    }
    leafNodes(root.left, list);
    leafNodes(root.right, list);
  }
}
```