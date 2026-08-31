# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4240514/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4240514/)

---


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
    @discardableResult
    private func postorder(_ root: TreeNode?, _ result: inout Int) -> (Int, Int) {
        guard let root = root else { return (.zero, .zero) }

        let leftSubtree = postorder(root.left, &result)
        let rightSubtree = postorder(root.right, &result)

        let sum = leftSubtree.0 + rightSubtree.0 + root.val
        let count = leftSubtree.1 + rightSubtree.1 + 1

        if sum / count == root.val {
            result += 1
        }

        return (sum, count)
    }

    func averageOfSubtree(_ root: TreeNode?) -> Int {
        var result = 0
        postorder(root, &result)
        return result
    }
}
```