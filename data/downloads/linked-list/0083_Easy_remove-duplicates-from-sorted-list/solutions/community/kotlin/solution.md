# Simple Kotlin with description

**Author:** OmarNajjar
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3298975/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3298975/)

---

# Intuition
Iterate over nodes and check duplicates

# Approach
By iterating over nodes we always checking the next one, 
If it has the same value then we will remove it by making the current pointer point to the removed node next,
Otherwise move to the next node,
Keep doing this until current Node next is null

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
    fun deleteDuplicates(head: ListNode?): ListNode? {
        if(head == null || head?.next == null) {
            return head
        }
        var h = head
        while (h?.next != null) {
            if(h.`val` == h.next.`val`) {
                h.next = h.next.next
            } else{
                h = h.next
            }
            
        }
        return head
    }
}
```