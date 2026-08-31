# Kotlin solution

**Author:** prisci1la
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/4748160/](https://leetcode.com/problems/binary-tree-upside-down/solutions/4748160/)

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
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
    fun helper(root: TreeNode?): TreeNode? {
        if (root==null) return null
        if (root?.left==null&&root?.right==null) return root // leaf node

        // re-construct edges
        val left = helper(root?.left)
        left?.left = root?.right
        left?.right = root
        root?.left = null
        root?.right = null

        // still return root, which is now the right-most child in the subtree
        return root
    }
    fun upsideDownBinaryTree(root: TreeNode?): TreeNode? {
        // the left-most node is the new root
        var current = root
        while(current!=null&&current?.left!=null) {
            current = current?.left
        }
        val discard = helper(root)
        
        return current
    }
}
```