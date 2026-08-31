# GoLang Iterative O(1) space

**Author:** leetcodesujitraman
**Votes:** 3
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/1258058/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/1258058/)

---

```
func inorderSuccessor(root *TreeNode, p *TreeNode) *TreeNode {
    var succ *TreeNode
    for root != nil {
        if p.Val < root.Val {
            succ = root
            root = root.Left
        } else {
            root = root.Right
        }
    }
    return succ
}
```