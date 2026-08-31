# [Dart] Well explained & clean code

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3092362/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3092362/)

---

# Intuition
Set indexes on each node, for this code I used 1 based indexing
1, 2, 3,.....
After set the indexes on each level, get the diff from last index - first index + 1, kind of finding length, last - first + 1, and take the maximum.
2*index is for left nodes numbering, and 2*index +1 is for right nodes numbering.

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

class Pair<T, E> {
  final T first;
  final E second;

  Pair(this.first, this.second);
}

class Solution {
  int widthOfBinaryTree(TreeNode? root) {
    Queue<Pair<TreeNode, int>> queue = Queue();
    queue.add(Pair(root!, 1));
    int maxi = 0;
    while (queue.isNotEmpty) {
      int k = queue.length;
      int first = 0, last = 0;
      for (var i = 0; i < k; i++) {
        var p = queue.removeFirst();
        var node = p.first;
        var index = p.second;
        if (node.left != null) queue.add(Pair(node.left!, 2 * index));
        if (node.right != null) queue.add(Pair(node.right!, (2 * index) + 1));
        if (i == 0) first = index;
        if (i == k - 1) last = index;
      }
      maxi = max(maxi, last - first + 1);
    }
    return maxi;
  }
}
```