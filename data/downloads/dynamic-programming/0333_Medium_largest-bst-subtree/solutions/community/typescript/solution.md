# DFS Postorder - Clear readable code (Typescript)

**Author:** jbernier
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/5087194/](https://leetcode.com/problems/largest-bst-subtree/solutions/5087194/)

---

# Approach

Postorder Depth-First Search traversal

Was optimizing for code readability and understandability, not performance.

In our postorder DFS traversal we return a struct containing `min`, `max`, and `numNodes` which refers to the number of nodes in the current binary search tree (or 0 if it's not a binary search tree).

If the node is a binary search tree, then the # of nodes in the current binary search tree is `left.numNodes + right.numNodes + 1`.

Every time we have a binary search tree we update `maxNodes = Math.max(maxNodes, numNodes)`


# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

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

type NodeResult = {
    isNull?: boolean;
    numNodes: number;
    min: number;
    max: number;
    isBST: boolean;
}

function largestBSTSubtree(root: TreeNode | null): number {
    let maxNodes = 0;

    const dfs = (node: TreeNode | null): NodeResult => {
        if (node == null) return {isNull: true, numNodes: 0, min: Infinity, max: -Infinity, isBST: false};

        const left = dfs(node.left);
        const right = dfs(node.right);

        const isBST = (left.isNull || left.isBST && left.max < node.val)
            && (right.isNull || right.isBST && node.val < right.min );

        if (isBST) {
            const numNodes = 1 + (left.numNodes ?? 0) + (right.numNodes ?? 0);
            maxNodes = Math.max(maxNodes, numNodes);
            return {
                numNodes,
                min: !left.isNull ? left.min : node.val,
                max: !right.isNull ? right.max : node.val,
                isBST: true
            }
        }
        return {
            numNodes: 0,
            min: Infinity,
            max: -Infinity,
            isBST: false
        }
    }
    dfs(root);
    return maxNodes;
};
```