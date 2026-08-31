# [Golang] Using closure to do postorder traverse. Time: O(N)

**Author:** lacfo
**Votes:** 8
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/1381102/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/1381102/)

---

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
    //post order traverse
    // for each recursion we want to get what is the largest number of nodes single sided
    res := 0
    var postorder func(*TreeNode) int
    postorder = func(node *TreeNode) int {
        if node == nil {
            return 0
        }
        left := postorder(node.Left)
        right := postorder(node.Right)
        if left + right > res {
            res = left + right
        }
        if left > right {
            return left+1
        } else {
            return right+1
        }
    }
    postorder(root)
    return res
}
```