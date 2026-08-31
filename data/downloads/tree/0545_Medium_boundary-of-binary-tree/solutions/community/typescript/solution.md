# Typescript DFS solution

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/2755299/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/2755299/)

---

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

function boundaryOfBinaryTree(root: TreeNode | null): number[] {
    let result = [];
    let reversed = [];
    
    if (!root) {
        return result;
    }
    
    const sideDfs = (node: TreeNode | null, isLeftSide = true): boolean  => {
        if (!node) {
            return false;
        }
        
        if (!node.left && !node.right) {
            return true;
        }
    
        if (isLeftSide) {
            result.push(node.val); 
            return sideDfs(node.left) || sideDfs(node.right); 
        } else {
            reversed.unshift(node.val);  
            return sideDfs(node.right, false) || sideDfs(node.left, false);
        }

    }    
    
    const dfs = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        
        if (!node.left && !node.right) {
            result.push(node.val);    
            return;
        }
        
        dfs(node.left);
        dfs(node.right);
    }

    result.push(root.val);
    if (root.left || root.right) {
        sideDfs(root.left); // left
        dfs(root);
        sideDfs(root.right, false) // right 
    }
    
    return result.concat(reversed);
};
```