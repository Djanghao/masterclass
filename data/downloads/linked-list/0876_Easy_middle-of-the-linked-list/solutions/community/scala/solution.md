# Scala | tailrec | slow and fast pointers

**Author:** fenixil
**Votes:** 4
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/3177966/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/3177966/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using fast and slow pointer tecnique.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

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
    def middleNode(head: ListNode): ListNode = {
        @scala.annotation.tailrec
        def run(slow:ListNode, fast:ListNode):ListNode = 
            if(fast==null || fast.next==null) slow
             else run(slow.next, fast.next.next)

        run(head, head)
    }
}
```