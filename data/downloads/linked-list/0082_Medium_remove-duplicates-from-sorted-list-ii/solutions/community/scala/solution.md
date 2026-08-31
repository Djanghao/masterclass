# Scala

**Author:** bepis_higher
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1002998/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1002998/)

---

```
object Solution {
    def deleteDuplicates(head: ListNode): ListNode = Option(head) match {
        case None => null
        case Some(head) if Option(head.next).exists(_.x == head.x) => deleteDuplicates(skipX(head, head.x))
        case _ => ListNode(head.x, deleteDuplicates(head.next))
    }

    def skipX(head: ListNode, x: Int): ListNode = Option(head) match {
        case None => null
        case Some(head) if head.x == x => skipX(head.next, x)
        case _ => head
    }
}
```