# Simple solution in Swift using DFS and Heap

**Author:** user8649vD
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/6078492/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/6078492/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Recursively traverse using DFS. Compare total nodes in each subtree.
# Approach
<!-- Describe your approach to solving the problem. -->
DFS and Heap. DFS to traverse, heap to keep track of max sum of nodes.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
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

import Collections

class Solution {

    var heap = Heap<Int>()

    func kthLargestPerfectSubtree(_ root: TreeNode?, _ k: Int) -> Int {

        _ = dfs(root)

        // If k is greater than total PBT found, return -1.
        if heap.count < k {
            return -1
        }

        // Return kth largest sum using heap.
        var kthSum: Int?
        for _ in 0..<k {
            kthSum = heap.popMax()
        }

        return kthSum ?? -1
    }

    // Returns total count if the subtree is PBT, else -1.
    func dfs(_ root: TreeNode?) -> Int {
        guard let root else { return 0 }

        let left = dfs(root.left)
        let right = dfs(root.right)

        // If a subtree returns -1, that means it isn't perfect binary tree.
        // If count of subtrees is same, return the total count.
        // Keep the count in a heap.
        if left != -1, left == right {
            let count = left + right + 1

            // Store the count in heap.
            heap.insert(count)
            return count
        } else {
            return -1
        }
    }
}
```