# Extremely Verbose Scala Solution

**Author:** Abastro
**Votes:** 2
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1728646/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1728646/)

---

```scala
object Solution {
    def swapPairs(head: ListNode): ListNode = {
        if (head == null || head.next == null)
            head
        else {
            var fel = head
            var sel = head.next
            fel.next = swapPairs(sel.next)
            sel.next = fel
            sel
        }
    }
}
```