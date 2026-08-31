# Simple JS solution beats 100%

**Author:** hemilpatel
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/5576795/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/5576795/)

---

# Intuition
Typical tree height algorithm with simple isLeaf check 
In this tree leaf node is one where current node's left node's right node is the current node

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

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
 * @return {number}
 */

function isLeaf(node) {
    //If both left and right nodes are null it is a leaf
    if (node.right === null && node.left === null) return true

    // if one of them is null, then its not the root
    if (!node.right || !node.left) return false

    //If left and right are not null, then if my left's right is me, then its a leaf 
    if (node.right.left === node) return true
}

var heightOfTree = function (root) {

    if (root == null) return 0;
    if (isLeaf(root)) return 0;

    return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right))

};



```