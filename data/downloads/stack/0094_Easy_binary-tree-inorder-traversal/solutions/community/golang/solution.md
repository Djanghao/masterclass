# (Golang, recursive, 100% faster, 0 ms)

**Author:** palash287gupta
**Votes:** 16
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2294202/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2294202/)

---

```
func inorderTraversal(root *TreeNode) []int {
    var nums = []int{}
    if root == nil {
        return nums
    }
    
    nums = append(nums, inorderTraversal(root.Left)...)
    nums = append(nums, root.Val)
    nums = append(nums, inorderTraversal(root.Right)...)
    return nums
}
Please upvote if you like
```