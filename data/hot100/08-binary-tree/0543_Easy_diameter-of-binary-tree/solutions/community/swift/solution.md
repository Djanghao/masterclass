# Swift || Left + Right || Easy to Understand

**Author:** navsarma
**Votes:** 3
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/2473192/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/2473192/)

---

```
// similar to height of tree

class Solution {
    func diameterOfBinaryTree(_ root: TreeNode?) -> Int {
        var mx = 0
        
        func help(_ node: TreeNode?) -> Int {
            
            if node == nil { return 0 }
            
            let left = help(node?.left)
            let right = help(node?.right)
            
            mx = max(mx, left + right)  //  just track left + right max
            
            return max(left, right) + 1
        }
        
        
        help(root)        
        return mx
    }
}
```