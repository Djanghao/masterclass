# Swift solution - Divide and Conquer

**Author:** cl0ud_runner
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/61976/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/61976/)

---

```
class Solution {
    func countNodes(_ root: TreeNode?) -> Int {
        guard let root = root else {
            return 0
        }
        
        let leftDepth = treeDepth(root, true)
        let rightDepth = treeDepth(root, false)
        
        if leftDepth == rightDepth {
            return (1 << leftDepth) - 1 // 2^n - 1
        }
        
        return countNodes(root.left) + countNodes(root.right) + 1
    }
    
    func treeDepth(_ root: TreeNode?, _ isLeft: Bool) -> Int {
        var root = root
        var depth = 0
        
        while root != nil {
            root = isLeft ? root?.left : root?.right
            depth += 1
        }
        
        return depth
    }
}
```