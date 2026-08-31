# Go: bottom up solution

**Author:** 16yuki0702
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/572560/](https://leetcode.com/problems/binary-tree-tilt/solutions/572560/)

---

Runtime: 8 ms, faster than 94.74% of Go online submissions for Binary Tree Tilt.
Memory Usage: 6 MB, less than 100.00% of Go online submissions for Binary Tree Tilt.
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findTilt(root *TreeNode) int {
    _, res := tilt(root)
    return res
}

func tilt(root *TreeNode) (int,int) {
    if root == nil {
        return 0, 0
    }
    left, s1 := tilt(root.Left)
    right, s2 := tilt(root.Right)
    return (root.Val+left+right), (abs(left-right)+s1+s2)
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```