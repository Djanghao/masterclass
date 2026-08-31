# Scala, very easy solution for this badly described problem

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/2697588/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/2697588/)

---

Scala, very easy solution for this badly described problem

So the idea is to make the current/provided node have the value of it's next node, and skip the next node.

```
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

object Solution {
    def deleteNode(node: ListNode): Unit = {
        node.x = node.next.x
        node.next = node.next.next
    }
}
```