# KOLIN and JAVA solution using a circular list - beats 100%

**Author:** anlk
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotate-list/solutions/6031955/](https://leetcode.com/problems/rotate-list/solutions/6031955/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705 

# Intuition
Rotating a linked list to the right by k places is similar to taking the last k nodes and moving them to the front of the list. 

Given the linked list structure, we can make this efficient by turning the list into a circular structure and breaking it at the correct position.

# Approach
- Handle Edge Cases: If the list is empty or has only one node, or if k=0, we can immediately return the list as it is.
- Compute Length: First, traverse the list to determine its length and connect the tail to the head, forming a circular list.
- Normalize k: Since rotating by k places is equivalent to rotating by `k mod length`, calculate the effective rotations needed.
- Find the New Head: Calculate the new tail's position, which is at length - (k % length) - 1. Traverse to this node and set its next to null, breaking the circular link.
- Return the Result: The node after the new tail becomes the new head.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```Kotlin []
class Solution {
    fun rotateRight(head: ListNode?, k: Int): ListNode? {
        if (head == null || head.next == null || k == 0) return head

        // calculate the length of the list and connect the tail to the head
        var length = 1
        var tail = head
        while (tail?.next != null) {
            tail = tail.next
            length++
        }
        tail?.next = head

        // normalize k
        val effectiveK = k % length
        val stepsToNewHead = length - effectiveK
        
        // find the new tail and new head
        var newTail = tail
        repeat(stepsToNewHead) {
            newTail = newTail?.next
        }
        val newHead = newTail?.next

        // break the circular list
        newTail?.next = null
        return newHead
    }
}
```

```Java []
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) return head;

        // calculate the length of the list and connect the tail to the head
        ListNode tail = head;
        int length = 1;
        while (tail.next != null) {
            tail = tail.next;
            length++;
        }
        tail.next = head;

        // normalize k
        k = k % length;
        int stepsToNewHead = length - k;
        
        // find the new tail and new head
        ListNode newTail = tail;
        while (stepsToNewHead-- > 0) {
            newTail = newTail.next;
        }
        ListNode newHead = newTail.next;

        // break the circular list
        newTail.next = null;
        return newHead;        
    }
}
```