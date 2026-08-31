# Divide and conquer

**Author:** memento_vivere
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4726411/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4726411/)

---

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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    const preDivider = postorder[postorder.length - 2];
    const postDivider = preorder[1];
    const preIndexDivider = preorder.findIndex(num => num === preDivider);
    const postIndexDivider = postorder.findIndex(num => num === postDivider);

    if (preorder.length === 1) return new TreeNode(preorder[0]);

    if (preDivider === postDivider) {
        return new TreeNode(
            preorder[0],
            constructFromPrePost(
                preorder.slice(1),
                postorder.slice(0, postorder.length - 1)
            ),
            null
        ); 
    }

    return new TreeNode(
        preorder[0],
        constructFromPrePost(
            preorder.slice(1, preIndexDivider),
            postorder.slice(0, postIndexDivider + 1)
        ),
        constructFromPrePost(
            preorder.slice(preIndexDivider),
            postorder.slice(postIndexDivider + 1, postorder.length - 1)
        )
    );
};
```