# [Dart] Iterative (Not Recursion) solution with LCA

**Author:** hyungzin
**Votes:** 0
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5485890/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5485890/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
#### I'm not sure how LeetCode has implemented the Dart engine, but when solving problems using recursion, I encounter stack overflow errors almost every time. Therefore, when solving these kinds of problems in Dart, although it's a bit cumbersome, it's better to utilize iterative approaches like BFS instead.

# Intuition
The key insight is to find the Lowest Common Ancestor (LCA) of the start and destination nodes, then construct the path from LCA to both nodes.

# Approach

1. Find the LCA of the start and destination nodes.
2. Get the path from LCA to start node and replace all directions with 'U'.
3. Get the path from LCA to destination node.
4. Concatenate these paths to get the final result.


# Complexity
- Time complexity: O(n)

- Space complexity: O(h)

# Code
```dart
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
  String getDirections(TreeNode? root, int sv, int dv) {
    // Find the Lowest Common Ancestor (LCA)
    final lca = getLca(root!, sv, dv);
    
    // Construct the path: upward path (to LCA) + downward path (from LCA)
    return getPath(lca!, sv).replaceAll(RegExp(r'[^/]'), 'U') + getPath(lca!, dv);
  }
  
  // BFS to find path from root to target
  String getPath(TreeNode root, int target) {
    String res = '';
    final q = Queue<(TreeNode, String)>()..add((root, ''));
    while (q.isNotEmpty) {
      final (node, path) = q.removeFirst();
      if (node.val == target) return path;
      if (node.left != null) {
        q.add((node.left!, path + 'L'));
      }
      if (node.right != null) {
        q.add((node.right!, path + 'R'));
      }
    }
    return '';
  }
  
  // Find Lowest Common Ancestor
  TreeNode? getLca(TreeNode? root, int sv, int dv) {
    if (root == null) return null;
    
    // Map to store parent of each node
    final parentMap = <int, TreeNode?>{};
    final q = Queue<TreeNode>();
    q.add(root);
    parentMap[root.val] = null;
    
    // BFS to traverse the tree and record parent nodes
    while (!q.isEmpty && (parentMap[sv] == null || parentMap[dv] == null)) {
      final node = q.removeFirst();
      
      if (node.left != null) {
        q.add(node.left!);
        parentMap[node.left!.val] = node;
      }
      if (node.right != null) {
        q.add(node.right!);
        parentMap[node.right!.val] = node;
      }
    }
    
    // Store ancestors of sv in a set
    final ancestors = Set<int>();
    var current = sv;
    while (parentMap[current] != null) {
      ancestors.add(current);
      current = parentMap[current]!.val;
    }
    ancestors.add(root.val);
    
    // Start from dv and find the first common ancestor
    current = dv;
    while (!ancestors.contains(current)) {
      current = parentMap[current]!.val;
    }
    
    // We've found the LCA, return the node
    if (root == null) return null;
    q..clear()
     ..add(root);
    while (!q.isEmpty) {
      final node = q.removeFirst();
      if (node.val == current) return node;
      if (node.left != null) q.add(node.left!);
      if (node.right != null) q.add(node.right!);
    }
    return null;
  }
}