# [Kotlin] recursive approach

**Author:** drulabs
**Votes:** 0
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/5175024/](https://leetcode.com/problems/plus-one-linked-list/solutions/5175024/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
traverse to the end of the list, add 1 and back track. If you are still carrying around a carry, update head and return new head

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: **__O(n)__**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **__O(n)__**: Aux stack space
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
    fun plusOne(head: ListNode?): ListNode? {
        val carry = helper(head)
        var newHead = head
        if (carry != 0) {
            newHead = ListNode(carry)
            newHead.next = head
        }
        return newHead
    }

    private fun helper(
        node: ListNode?
    ): Int {
        if (node == null) {
            return 1
        }
        var carry = helper(node?.next)
        var sum = node.`val` + carry
        carry = sum/10
        sum = sum % 10
        node.`val` = sum
        return carry
    }
}
```