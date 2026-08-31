# Recursive Kotlin Solution

**Author:** jasonostrander
**Votes:** 40
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/383869/](https://leetcode.com/problems/add-two-numbers/solutions/383869/)

---

```
class Solution {
    fun ListNode?.value() = this?.`val` ?: 0

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?, carry: Int = 0): ListNode? {
        if (l1 == null && l2 == null && carry == 0) return null
        val s = l1.value() + l2.value() + carry
        return ListNode(s % 10).apply { next = addTwoNumbers(l1?.next, l2?.next, s / 10) }
    }
}
```