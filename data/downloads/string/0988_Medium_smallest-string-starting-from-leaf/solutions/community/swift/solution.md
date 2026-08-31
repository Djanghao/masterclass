# ✅ [Solution][Swift] DFS

**Author:** adanilyak
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036781/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036781/)

---

**TC:** $$O(n)$$
**SC:** $$O(n)$$
```
class Solution {
    func smallestFromLeaf(_ root: TreeNode?) -> String {
        func intToC(_ i: Int) -> Character {
            Character(Unicode.Scalar(Character("a").asciiValue! + UInt8(i)))
        }

        func dfs(_ node: TreeNode, _ current: inout String, _ result: inout String) {
            if node.left == nil, node.right == nil {
                if result.isEmpty {
                    result = String(current.reversed())
                } else {
                    result = min(result, String(current.reversed()))
                }
                return
            }

            if let left = node.left {
                current.append(intToC(left.val))
                dfs(left, &current, &result)
                current.removeLast()
            }

            if let right = node.right {
                current.append(intToC(right.val))
                dfs(right, &current, &result)
                current.removeLast()
            }
        }

        guard let root else { return "" }
        var current = String(intToC(root.val)), result = ""
        dfs(root, &current, &result)
        return String(result)
    }
}
```