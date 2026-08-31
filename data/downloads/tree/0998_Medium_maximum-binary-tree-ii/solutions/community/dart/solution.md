# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4531074/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4531074/)

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
    final List<int> ans = [];
    TreeNode? insertIntoMaxTree(TreeNode? root, int val) {
        inOrder(root!);
        ans.add(val);
        return constructBinaryTree(ans);
    }

    void inOrder(TreeNode? root) {
        if (root != null) {
            inOrder(root.left);
            ans.add(root.val);
            inOrder(root.right);
        }
    }

    TreeNode? constructBinaryTree(List<int> nums) {
        if (nums.isEmpty) {
            return null;
        }

        final maxi = nums.reduce(max);
        final idx = nums.indexOf(maxi);
        final node = TreeNode(maxi);
        node.left = constructBinaryTree(nums.sublist(0, idx));
        node.right = constructBinaryTree(nums.sublist(idx + 1));
        return node;
    }
}
```