# Swift Solution, tree traversal

**Author:** alptekin35
**Votes:** 5
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/494607/](https://leetcode.com/problems/subtree-of-another-tree/solutions/494607/)

---

```
class Solution {
    func isSubtree(_ s: TreeNode?, _ t: TreeNode?) -> Bool {
        if s == nil { return false}
        return isSame(s, t) ||\xA0isSubtree(s?.left, t) || isSubtree(s?.right, t)
    }
    
    func isSame(_ s: TreeNode?, _ t: TreeNode?) -> Bool {
        if s == nil &&\xA0t == nil { return true}
        if s == nil ||\xA0t == nil { return false}
        return ((s?.val == t?.val) && isSame(s?.left, t?.left) && isSame(s?.right, t?.right))
    }
}
```