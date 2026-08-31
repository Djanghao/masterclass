# [Dart] BFS, modified Level Order answer

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3070918/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3070918/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

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
import 'dart:collection';

class Solution {
  List<List<int>> zigzagLevelOrder(TreeNode? root) {
    if (root == null) return [];
    List<List<int>> res = [];
    Queue<TreeNode> queue = Queue();
    queue.add(root);
    bool leftToRight = true;
    while (queue.isNotEmpty) {
      int k = queue.length;
      List<int> ds = List.filled(k, 0);
      for (var i = 0; i < k; i++) {
        var node = queue.removeLast();
        if (node.left != null) queue.addFirst(node.left!);
        if (node.right != null) queue.addFirst(node.right!);

        int index = leftToRight ? i : k - i - 1;
        ds[index] = node.val;
      }
      leftToRight = !leftToRight;
      res.add(ds);
    }
    return res;
  }
}
```