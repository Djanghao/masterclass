# Javascript solution

**Author:** mmartire
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/385854/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/385854/)

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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let min = Number.MAX_VALUE;
    let prev = Number.MAX_VALUE;
    
    const getMin = function(node) {
        if (node == null) {
            return;
        }
        
        getMin(node.right);
        if (min > prev - node.val) {
            min = prev - node.val;
        }
        prev = node.val;
        getMin(node.left);
    }
    
    getMin(root);
    return min;
};