# Performatic code beating 100% - O(log n)

**Author:** vitorbrangioni
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/6092405/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/6092405/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
<!-- Describe your approach to solving the problem. -->

Use binary search to cross less nodes, just the possible values. For each node, calculate the subtraction of its value and the target and return the node value if it's less than the previous result. For each result (left and right), it'll always return the closest node value to the target.


![Screen Shot 2024-11-28 at 16.40.39.png](./images/0.png)

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`NOTE: just in the worst case it'll be O(n)`

- Space complexity:  O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`NOTE: just in the worst case it'll be O(n)`

# Code
```typescript []
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

function closestValue(node: TreeNode | null, target: number): number {
    if (!node) {
        return Infinity;
    }
    const result = Math.abs(node.val - target);

    const previousResult = (target < node.val) ? closestValue(node.left, target) : closestValue(node.right, target);
    const previousResultCalulated = Math.abs(previousResult - target);

    if (result === previousResultCalulated) {
        return Math.min(node.val, previousResult);
    }

    return (result <= previousResultCalulated) ? node.val : previousResult;
};
```