# Swift | Make TreeNode Hashable

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/5358186/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/5358186/)

---

Note that if we didn't use memoization, the code would still pass based on the specific test cases used in this problem. But it would be O(n^2) runtime in the worst time, instead of O(n).

# Code
```
// Standard way to make an object Hashable based on identity.
extension TreeNode: Equatable, Hashable {
    public static func ==(_ left: TreeNode, _ right: TreeNode) -> Bool {
        return left === right
    }

    public func hash(into hasher: inout Hasher) {
        hasher.combine(ObjectIdentifier(self))
    }
}

class Solution {
    func subtreeWithAllDeepest(_ root: TreeNode?) -> TreeNode? {
        var depths = [TreeNode?: Int]()

        // Use memoization to compute depth.
        func depth(_ root: TreeNode?) -> Int {
            guard let root else { return 0 }
            if let d = depths[root] { return d }

            depths[root] = 1 + max(depth(root.left), depth(root.right))
            return depths[root]!
        }

        func findDeepest(_ root: TreeNode?) -> TreeNode? {
            let leftDepth = depth(root?.left)
            let rightDepth = depth(root?.right)

            if leftDepth == rightDepth { return root }
            return leftDepth > rightDepth ? findDeepest(root?.left) : findDeepest(root?.right)
        }

        return findDeepest(root)
    }
}
```