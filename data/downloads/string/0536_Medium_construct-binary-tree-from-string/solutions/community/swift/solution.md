# Simple Recursive Parsing

**Author:** horchliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5982981/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5982981/)

---

# Code
```swift []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func str2tree(_ s: String) -> TreeNode? {
        guard !s.isEmpty else { return nil }
        var s = Array(s), index = 0
        func parseNodes() -> TreeNode? {
            var curNum = 0
            var root: TreeNode? = nil
            var left: TreeNode? = nil
            var right: TreeNode? = nil
            var isNeg = false
            if s[index] == "-" { isNeg = true; index += 1 }
            while index < s.count, let num = Int(String(s[index])) {
                curNum = curNum*10 + num
                index += 1
            }

            if index < s.count, s[index] == "(" {
                index += 1
                left = parseNodes()
                index += 1
            }

            if index < s.count, s[index] == "(" {
                index += 1
                right = parseNodes()
                index += 1
            }

            return TreeNode(isNeg ? -curNum : curNum, left, right)
        }

        return parseNodes()
    }
}
```