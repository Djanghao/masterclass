# Simple with Go

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/2469565/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/2469565/)

---

```
func tree2str(root *TreeNode) string {
    if root == nil {
        return ""
    }
    
    left, right := "", ""
    
    if root.Left != nil {
        left = "(" + tree2str(root.Left) + ")"
    }
    
    if root.Right != nil {
        left = "(" + tree2str(root.Left) + ")"
        right = "(" + tree2str(root.Right) + ")"
    }
    
    return fmt.Sprintf("%v", root.Val) + left + right
}
```