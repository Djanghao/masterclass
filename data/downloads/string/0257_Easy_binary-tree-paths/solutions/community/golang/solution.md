# [GO] Recursion solution

**Author:** harotobira
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/556028/](https://leetcode.com/problems/binary-tree-paths/solutions/556028/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Binary Tree Paths.
Memory Usage: 2.3 MB, less than 100.00% of Go online submissions for Binary Tree Paths.
```
var arrow string = "->"

func binaryTreePaths(root *TreeNode) []string {
    ans := make([]string, 0)
    
    paths(root, "", &ans)
    
    return ans
}

func paths(root *TreeNode, prefix string, ans *[]string) {
    if root == nil {
        return
    }
    
    if len(prefix) == 0 {
        prefix += strconv.Itoa(root.Val)
    } else {
        prefix += "->" + strconv.Itoa(root.Val)
    }
    
    if root.Left == nil && root.Right == nil {
        *ans = append(*ans, prefix)
        return
    }
    
    paths(root.Left, prefix, ans)
    paths(root.Right, prefix, ans)
}
```