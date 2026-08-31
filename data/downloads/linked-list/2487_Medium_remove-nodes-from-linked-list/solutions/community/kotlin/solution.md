# Kotlin recursion

**Author:** jhao423
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/4462594/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/4462594/)

---

```
class Solution {
    fun removeNodes(head: ListNode?): ListNode? {
        if (head == null) return head
        head.next = removeNodes(head.next)
        return if (head.next != null && head.`val` < head.next.`val`) {
            return head.next
        } else {
            head
        }
    }
}
```