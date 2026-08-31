# Beats 100.00%

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/5793591/](https://leetcode.com/problems/maximum-binary-tree/solutions/5793591/)

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
  TreeNode? constructMaximumBinaryTree(List<int> nums) {
    if(nums.isEmpty)return null;
    int l=0;
    for(int i=1;i<nums.length;i++){
        if(nums[i]>nums[l]){
            l=i;
        }
    }
    TreeNode node=TreeNode(nums[l]);
    node.left=constructMaximumBinaryTree(nums.sublist(0,l));
    node.right=constructMaximumBinaryTree(nums.sublist(l+1));
    return node;
  }
}
```