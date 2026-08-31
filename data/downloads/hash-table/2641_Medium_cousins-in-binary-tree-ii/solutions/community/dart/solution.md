# Very Clean BFS in DART

**Author:** Garlicman
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5956338/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5956338/)

---

# Intuition
create map of level and its sum using bfs
using dfs, go through parents and correct the child
using the sum of the lvl - left ?? 0 - right ?? 0
update the root as 0.

# Approach
update: but the intuition is expensive; an optimal way would be
to BFS and sum lvls and update the vals on the spot;
but do you then recreate the tree or is there a way to
modify the root in place? well if it passes via reference
let's check that.

# Complexity
- Time complexity:
O(N) (actually O(2N) cause we sum all levels and iterate again to update each value) 27ms beats 100%

- Space complexity:
O(N) (storing every node on every level) 258.24 mb beats 100%

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

  void bfs (var root) {
    List queue = [root];

    while (queue.isNotEmpty) {
        num ns = 0;
        List newLvL = [];
        for (var node in queue) {
            if (node.left != null) newLvL.add(node.left);
            if (node.right != null) newLvL.add(node.right);
            ns += (node.left != null ? node.left.val : 0) + (node.right != null ? node.right.val : 0);
        }

        for (var node in queue) {
            int lft = node.left != null ? node.left.val : 0;
            int rght = node.right != null ? node.right.val : 0;
            if (node.left != null)  node.left.val = ns - lft - rght;
            if (node.right != null) node.right.val = ns - lft - rght;
        }

        queue.clear();
        queue.addAll(newLvL);
    }
  }

  TreeNode? replaceValueInTree(TreeNode? root) {
    // create map of level and its sum using bfs
    // using dfs, go thru parents and correct the child
    // using the sum of the lvl - left ?? 0 - right ?? 0
    // update the root as 0.

    // update: but this is expensive; an optimal way would be
    // to BFS and sum lvls and update the vals on the spot;
    // but do you then recreate the tree or is there a way to
    // modify the root in place? well if it passes via reference
    // let's check that.

    bfs(root);
    if (root != null)   root.val = 0;

    return root;
  }
}
```