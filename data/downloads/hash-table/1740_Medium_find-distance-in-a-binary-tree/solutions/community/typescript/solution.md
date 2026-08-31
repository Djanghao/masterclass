# DFS + LCA | Time: O(N) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5487857/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5487857/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
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

function findDistance(root: TreeNode | null, p: number, q: number): number {
    const pathA: boolean[] = [];
    const pathB: boolean[] = [];
    findAncestry(root, p, pathA);
    findAncestry(root, q, pathB);
    let lcaIndex = 0;
    const minLen = Math.min(pathA.length, pathB.length);
    while (lcaIndex < minLen && pathA[lcaIndex] == pathB[lcaIndex]) {
        ++lcaIndex;
    }
    return pathA.length + pathB.length - (lcaIndex << 1);
};

function findAncestry(node: TreeNode | null, target: number, edges: boolean[]): boolean {
    if (node == null) {
        return false;
    }
    if (node.val == target) {
        return true;
    }
    edges.push(false);
    if (findAncestry(node.left, target, edges)) {
        return true;
    }
    edges[edges.length - 1] = true;
    if (findAncestry(node.right, target, edges)) {
        return true;
    }
    edges.pop();
    return false;
}
```