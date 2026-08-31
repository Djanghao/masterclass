# Binary Search Solution

**Author:** stazcp
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/6101965/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/6101965/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are going to use Binary Search here, we also decided to flatten the tree since the tree structure is only slowing down the performance and an array will be faster.
# Approach
<!-- Describe your approach to solving the problem. -->
1. flatten the tree into an array
2. perform binary search and narrow the search to the conditions
3. map over the queries and solve each query with bs
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. flattening the tree is O(n)
2. BS is O(log n) for m queries -> O(m log n)
total: O(n+m log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1. flattening the tree is O(n)
2. Call Stack for tree traversal is O(h), h is tree height.
    - for a balanced tree: h = O(log n)
    - for a unbalanced tree: h = O(n)
Total: O(n)
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

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    const flatTree = []

    const inOrder = (node) => {
        if (!node) return
        inOrder(node.left)
        flatTree.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)

    const bs = (q) => {
        // indices to search in the array
        let left = 0, right = flatTree.length - 1
        // default values for min and max if not found
        let min = -1, max = -1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (q === flatTree[mid]) return [q, q]
            // if value is smaller than q we can only assign to min
            if (flatTree[mid] < q) {
                min = flatTree[mid]
                // move search window to the right to see if we can get a higher min
                left = mid + 1
            } else {
                max = flatTree[mid]
                right = mid - 1
            }
        }
        return [min, max]
    }

    return queries.map((q) => bs(q))
};
```