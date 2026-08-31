# [Dart] Straight Forward BFS && if Level is odd, reverse it

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3198235/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3198235/)

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
import 'dart:collection';

class Solution {
  TreeNode? reverseOddLevels(TreeNode? root) {
    Queue<TreeNode> q = Queue();
    q.add(root!);
    int level = 0;

    while (q.isNotEmpty) {
      int k = q.length;
      List<int> vals = [];
      for (var i = 0; i < k; i++) {
        var node = q.removeFirst();
        if (node.left != null) {
            q.add(node.left!);
            vals.add(node.left!.val);
        } 
        if (node.right != null) {
            q.add(node.right!);
            vals.add(node.right!.val);
        }  
      }
      level++;
      if (level % 2 != 0) {
        k = q.length;
        for (var i = 0; i < k; i++) {
          var x = q.removeFirst();
          x.val = vals[k - i - 1];
          q.add(x);
        }
      }
      
    }

    return root;
  }
}
```