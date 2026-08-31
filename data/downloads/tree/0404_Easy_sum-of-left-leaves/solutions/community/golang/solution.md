# [golang] preorder, 0ms, recursive

**Author:** catamoose50
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/1558923/](https://leetcode.com/problems/sum-of-left-leaves/solutions/1558923/)

---

Here I use property `isLeft` and when I meet leaf and that property the same time I can increase a sum.
```
func sumOfLeftLeaves(root *TreeNode) int {
    return _sumOfLeftLeaves(root, false)
}

func _sumOfLeftLeaves(n *TreeNode, isLeft bool) int {
    if n == nil {
        return 0
    }
    ret := 0
    if isLeft && n.Left == nil && n.Right == nil {
        ret += n.Val
    }
    ret += _sumOfLeftLeaves(n.Left, true)
    ret += _sumOfLeftLeaves(n.Right, false)
    return ret
}
```