# go easy

**Author:** 61kg
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/2902719/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/2902719/)

---


# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func subtreeWithAllDeepest(root *TreeNode) *TreeNode {
    _,res:= getdeep(root)
    return res
}

func getdeep(root *TreeNode) (int,*TreeNode) {
    if root == nil {
        return 0, nil
    }
    ldp, l := getdeep(root.Left)
    rdp, r := getdeep(root.Right)
    if ldp == rdp {
        return rdp+1,root
    }
    if ldp > rdp {
        return ldp+1,l
    }
    return rdp+1,r
}
```