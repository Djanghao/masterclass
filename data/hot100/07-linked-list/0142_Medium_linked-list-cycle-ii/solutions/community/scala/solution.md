# Scala, fast but not O(1) memory

**Author:** scrot
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/2733609/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/2733609/)

---

```scala
    def detectCycle(head: ListNode): ListNode = {
        def recurse(node: ListNode, table: Map[ListNode, Boolean]): ListNode = {
            Option(node) match {
                case None => null
                case Some(n) => 
                    if (table.get(n).isDefined) n
                    else recurse(n.next, table + (n -> true))
                }
        }
        recurse(head, Map()) 
    }
```