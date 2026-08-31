# [Kotlin] Reorder Singly Linked List | Middle Split & Reverse

**Author:** teogor
**Votes:** 4
**Link:** [https://leetcode.com/problems/reorder-list/solutions/5050680/](https://leetcode.com/problems/reorder-list/solutions/5050680/)

---

### Intuition
To reorder a singly linked list in the specified pattern (L0 \u2192 Ln \u2192 L1 \u2192 Ln-1 \u2192 L2 \u2192 Ln-2 \u2192 ...), we can break the problem into three main steps:
1. Find the middle of the linked list.
2. Reverse the second half of the linked list.
3. Merge the first half with the reversed second half.

### Approach
1. **Find Middle**: We can find the middle of the linked list using the slow and fast pointer technique. The slow pointer moves one node at a time while the fast pointer moves two nodes at a time. When the fast pointer reaches the end, the slow pointer will be at the middle.
2. **Split the List**: Once we have the middle node, we split the list into two halves. The first half ends before the middle node, and the second half starts from the middle node.
3. **Reverse the Second Half**: We reverse the second half of the linked list. This involves changing the next pointers of the nodes.
4. **Merge the Two Halves**: Finally, we merge the first half with the reversed second half. We use two pointers, one for each half, and alternate between them, updating the next pointers.

### Complexity Analysis
- **Time Complexity**: We traverse the linked list twice - once to find the middle and once to reverse the second half. Each traversal takes O(n) time, where n is the number of nodes in the linked list. Merging the two halves also takes O(n) time. Thus, the overall time complexity is O(n).
- **Space Complexity**: We use only a constant amount of extra space for pointers. Hence, the space complexity is O(1).

### Code
```kotlin
class Solution {
    fun reorderList(head: ListNode?) {
        if (head?.next == null) return
        
        // Step 1: Find the middle of the linked list
        var slow: ListNode? = head
        var fast: ListNode? = head
        while (fast?.next != null && fast.next?.next != null) {
            slow = slow?.next
            fast = fast.next?.next
        }
        
        // Split the list into two halves
        val firstHalfEnd = slow
        var secondHalfStart = slow?.next
        firstHalfEnd?.next = null // Break the link
        
        // Step 2: Reverse the second half of the linked list
        secondHalfStart = reverseList(secondHalfStart)
        
        // Step 3: Merge the two halves
        var p1: ListNode? = head
        var p2: ListNode? = secondHalfStart
        while (p2 != null) {
            val next1 = p1?.next
            val next2 = p2.next
            p1?.next = p2
            p2.next = next1
            p1 = next1
            p2 = next2
        }
    }
    
    private fun reverseList(head: ListNode?): ListNode? {
        var prev: ListNode? = null
        var current = head
        while (current != null) {
            val nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }
        return prev
    }
}
```

This approach allows us to reorder the linked list in the required pattern efficiently using only constant extra space.