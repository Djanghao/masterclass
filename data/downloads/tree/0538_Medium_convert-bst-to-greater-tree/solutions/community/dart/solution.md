# simple dimple (with recursion)

**Author:** sayedadinan
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/4832819/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/4832819/)

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
    int store=0;
  TreeNode? convertBST(TreeNode? root) {
     if(root==null)return null;
    helperfun(root);
    return root;
  }
    helperfun(TreeNode? root){
        if(root==null){
            return null;
        }
        helperfun(root.right);
        int current=root.val;
        root.val+=store;
        store+=current;
        helperfun(root.left);
    }
  }
```