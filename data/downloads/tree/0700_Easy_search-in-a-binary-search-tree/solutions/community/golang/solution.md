# 100%  golang solution

**Author:** pranalijalgam
**Votes:** 4
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/263927/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/263927/)

---

```
func searchBST(root *TreeNode, val int) *TreeNode {
    if root==nil {
        return nil
    }
    if val==root.Val {
        return root
    } else if val > root.Val {
        return searchBST(root.Right,val)
    } 
    return searchBST(root.Left,val)
}