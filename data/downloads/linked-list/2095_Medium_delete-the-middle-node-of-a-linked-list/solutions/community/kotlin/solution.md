# Slow and fast pointers explained.

**Author:** adilabuwani
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3506293/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3506293/)

---

# Approach
Using fast and slow pointers to solve the problem.

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(1)

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
    fun deleteMiddle(head: ListNode?): ListNode? {
        //base case, when there is only one element, then delete the middle node
        if (head?.next == null) {
            return null
        }

        //n > 1
        var prev: ListNode? = null
        var fast = head
        var slow = head

        //get the middle node
        while (fast?.next != null) {
            prev = slow
            slow = slow?.next
            fast = fast.next?.next
        }

        //connect the pointers
        prev?.next = slow?.next

        return head
    }
}
```