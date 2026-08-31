# GO | Recursion | Count nodes | Beats 100%

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/4781105/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/4781105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
func btreeGameWinningMove(root *TreeNode, n int, x int) bool {
    redNode := findX(root, x)
    redLeftChildNodes, redRightChildNodes, redTotalNodes := countNodes(redNode)
    redParentNodes := n - redTotalNodes
    blueTotalNodes := max(redParentNodes, max(redLeftChildNodes, redRightChildNodes))
    if blueTotalNodes > n/2 {
        return true
    }
    return false
}

func findX(root *TreeNode, x int) *TreeNode {
    if root == nil {
        return nil
    }
    if root.Val == x {
        return root
    }
    if result := findX(root.Left, x); result != nil {
        return result
    }
    return findX(root.Right, x)
}

func countNodes(root * TreeNode) (leftChildNodes, rightChildNodes, totalNodes int) {
    if root == nil {
        return
    }
    _, _, leftChildNodes = countNodes(root.Left)
    _, _, rightChildNodes = countNodes(root.Right)
    totalNodes = 1 + leftChildNodes + rightChildNodes
    return
}

func max(x, y int) int { if x > y{ return x}; return y}
```