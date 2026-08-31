# Kotlin functional recursive solution O(n)

**Author:** ra5
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/4462677/](https://leetcode.com/problems/linked-list-components/solutions/4462677/)

---

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$

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
    fun numComponents(
        head: ListNode?,
        nums: Set<Int>,
        isInConnectedComponent: Boolean,
    ): Int {
        if (head == null) return 0
        if (head.`val` !in nums) {
            return numComponents(head.next, nums, false)
        }

        if (!isInConnectedComponent) return 1 + numComponents(head.next, nums, true)
        return numComponents(head.next, nums, true)
    }

    fun numComponents(
        head: ListNode?,
        nums: IntArray,
    ): Int = numComponents(head, nums.toSet(), false)
}
```