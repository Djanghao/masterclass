# Simple recursion

**Author:** bulakhov
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3119459/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3119459/)

---

# Intuition
Must control sum and maybe try to use recursion.

# Approach
"sum strictly less than limit" for every leaf means (if val[0]...val[n] - nodes at the path)
val[0]...val[n]<limit or
val[0]...val[n] - limit < 0 or
limit - val[0]...val[n] > 0
So we can traverse tree each time substructing value of node from limit. If we found a leaf with limit>0 then we don't need that leaf (we return nil).
Other nodes just check if childs return nil. If it's all nil - every path is insufficient - we return nil again.

# Code
```
func sufficientSubset(root *TreeNode, limit int) *TreeNode {
    if root == nil {
        return nil
    }
    limit -= root.Val
    if root.Left == nil && root.Right == nil {
        if limit>0 {
            return nil
        }
        return root
    }
    root.Left = sufficientSubset(root.Left, limit)
    root.Right = sufficientSubset(root.Right, limit)
    if root.Left == nil && root.Right == nil {
        return nil
    }
    return root
}
```