# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/4330328/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/4330328/)

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
    final List<int> arr = [];
    TreeNode? balanceBST(TreeNode? root) {
        inOrder(root!);
        return convertToBST(0, arr.length - 1);
    }

    void inOrder(TreeNode? root) {
        if (root == null) {
            return;
        }
        
        inOrder(root.left);
        arr.add(root.val);
        inOrder(root.right);
    }

    TreeNode? convertToBST(int start, int end) {
        if (start > end) {
            return null;
        }
        final mid = (start + end) ~/ 2;
        TreeNode root = TreeNode(arr[mid]);
        root.left = convertToBST(start, mid - 1);
        root.right = convertToBST(mid + 1, end);
        return root;
    }
}
```