# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 25
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/499177/](https://leetcode.com/problems/merge-two-binary-trees/solutions/499177/)

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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    // goal is to merge t2 to t1
    
    // if one of the node missing, return the other
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }
    // if both nodes exist, sum the values
    t1.val += t2.val;
    
    // do the same thing for left and right branch
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    // return the merged t1
    return t1;
};
```