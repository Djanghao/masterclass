# Removing Nodes to Maintain Non-Decreasing Linked List

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121412/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121412/)

---

# Intuition
To remove nodes from a linked list while keeping the non-decreasing order intact, we can use a recursive approach. We traverse the linked list recursively, comparing each node's value with the next node's value. If the current node's value is less than the next node's value, we continue traversing. Otherwise, we adjust the pointers to remove the current node.

# Approach
1. Initialize a dummy node to handle cases where the head of the linked list needs to be removed.
2. Call the removeNodesHelper function recursively, passing the head of the linked list and the dummy node.
3. In the removeNodesHelper function, if the current node is null, return null to terminate recursion.
4. Recursively call the removeNodesHelper function on the next node.
5. Compare the current node's value with the next node's value.
6. If the current node's value is less than the next node's value, update the previous node's next pointer to point to the next node.
7. Otherwise, update the current node's next pointer to the result of the recursive call, and set the current node as the new result.
8. Return the current node.

# Complexity
- Time complexity:
O(n), where n is the number of nodes in the linked list. We traverse each node once.

- Space complexity:
O(n), for the recursive call stack. In the worst case, the recursion depth is equal to the number of nodes in the linked list.

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
     * @return ListNode
     */
    function removeNodes($head) {
        $dummy = new ListNode();
        $dummy->next = $this->removeNodesHelper($head, $dummy);
        return $dummy->next;
    }

    private function removeNodesHelper($node, $prev) {
        if (!$node) {
            return null;
        }

        $curr = $this->removeNodesHelper($node->next, $node);
        if ($node->val < $curr->val) {
            $prev->next = $curr;
        } else {
            $node->next = $curr;
            $curr = $node;
        }

        return $curr;
    }
}
```