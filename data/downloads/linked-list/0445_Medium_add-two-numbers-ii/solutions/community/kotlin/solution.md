# Kotlin solution

**Author:** shohruh_genius
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3776661/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3776661/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        val a = Stack<ListNode>().apply { generateSequence(l1) { it.next }.forEach { push(it) } }
        val b = Stack<ListNode>().apply { generateSequence(l2) { it.next }.forEach { push(it) } }
        var carry = 0
        var tail: ListNode? = null
        while (a.isNotEmpty() && b.isNotEmpty()) {
            tail = ListNode(a.pop().`val` + b.pop().`val` + carry).apply { next = tail }
            carry = tail.`val` / 10
            tail.`val` %= 10
        }
        (if (a.isEmpty()) b else a).apply {
            while (isNotEmpty()) {
                tail = ListNode(pop().`val` + carry).apply { next = tail }
                carry = tail!!.`val` / 10
                tail!!.`val` %= 10
            }
        }
        if (carry > 0) tail = ListNode(carry).apply { next = tail }
        return tail
    }
}
```