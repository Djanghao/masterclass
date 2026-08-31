# Functional Solution, time: O(n) space: O(1)

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4226542/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4226542/)

---

```
object Solution {
    def insert(head: Node, insertVal: Int): Node = {
        @scala.annotation.tailrec
        def inject(node: Node): Node = {
            Option(node) match {
                case Some(_) if (insertVal >= node.value && insertVal <= node.next.value)
                                || (node.value > node.next.value && (insertVal >= node.value || insertVal < node.next.value)) =>
                    //println(node.value)
                    val oldNext = node.next
                    node.next = new Node(insertVal)
                    node.next.next = oldNext
                    head
                case Some(_) if node.next == head =>
                    node.next = new Node(insertVal)
                    node.next.next = head
                    head
                case None => 
                    val newHead = new Node(insertVal)
                    newHead.next = newHead
                    newHead
                case _ => inject(node.next)
            }
        }
        inject(head)
    }
}
```