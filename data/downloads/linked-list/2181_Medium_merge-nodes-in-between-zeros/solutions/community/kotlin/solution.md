# Kotlin. Beats 88% (825 ms). Three vars + simple loop

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5417814/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5417814/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun mergeNodes(head: ListNode?): ListNode? {
        var target = head
        var node: ListNode? = target?.next
        var prev: ListNode? = null

        while (node != null) {
            if (node.`val` == 0) {
                prev = target
                target?.next = node
                target = node
            } else if (target != null) {
                target.`val` += node.`val`
            }
            node = node.next
        }

        prev?.next = null

        return head
    }
}
```

One more attempt:

![image.png](./images/1.png)

```
class Solution {
    fun mergeNodes(head: ListNode?): ListNode? {
        var target: ListNode? = head
        var node: ListNode? = target?.next
        var prev: ListNode? = null

        while (node != null) {
            val c = node.`val`
            if (c == 0) {
                target?.next = node
                prev = target
                target = node
            } else if (target != null) target.`val` += c
            node = node.next
        }

        prev?.next = null

        return head
    }
}
```