# Solution in TypeScript 🏆💯✔

**Author:** ranganathv415
**Votes:** 1
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5485411/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5485411/)

---

# Intuition

To find the shortest path between two nodes in a binary tree and generate the step-by-step directions, we need to determine the path from the root to both nodes, identify their lowest common ancestor (LCA), and then generate the required directions based on these paths.

# Approach

1. **Path Finding**:
   - Create a function to find the path from the root to a given node. This function will return a list of directions ('L' or 'R') required to reach the node from the root.

2. **Lowest Common Ancestor (LCA)**:
   - Determine the LCA of the two nodes. The LCA is the deepest node that is an ancestor to both the start and destination nodes.

3. **Generate Directions**:
   - Once we have the paths from the root to both nodes, the directions to move from the start node to the LCA will involve going up (represented by 'U') the path length of the start node to the LCA.
   - Then, from the LCA, follow the path to the destination node directly using 'L' or 'R'.

# Complexity

- **Time Complexity**: ***O(n)***, where *n* is the number of nodes in the tree. We traverse the tree to find paths and the LCA.
- **Space Complexity**: ***O(h)***, where *h* is the height of the tree, due to the recursion stack and storing paths.

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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const startPath: string[] = [];
    const destPath: string[] = [];

    findPath(root, startValue, startPath);
    findPath(root, destValue, destPath);

    let i = 0;
    while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
        i++;
    }

    const stepsUp = 'U'.repeat(startPath.length - i);
    const stepsDown = destPath.slice(i).join('');

    return stepsUp + stepsDown;
}

function findPath(root: TreeNode | null, value: number, path: string[]): boolean {
    if (!root) return false;
    if (root.val === value) return true;

    path.push('L');
    if (findPath(root.left, value, path)) return true;
    path.pop();

    path.push('R');
    if (findPath(root.right, value, path)) return true;
    path.pop();

    return false;
};
```