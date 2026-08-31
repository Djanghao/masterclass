# Recursive approach

**Author:** vinayyadav1773
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/3636576/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/3636576/)

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
  TreeNode? sortedArrayToBST(List<int> nums) {
   if(nums.isEmpty) return null;

   int mid = nums.length ~/ 2;
   TreeNode root = TreeNode();
   root.val = nums[mid];
   root.left = sortedArrayToBST(nums.sublist(0,mid));
   root.right = sortedArrayToBST(nums.sublist(mid + 1));
   return root;
  }
}
```