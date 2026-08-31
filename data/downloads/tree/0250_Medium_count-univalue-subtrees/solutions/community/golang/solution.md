# Go (Golang) faster than 100% && less memory than 100%

**Author:** mv3
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/1087669/](https://leetcode.com/problems/count-univalue-subtrees/solutions/1087669/)

---

use a pointer passed through recursive calls

```
func countUnivalSubtrees(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    count := 0
    helper(root, root.Val, &count)
    return count
}

func helper(root *TreeNode, val int, count *int) bool {
    if root == nil {
        return true
    }
    
    left := helper(root.Left, root.Val, count)
    right := helper(root.Right, root.Val, count)
    
    if !left || !right {
        return false
    }
    
    (*count)++
    
    return root.Val == val
}
```