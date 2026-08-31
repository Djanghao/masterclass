# SWIFT | Beats 100% | Recursion - Simple solution

**Author:** gauravgupta1602
**Votes:** 2
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750296/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
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
    func isSubPath(_ head: ListNode?, _ root: TreeNode?) -> Bool {
        if checkSubPath(head, root) {
            return true
        }
        guard let root else { return false }
        return isSubPath(head, root.left) || isSubPath(head, root.right)
    }

    func checkSubPath(_ listNode: ListNode?, _ treeNode: TreeNode?) -> Bool {
        guard let listNode else { return true }
        guard let treeNode else { return false }

        if listNode.val != treeNode.val {
            return false
        }
        return checkSubPath(listNode.next, treeNode.left) || checkSubPath(listNode.next, treeNode.right)
    }
}
```