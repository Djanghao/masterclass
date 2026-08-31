# Swift - 12ms

**Author:** sege
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/1275278/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/1275278/)

---

```
class Solution {
    func distributeCoins(_ root: TreeNode?) -> Int {
        var result: Int = 0
        
        traverse(root, &result)
        
        return result
    }
    
    private func traverse(_ node: TreeNode?, _ result: inout Int) -> Int {
        guard let node = node else { return 0 }
        var left = traverse(node.left, &result)
        var right = traverse(node.right, &result)
        result += abs(left) + abs(right)
        return node.val + left + right - 1
    }
}
```