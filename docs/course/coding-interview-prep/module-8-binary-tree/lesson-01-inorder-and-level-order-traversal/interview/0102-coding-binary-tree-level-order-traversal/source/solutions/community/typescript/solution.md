# DFS super simple faster than 92%

**Author:** roeedis8
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/4176806/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/4176806/)

---

# Intuition
First thought when looking at tree levels is using BFS, but in this case there is no benefit to doing so since we don't care about the order, we just want a result with all the elements of every level. Moreover, doing so with BFS will complicate things because we need to indicate we reached the end of a level

# Approach
With simple DFS, create a util function that take a level argument and every recursive call incremenets it by one. Adding to the result by level index and if an array doesn't exist for that level, create it and assign the current node to it.

# Complexity
- Time complexity:
O(n) since we visit every element of the tree once

- Space complexity:
O(n) since we create an array with the same size of the original tree even though it's modeled as a two dimensional array

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

function levelOrder(root: TreeNode | null): number[][] {
    var response = []

    const util = (root: TreeNode | null, level: number) => {
        if(root == null) return

        if(response[level]) {
            response[level].push(root.val)
        } else {
            response[level] = [root.val]
        }
        
        util(root.left, level + 1)
        util(root.right, level + 1)
    }

    util(root, 0)
    return response
};
```