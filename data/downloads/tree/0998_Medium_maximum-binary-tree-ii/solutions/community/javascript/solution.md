# Easy js solution

**Author:** Sirojiddin12
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4988107/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4988107/)

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
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
    function dfs(node) {
        if (val > 0 && (!node || val > node.val)) {
            let temp = val;
            val = 0; 
            return new TreeNode(temp, node, null)
        }
        if(!node) return null;
       // if (node.right && val < node.right.val)
            node.right = dfs(node.right);
        //if (node.left && val < node.left.val)
            node.left = dfs(node.left);
        return node;
    }
    return dfs(root);
};
```