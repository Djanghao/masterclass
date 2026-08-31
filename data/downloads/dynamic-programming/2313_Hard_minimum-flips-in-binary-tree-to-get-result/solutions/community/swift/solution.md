# [Swift] DFS

**Author:** keitaito
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5584340/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5584340/)

---

Swift solution based on [this YouTube video](https://www.youtube.com/watch?v=rUtTL-XE7yw). Shout-out to Daniel for the great explanation.

# Code
```
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
    func minimumFlips(_ root: TreeNode?, _ result: Bool) -> Int {

        // Return how many minimum flip count is needed for false and true cases, 
        // from the evaluated node value, or the current node value if it is a leaf node.
        // Reference: https://www.youtube.com/watch?v=rUtTL-XE7yw
        func dfs(_ root: TreeNode?) -> (falseCount: Int, trueCount: Int) {
            guard let root else { return (0, 0) }

            let left = dfs(root.left)
            let right = dfs(root.right)

            switch root.val {
            case 0: // false
                // 0 flip to be false. 1 flip to be true.
                return (0, 1)
            case 1: // true
                // 1 flip to be false. 0 flip to be false.
                return (1, 0)
            case 2: // OR
                // false | false -> false
                let falseCount = left.falseCount + right.falseCount
                // false | true -> true
                // true | true -> true
                // true | false -> true
                let trueCount = min(left.falseCount + right.trueCount, left.trueCount + right.trueCount, left.trueCount + right.falseCount)
                return (falseCount, trueCount)
            case 3: // AND
                // false & false -> false
                // false & true -> false
                // true & false -> false
                let falseCount = min(left.falseCount + right.falseCount, left.falseCount + right.trueCount, left.trueCount + right.falseCount)
                // true & true -> true
                let trueCount = left.trueCount + right.trueCount
                return (falseCount, trueCount)
            case 4: // XOR
                // false ^ false -> false
                // true ^ true -> false
                let falseCount = min(left.falseCount + right.falseCount, left.trueCount + right.trueCount)
                // false ^ true -> true
                // true ^ false -> true
                let trueCount = min(left.falseCount + right.trueCount, left.trueCount + right.falseCount)
                return (falseCount, trueCount)
            case 5: // NOT
                // ~true -> false
                let falseCount = left.trueCount + right.trueCount
                // ~false -> true
                let trueCount = left.falseCount + right.falseCount
                return (falseCount, trueCount)
            default:
                fatalError("Invalid node value.")
            }
        }

        let minFlips = dfs(root)

        return result ? minFlips.trueCount : minFlips.falseCount 
    }
}
```