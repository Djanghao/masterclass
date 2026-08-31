# Intuitive Javascript Solution with Recursion

**Author:** DawChihLiou
**Votes:** 13
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/500857/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/500857/)

---

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (root === null) {
        return null;
    }
    if (root.val > R) {
        // skip and go left
        return trimBST(root.left, L, R);
    }
    if (root.val < L) {
        // skip and go right
        return trimBST(root.right, L, R);
    }
    // connect left and right child to the next qualified node
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;  
};
```