# Golang iterative solution 3ms

**Author:** rtom09
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/49426/](https://leetcode.com/problems/binary-tree-upside-down/solutions/49426/)

---

```
func upsideDownBinaryTree(root *TreeNode) *TreeNode {
    curr := root
    var next *TreeNode
    var temp *TreeNode
    var prev *TreeNode
    
    for curr != nil {
        next = curr.Left
        
        curr.Left = temp
        temp = curr.Right
        curr.Right = prev
        
        prev = curr
        curr = next
    }
    return prev
}
```