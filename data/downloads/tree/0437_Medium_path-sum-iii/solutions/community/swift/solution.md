# Swift - Prefix Sum + Pre-order Traversal - Beats 100%

**Author:** ingax
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/3762288/](https://leetcode.com/problems/path-sum-iii/solutions/3762288/)

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
    func pathSum(_ root: TreeNode?, _ targetSum: Int) -> Int {
        var count = 0
        var prefixSums: [Int: Int] = [:]
        var prefixSum = 0

        func preOrderTraversal(_ root: TreeNode?, _ prefixSum: inout Int, _ prefixSums: inout [Int: Int]) {
            guard let root = root else { return }

            prefixSum += root.val

            count += prefixSum == targetSum ? 1 : 0
            count += prefixSums[prefixSum - targetSum] ?? 0

            prefixSums[prefixSum, default: 0] += 1

            preOrderTraversal(root.left, &prefixSum, &prefixSums)
            preOrderTraversal(root.right, &prefixSum, &prefixSums)

            prefixSums[prefixSum, default: 0] -= 1
            prefixSum -= root.val
        }

        preOrderTraversal(root, &prefixSum, &prefixSums)

        return count
    }
}
```