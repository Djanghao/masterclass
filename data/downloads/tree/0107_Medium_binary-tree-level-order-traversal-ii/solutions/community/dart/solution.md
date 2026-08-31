# BFS Approach

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/5559811/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/5559811/)

---

# Complexity
- Time complexity: O(v)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(v)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

typedef NodeAndLevel = (TreeNode node, int level);

class Solution {
  List<List<int>> levelOrderBottom(TreeNode? root) {
    if (root == null) return [];

    final queue = ListQueue<NodeAndLevel>();
    final levels = <List<int>>[];

    queue.add((root, 0));

    while (queue.isNotEmpty) {
      final (node, level) = queue.removeFirst();

      if (node.left != null) queue.add((node.left!, level + 1));
      if (node.right != null) queue.add((node.right!, level + 1));  

      // Insert an empty list at the beginging to store a new level's values
      if (level >= levels.length) levels.insert(0, []);

      levels[levels.length - level - 1].add(node.val);
    }

    return levels;
  }
}
```