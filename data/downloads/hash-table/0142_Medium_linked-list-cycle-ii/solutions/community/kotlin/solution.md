# Kotlin Two Pointers

**Author:** kotlinc
**Votes:** 4
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274409/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274409/)

---


# Code
```
class Solution {
  fun detectCycle(root: ListNode?): ListNode? {
    val dummy: ListNode? = ListNode(-1)
    dummy!!.next = root
    var fast = dummy
    var slow = dummy

    while (true) {
      if (fast?.next == null) return null

      fast = fast.next!!.next
      slow = slow!!.next

      if (fast == slow) break
    }

    slow = dummy
    while (fast != slow) {
      fast = fast!!.next
      slow = slow!!.next
    }
    return slow
  }
}
```