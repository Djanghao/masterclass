# Simple scala solution (two pointers)

**Author:** andreazube
**Votes:** 4
**Link:** [https://leetcode.com/problems/linked-list-cycle/solutions/893997/](https://leetcode.com/problems/linked-list-cycle/solutions/893997/)

---

Basically, just create the fast and the slow runner, then let them race. If they meet, then there's a cycle.
I find that a (tail) recursive solution is easier to read and understand than the iterative one

```
import scala.annotation.tailrec
object Solution {
    def hasCycle(head: ListNode): Boolean = {
        @tailrec
        def loop(slow: ListNode, fast: ListNode): Boolean = {
            if (slow == fast) true
            else if (fast == null || fast.next == null) false
            else loop(slow.next, fast.next.next)
        }
      
        if (head == null || head.next == null) false else loop(head.next, head.next.next)        
    }
}
```