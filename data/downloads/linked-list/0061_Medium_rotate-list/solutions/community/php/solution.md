# Two pointers (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-list/solutions/5376010/](https://leetcode.com/problems/rotate-list/solutions/5376010/)

---

# Intuition
The idea is to first find the length of the linked list, then find the new tail and new head of the rotated list. Finally, we connect the new tail with the new head to complete the rotation.

# Approach
1. Find the length of the linked list.
2. Connect the last node to the first node to form a ring.
3. Calculate the actual rotation value by taking k modulo the length of the list.
4. Use two pointers, one starting at the head and the other at a position k steps ahead, to find the new tail and new head.
5. Break the ring by setting the next pointer of the new tail to None.
6. Return the new head of the rotated list.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the linked list. This is because we need to traverse the linked list twice: once to find its length and once to perform the rotation.

- Space complexity:
$$O(1)$$ because we only use a few extra pointers to keep track of the current node, the new tail, and the new head.

# Code
``` python3 []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # If the list is empty or has only one node, return it as is.
        if not head or not head.next:
            return head
        
        # Find the length of the linked list
        # Initialize the length to 1 since the head is already counted.
        length = 1
        curr = head
        while curr.next:
            length += 1
            curr = curr.next
        
        # Connect the list into a ring
        curr.next = head
        
        # Find the new tail and new head
        # Ensure k is within the range of the list length.
        k = k % length
        # Start from the head.
        new_tail = head
        # Move k steps to the right.
        for _ in range(length - k - 1):
            new_tail = new_tail.next
        # The new head is the node after the new tail.
        new_head = new_tail.next
        
        # Break the ring
        new_tail.next = None
        
        return new_head

```
``` javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // If the list is empty or has only one node, return it as is.
    if (!head || !head.next) return head;

    // Find the length of the linked list
    // Initialize the length to 1 since the head is already counted.
    let length = 1;
    let curr = head;
    while (curr.next) {
        length++;
        curr = curr.next;
    }

    // Connect the list into a ring
    curr.next = head;

    // Find the new tail and new head
    // Ensure k is within the range of the list length.
    k = k % length;
    // Start from the head.
    let newTail = head;
    // Move k steps to the right.
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    // The new head is the node after the new tail.
    let newHead = newTail.next;

    // Break the ring
    newTail.next = null;

    return newHead;
};
```
``` php []
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param Integer $k
     * @return ListNode
     */
    function rotateRight($head, $k) {
        // If the list is empty or has only one node, return it as is.
        if (!$head || !$head->next) {
            return $head;
        }

        // Find the length of the linked list
        // Initialize the length to 1 since the head is already counted.
        $length = 1;
        $curr = $head;
        while ($curr->next) {
            $length++;
            $curr = $curr->next;
        }

        // Connect the list into a ring
        $curr->next = $head;

        // Find the new tail and new head
        // Ensure k is within the range of the list length.
        $k = $k % $length;
        // Start from the head.
        $newTail = $head;
        // Move k steps to the right.
        for ($i = 0; $i < $length - $k - 1; $i++) {
            $newTail = $newTail->next;
        }
        // The new head is the node after the new tail.
        $newHead = $newTail->next;

        // Break the ring
        $newTail->next = null;

        return $newHead;
    }
}
```