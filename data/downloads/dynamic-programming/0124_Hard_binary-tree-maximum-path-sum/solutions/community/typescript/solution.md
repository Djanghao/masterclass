# 💥 [EXPLAINED] Runtime beats 98.58%

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/5673954/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/5673954/)

---

# Intuition
Combine Paths: Each node\u2019s maximum path sum includes its value plus the best of its left and right children.

Global Maximum: Track the highest path sum across all nodes.

# Approach
DFS Traversal: Recursively calculate the maximum path sum for each node.

Update Maximum: Track and update the maximum path sum that includes the node and its subtrees.

# Complexity
- Time complexity:
O(n) - Each node is visited once.

- Space complexity:
O(h) - Where h is the height of the tree, due to recursion stack.

# Code
```typescript []
function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const leftMax = Math.max(dfs(node.left), 0);
        const rightMax = Math.max(dfs(node.right), 0);
        
        const currentSum = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, currentSum);
        
        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return maxSum;
}

```