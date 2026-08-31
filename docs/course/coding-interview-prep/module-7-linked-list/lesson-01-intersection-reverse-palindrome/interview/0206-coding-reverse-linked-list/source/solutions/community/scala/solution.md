# Elegant Scala Solution using recursive and match

**Author:** chih-chen
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/578100/](https://leetcode.com/problems/reverse-linked-list/solutions/578100/)

---

```
/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */
object Solution {
    def reverseList(head: ListNode): ListNode = {
        
        def loop(head: ListNode, result: ListNode) : ListNode = {
            head match {
                case null => result
                case h => {
                    val current = h.next
                    h.next = result
                    loop(current, h)
                }
            }
        }
                
        loop(head, null)
    }
}

```