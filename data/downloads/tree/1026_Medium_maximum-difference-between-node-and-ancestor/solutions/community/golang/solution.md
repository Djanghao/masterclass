# 🚀 | 100% beaten in golang | code only

**Author:** makarkananov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4548338/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4548338/)

---


# Golang Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxAncestorDiff(root *TreeNode) int {
    ans := 0
    curMx := root.Val
    curMn := root.Val
    dfs(root, curMx, curMn, &ans)

    return ans
}

func dfs(node *TreeNode, curMx int, curMn int, ans *int) {
    if node == nil {
        return
    }

    if node.Val < curMn {
        curMn = node.Val
    }
    if node.Val > curMx {
        curMx = node.Val
    }

    if *ans < abs(curMn - curMx) {
        *ans = abs(curMn - curMx)
    }

    dfs(node.Left, curMx, curMn, ans)
    dfs(node.Right, curMx, curMn, ans)
}

func abs(a int) int {
    if a < 0 {
        a *= -1
    }

    return a
}
```