# Keep track of visited nodes, pop them off if their children are visited.

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/5366353/](https://leetcode.com/problems/binary-tree-paths/solutions/5366353/)

---

It is best practice to trace the algo and understanding for this one, you will understand recursion in general. Because I am performing operation both before and after calling recursions, so if you trace the order in which those operations happen, you will be able to write good recursions.

good practice is to print the results by performing such a recursion on an array/tree of your choice.
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

function binaryTreePaths(root: TreeNode | null): string[] {
    let path = [];
    let result = [];


    function traverse(node : TreeNode | null) {
        if(!node) return;

        if(!node.left && !node.right) {
            path.push(node.val);
            result.push(path.join('->'));
            path.pop();
            return;
        }

        path.push(node.val);
        traverse(node.left);
        traverse(node.right);
        path.pop();
    }

    traverse(root);

    return result;
};

```