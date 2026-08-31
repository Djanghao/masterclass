# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/4521202/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/4521202/)

---

Perform level order traversal on tree. The last element is the deepest node.

If the last element has a length of 1, we create a new `TreeNode`
with the value and return it. Since the **least common ancestor** (LCA) of one node is itself.

Otherwise we create two new `TreeNode`'s with the deepest nodes' value. From there we will find the **LCA** given the root and those two nodes.

For more detail on implementation see this:
[https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/]()

Now that we found the ancestor value, we will then need to find the subtree where the value is located. If the value is found, we just return the subtree.

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
class Solution {
    TreeNode? lcaDeepestLeaves(TreeNode? root) {
        final res = levelOrder(root);
        if (res.last.length == 1) {
            return TreeNode(res.last.first);
        }
        final p = res.last.first;
        final q = res.last.last;
        final ancestorValue = lowestCommonAncestor(root!, TreeNode(p), TreeNode(q));
        final subTree = getSubTree(root, ancestorValue);

        return subTree;
    }

    TreeNode? getSubTree(TreeNode? root, int target) {
        Queue<TreeNode> q = Queue();
        q.add(root!);
        while (q.isNotEmpty) {
            final node = q.removeFirst();
            if (node.val == target) {
                return node;
            }

            if (node.left != null) {
                q.add(node.left!);
            }

            if (node.right != null) {
                q.add(node.right!);
            }
        }

        return null;
    }

    int lowestCommonAncestor(TreeNode? root, TreeNode? p, TreeNode? q) {
        if (root == null) {
            return -1;
        }

        if (root.val == p!.val || root.val == q!.val) {
            return root.val;
        }

        final left = lowestCommonAncestor(root.left, p, q);
        final right = lowestCommonAncestor(root.right, p, q);

        if (left != -1 && right != -1) {
            return root.val;
        }

        return left == -1 ? right : left;
    }

    List<List<int>> levelOrder(TreeNode? root) {
        if (root == null) {
            return [];
        }

        Queue<TreeNode> q = Queue();
        q.add(root);
        final List<List<int>> res = [];
        while (q.isNotEmpty) {
            final size = q.length;
            final List<int> curLevel = [];
            for (int i = 0; i < size; i++) {
                final node = q.removeFirst();
                curLevel.add(node.val);
                if (node.left != null) {
                    q.add(node.left!);
                }
                if (node.right != null) {
                    q.add(node.right!);
                }
            }
            res.add(List.from(curLevel));
        }

        return res;
    }
}
```