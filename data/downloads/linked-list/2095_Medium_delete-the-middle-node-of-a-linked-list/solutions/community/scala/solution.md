# [Scala] - simple tailrec solution

**Author:** myeyeswereclosed
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3796403/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3796403/)

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
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def deleteMiddle(head: ListNode): ListNode = {
        @annotation.tailrec
        def listLength(node: ListNode, acc: Int): Int = 
            node match {
                case null => acc
                case _ => listLength(node.next, acc+1)
            }

        @annotation.tailrec
        def deleteAtIndex(curIndex: Int, targetIndex: Int, node: ListNode): Unit = 
            node match {
                case null => ()
                case n if n.next == null => ()
                case n if curIndex == targetIndex => n.next = n.next.next
                case _ => deleteAtIndex(curIndex+1, targetIndex, node.next) 
            }

        val length = listLength(head, 0)

        Option.when(length == 1)(null).getOrElse{
            deleteAtIndex(0, length/2-1, head)

            head
        }
    }
}
```