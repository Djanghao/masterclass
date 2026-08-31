# In-order traversal

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5369075/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5369075/)

---

inorder traversal of a binary search tree gives you the node values in increasing order as you visit them from left to right via the root.

So the minimum difference must be between two consecutive terms in the resultant array. Return the minimum of those differences. 
######   Before doing this, I checked whether the node values are positive or not, I guess it still gives the correct answer even if there are negative values.

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    
    let min = Infinity;
    const visited = [];

    function dfs(node : TreeNode | null) : number {
        if(!node) return;

        dfs(node.left);

        visited.push(node.val);

        dfs(node.right);
    }

    dfs(root);

    for(let i = 1; i < visited.length; i++) {
        min = Math.min(min, visited[i] - visited[i-1]);
    }

    return min;
};
```