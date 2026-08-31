# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124735/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124735/)

---

# Code
```
object Solution {
    def doubleIt(head: ListNode): ListNode = {
        val n :: ns = Iterator.unfold(head)(n => if(n == null) None else Some((n, n.next))).toList: @annotation.nowarn
        val toAdd = if(loop(ns.reverse)) 1 else 0
        val leading = n.x * 2 + toAdd
        n.x = leading % 10

        if(leading < 10) n
        else new ListNode(leading / 10, n)
    }
    
    @annotation.tailrec
    def loop(prev: List[ListNode], plusOne: Boolean = false): Boolean = prev match {
        case Nil => plusOne
        case h :: t => {
            val toAdd = if(plusOne) 1 else 0
            val upd = h.x * 2 + toAdd
            h.x = upd % 10
            loop(t, upd > 9)
        }
    }
}
```