# Simple solution by using LCA and distance

**Author:** qhcthanh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5321156/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5321156/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Find lowest common ancestor of 2 node
2. Sum of distance between LCA to q and p

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    func findDistance(_ root: TreeNode?, _ p: Int, _ q: Int) -> Int {
        // common parent
        // from parent to p + q
        let comon = findLCA(root, p, q)
        let d1 = dist(comon, p, 0)
        let d2 = dist(comon, q, 0)
        // print(comon?.val, d1, d2)
        return d1 + d2
    }

    func dist(_ root: TreeNode?, _ val: Int, _ curr: Int = 0 ) -> Int {
        guard let root else { return 0 }
        if root.val == val { return curr }

        return max(dist(root.left, val, curr + 1), dist(root.right, val, curr + 1))
    }

    func findLCA(_ root: TreeNode?, _ p: Int, _ q: Int) -> TreeNode? {
        guard let root = root else { return nil }
        if root.val == p || root.val == q {
            return root
        }
        let leftLCA = findLCA(root.left, p, q)
        let rightLCA = findLCA(root.right, p, q)
        if leftLCA != nil && rightLCA != nil {
            return root
        } else {
            return leftLCA ?? rightLCA
        }
    }
}
```