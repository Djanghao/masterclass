# Well described TS approach

**Author:** noflex
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/4633082/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/4633082/)

---

# Intuition
When tasked with counting specific types of nodes in a binary tree, a natural approach is to traverse the tree and check each node against our criteria. In this case, we want to count nodes that are either leaves (no children) or "complete" (having two children or just a left child). A depth-first search (DFS) strategy is suitable for this task, as it allows us to visit each node and evaluate it individually, ensuring we count all qualifying nodes.



# Approach
The solution involves several key functions:

isLeaf: This function checks if a node is a leaf by seeing if it has no children.
isComplete: This function checks if a node is "complete" \u2013 either having both children or just a left child.
dfs: A recursive depth-first search function that traverses the tree. At each node, it checks if the node is a leaf or complete. If so, it counts the node; otherwise, it continues the traversal. The count of qualifying nodes is aggregated as the recursion unwinds.
The countNodes function initiates this process by calling dfs on the root node. It handles the edge case where the tree is empty by returning 0 immediately

# Complexity
- Time complexity:
The time complexity is ***O(n)***, where n is the number of nodes in the tree. This is because each node in the binary tree is visited exactly once during the depth-first search.

- Space complexity:
Space complexity:
The space complexity is also O(n) in the worst case, due to the recursion stack. In the worst-case scenario (a completely unbalanced tree), the depth of the recursion can grow linearly with the number of nodes.

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


/**
 * Checks if a node is a leaf (no children).
 * @param {TreeNode} node - The node to check.
 * @returns {boolean} - True if the node is a leaf, false otherwise.
 */
const isLeaf = (node: TreeNode): boolean => {
    return node.left === null && node.right === null;
};

/**
 * Checks if a node is complete (either has two children or only a left child).
 * @param {TreeNode} node - The node to check.
 * @returns {boolean} - True if the node is complete, false otherwise.
 */
const isComplete = (node: TreeNode): boolean => {
    return (node.left !== null && node.right !== null) || 
           (node.left !== null && node.right === null);
};

/**
 * Depth-first search to count the number of nodes that are either leaf or complete.
 * @param {TreeNode | null} node - The current node in the DFS.
 * @returns {number} - The count of qualifying nodes.
 */
const dfs = (node: TreeNode | null): number => {
    if (node === null) {
        return 0;
    }

    let count = isLeaf(node) || isComplete(node) ? 1 : 0;
    count += dfs(node.left);
    count += dfs(node.right);

    return count;
};

/**
 * Counts the number of nodes in a binary tree that are either leaves or complete.
 * @param {TreeNode | null} root - The root of the binary tree.
 * @returns {number} - The total count of such nodes.
 */
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return dfs(root);
}
```