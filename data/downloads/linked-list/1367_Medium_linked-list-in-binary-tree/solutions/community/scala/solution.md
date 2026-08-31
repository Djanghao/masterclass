# Scala with nothing but recursion and if/else if statements

**Author:** VPuuska
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5749502/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5749502/)

---

# Intuition & Approach

Simply walk through the tree and check from each node if there is a downward path that has the same values as the linked list.

To check for the existence of such path, first check if the root values match. If they do, then recursively check if the left or right child has a downward path that matches the rest of the linked list.

# Code
```scala []
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isSubPath(head: ListNode, root: TreeNode): Boolean = {
        def rec(head: ListNode, root: TreeNode): Boolean = {
            if head == null then true
            else if root == null then false
            else if head.x != root.value then false
            else if rec(head.next, root.left) then true
            else rec(head.next, root.right)
        }
        if root == null then false
        else if rec(head, root) then true
        else if isSubPath(head, root.left) then true
        else if isSubPath(head, root.right) then true
        else false
    }
}
```