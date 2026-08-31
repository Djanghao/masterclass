# swift easy to understand

**Author:** shubham_kamdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/1819108/](https://leetcode.com/problems/equal-tree-partition/solutions/1819108/)

---

```
func checkEqualTree(_ root: TreeNode?) -> Bool {
       var stack : [Int] = []
       func computeTotal(_ root: TreeNode?) -> Int {
           if root == nil { return 0 }
           stack.append(computeTotal(root?.left) + computeTotal(root?.right) + root!.val)
           return stack[stack.count - 1]
       }
       let total = computeTotal(root)
       stack.removeLast()
       if total % 2 == 0 {
           for s in stack {
               if s == ( total / 2 ) { return true }
           }
       }
       return false
   }
```