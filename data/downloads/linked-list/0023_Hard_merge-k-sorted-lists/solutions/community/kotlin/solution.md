# Kotlin simple recursive approach

**Author:** ABeltramo
**Votes:** 8
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/434487/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/434487/)

---

It's not the fastest approach but no extra memory is used, code it's also a lot simpler to understand than other solutions.
```
fun mergeKLists(lists: Array<ListNode?>): ListNode? {
    return when {
        lists.size == 1 -> lists.first()
        lists.isEmpty() -> null
        else -> lists.reduce { l1, l2 -> merge2Lists(l1, l2) }
    }
}

fun merge2Lists(l1: ListNode?, l2: ListNode?): ListNode? {
    if (l1 == null || l2 == null) {
        return l1 ?: l2
    }

    return if (l1.`val` < l2.`val`) {
        l1.next = merge2Lists(l1.next, l2)
        l1
    } else {
        l2.next = merge2Lists(l1, l2.next)
        l2
    }
}
```