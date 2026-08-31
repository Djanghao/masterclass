# Golang | Inorder traversal

**Author:** tw13
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195302/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195302/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Golang implementation of solution from https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3070288/minimum-distance-between-bst-nodes/ 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDiffInBST(root *TreeNode) int {
    minDiff, preValue := math.MaxInt32, -1
    dfs(root, &minDiff, &preValue)
    return minDiff
}

func dfs(node *TreeNode, minDiff *int, preValue *int) {
    if node == nil {
        return 
    }

    dfs(node.Left, minDiff, preValue)

    if *preValue != -1 && node.Val - *preValue < *minDiff {
        *minDiff = node.Val - *preValue
    }
    *preValue = node.Val

    dfs(node.Right, minDiff, preValue)
}
```