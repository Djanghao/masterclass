# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/4573545/](https://leetcode.com/problems/house-robber-iii/solutions/4573545/)

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
    Map<TreeNode, int> m = {};
    int rob(TreeNode? root) {
        if (root == null) {
            return 0;
        }

        if (m.containsKey(root)) {
            return m[root]!;
        }

        var val = 0;

        if (root.left != null) {
            val += rob(root.left?.left) + rob(root.left?.right);
        }

        if (root.right != null) {
            val += rob(root.right?.left) + rob(root.right?.right);
        }

        val = max(val + root.val, rob(root.left) + rob(root.right));
        m[root] = val;

        return val;
    }
}
```