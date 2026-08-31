# Beats 97.32% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/5375832/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/5375832/)

---

# Approach
This solution combines both two-pointer and recursion techniques.

The two-pointer technique is used to reverse the group of k nodes in the linked list. It involves maintaining two pointers: previous_node and current_node, which are used to reverse the pointers of the nodes in the group.

The recursion technique is used to recursively reverse the remaining portion of the linked list after the reversed group. The function calls itself on the remaining portion of the linked list starting from the current_node.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes in the linked list. This is because the function visits each node in the linked list exactly once during the reversal process. The recursion depth is limited by the number of nodes in the linked list, so the time complexity remains linear.

- Space complexity:
$$O(n)$$ due to the recursion stack. In the worst case, the recursive calls can go as deep as the number of nodes in the linked list.

# Code
``` python3 []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # Base case: If the list is empty or has less than k nodes,
        # or k is 1, there is no need to reverse anything.
        if not head or not head.next or k == 1:
            return head

        current_head = head

        # Check if there are k nodes in the list.
        for _ in range(k):
            if not current_head:
                return head
            current_head = current_head.next

        # Reverse the first k nodes in the list.
        previous_node = None
        current_node = head
        for _ in range(k):
            # Store the next node.
            next_node = current_node.next
            # Reverse the link between the current node and the previous node.
            current_node.next = previous_node
            # Move the previous and current nodes.
            previous_node = current_node
            current_node = next_node

        # Recursively reverse the remaining groups.
        head.next = self.reverseKGroup(current_node, k)
        
        # Return the reversed list.
        return previous_node
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
var reverseKGroup = function(head, k) {
    // Base case: If the list is empty or has less than k nodes,
    // or k is 1, there is no need to reverse anything.
    if (!head || !head.next || k === 1) {
        return head;
    }

    let currentHead = head;

    // Check if there are k nodes in the list.
    for (let i = 0; i < k; i++) {
        if (!currentHead) {
            return head;
        }
        currentHead = currentHead.next;
    }

    // Reverse the first k nodes in the list.
    let previousNode = null;
    let currentNode = head;
    for (let i = 0; i < k; i++) {
        // Store the next node.
        let nextNode = currentNode.next;
        // Reverse the link between the current node and the previous node.
        currentNode.next = previousNode;
        // Move the previous and current nodes.
        previousNode = currentNode;
        currentNode = nextNode;
    }

    // Recursively reverse the remaining groups.
    head.next = reverseKGroup(currentNode, k);

    // Return the reversed list.
    return previousNode;
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
    function reverseKGroup($head, $k) {
        // Base case: If the list is empty or has less than k nodes,
        // or k is 1, there is no need to reverse anything.
        if (!$head || !$head->next || $k === 1) {
            return $head;
        }

        $currentHead = $head;

        // Check if there are k nodes in the list.
        for ($i = 0; $i < $k; $i++) {
            if (!$currentHead) {
                return $head;
            }
            $currentHead = $currentHead->next;
        }

        // Reverse the first k nodes in the list.
        $previousNode = null;
        $currentNode = $head;
        for ($i = 0; $i < $k; $i++) {
            // Store the next node.
            $nextNode = $currentNode->next;
            // Reverse the link between the current node and the previous node.
            $currentNode->next = $previousNode;
            // Move the previous and current nodes.
            $previousNode = $currentNode;
            $currentNode = $nextNode;
        }

        // Recursively reverse the remaining groups.
        $head->next = $this->reverseKGroup($currentNode, $k);

        // Return the reversed list.
        return $previousNode;
    }
}
```