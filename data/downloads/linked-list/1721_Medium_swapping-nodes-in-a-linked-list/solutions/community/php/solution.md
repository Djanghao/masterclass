# Simple php solution

**Author:** khaliljayab
**Votes:** 2
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526678/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526678/)

---


# Approach
<!-- Describe your approach to solving the problem. -->

1. Create a dummy node and set its next pointer to the head of the given linked list. This dummy node helps handle cases where the kth node is the head of the list.
2. Initialize two pointers, first and second, to the dummy node.
3. Move the first pointer k steps ahead in the linked list.
4. Store the reference of the first pointer in a temporary variable temp.

5. Move both the first and second pointers simultaneously until the first pointer reaches the end of the list.

6. Swap the values of the temp node and the node after the second pointer. Since the second pointer is already pointing to the (kth from end - 1) node, the next node is the kth node from the end.

7. Return the next pointer of the dummy node, which will be the modified head of the linked list.

8. This approach ensures that the swapping of nodes is done correctly and considers edge cases such as when the kth node is the head of the list.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
    function swapNodes($head, $k) {
        // Initialize pointers
        $dummy = new ListNode(0);
        $dummy->next = $head;
        $first = $dummy;
        $second = $dummy;

        // Move the first pointer k steps ahead
        for ($i = 0; $i < $k; $i++) {
            $first = $first->next;
        }

        $temp = $first;

        // Move both pointers until first reaches the end of the list
        while ($first->next != null) {
            $first = $first->next;
            $second = $second->next;
        }

        // Swap the values of the first and second pointers' nodes
        $temp_val = $temp->val;
        $temp->val = $second->next->val;
        $second->next->val = $temp_val;

        return $dummy->next;
}
}
```