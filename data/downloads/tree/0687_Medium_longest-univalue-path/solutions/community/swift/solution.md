# Swift | DFS | Simple Solution

**Author:** zjiroun
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/4091546/](https://leetcode.com/problems/longest-univalue-path/solutions/4091546/)

---

```
class Solution {
    func longestUnivaluePath(_ root: TreeNode?) -> Int {
        var longestPath = 0
        func traverse(_ node: TreeNode?) -> Int {
            if node == nil { return 0 }

            let left = traverse(node?.left)
            let right = traverse(node?.right)

            let leftPathLength = (node?.left?.val == node?.val) ? left + 1 : 0
            let rightPathLength = (node?.right?.val == node?.val) ? right + 1 : 0

            longestPath = max(longestPath, leftPathLength + rightPathLength)
            return max(leftPathLength, rightPathLength)
        }

        traverse(root)
        return longestPath
    }
}
```