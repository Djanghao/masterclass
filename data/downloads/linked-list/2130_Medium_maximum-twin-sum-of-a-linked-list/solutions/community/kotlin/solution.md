# Kotlin step by step - Using reverse to gain the O(1) space complexity

**Author:** MohiFayden
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3874865/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3874865/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
    fun pairSum(head: ListNode?): Int {
        var slow = head
        var fast = head?.next

        // 1->2->3->4->5->6 ==> Goal = max((1+6), (2+5), (3+4))
        // The goal is to find the maximum twin sum of pairs of nodes from the start and end of the list.
        // To achieve this, reverse the second half of the list and then sum the pairs of nodes
        // starting from the head of the list and the head of the reversed half.
        // For example: 1->2->3->4->5->6 becomes 1->2->3->6->5->4 and then sum pairs (1+6), (2+5), (3+4).

        // Find the middle of the linked list. 'slow' will point to the last node of the first half when 'fast' reaches the end of the list.
        while (fast?.next != null) {
            slow = slow?.next
            fast = fast.next?.next
        }

        // Reverse the second half of the list starting from the node after 'slow'.
        // 'prev' will be the new head of the reversed half.
        var prev: ListNode? = null
        var curr = slow?.next

        while (curr != null) {
            val next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        // Connect the end of the first half to the head of the reversed second half.
        slow?.next = prev

        // Sum the pairs of nodes from the start of the list and the start of the reversed half,
        // keeping track of the maximum sum.
        var ans = 0
        var first = head
        var second = slow?.next // 'second' points to the start of the reversed half
        while (second != null) {
            ans = max(ans, first!!.`val` + second.`val`)

            first = first.next
            second = second.next
        }

        return ans
    }
}
```