# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4201302/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4201302/)

---

# Code
```
import 'dart:collection';
import 'dart:math';
class Solution {
  List<int> largestValues(TreeNode? root) {
    List<int> res = [];
    if (root == null) return res;
    final q = Queue<TreeNode>();
    q.addLast(root);
    for (int level = 0; q.isNotEmpty; level++) {
      int tmp = -1e18.toInt();
      for (int b = q.length; b > 0; b--) {
        final now = q.removeFirst();
        tmp = max(tmp, now.val);
        if (now.left != null) q.addLast(now.left!);
        if (now.right != null) q.addLast(now.right!);
      }
      res.add(tmp);
    }
    return res;
  }
}
```