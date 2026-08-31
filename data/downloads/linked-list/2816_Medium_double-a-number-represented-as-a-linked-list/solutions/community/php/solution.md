# Doubling Digits in a Singly-Linked List

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5126168/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5126168/)

---

# Intuition
To double each digit in the linked list representation of a number, we can traverse the list while keeping track of any carry resulting from doubling each digit. Since the list represents the number in reverse order, we first reverse the list to simplify the doubling process. After doubling each digit and handling the carry, we reverse the list again to obtain the final result.

# Approach
1. Reverse the linked list to simplify the doubling process.
2. Initialize carry to 0 and a dummy node to store the result.
3. Traverse the reversed list:
- Double each digit and add the carry.
- Update the result with the remainder of the doubled value divided by 10.
- Update carry with the quotient of the doubled value divided by 10.
4. If there is any remaining carry after processing all digits, add a new node to represent it.
5. Reverse the result list to obtain the final result.
6. Return the head of the final result list.

# Complexity
- Time complexity:
O(n), where n is the number of digits in the linked list.

- Space complexity:
O(n), where n is the number of digits in the linked list (due to the reversed list).

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
    function doubleIt($head) {
        // Reverse the linked list
        $head = $this->reverseList($head);

        // Initialize carry
        $carry = 0;
        $dummy = new ListNode(0);
        $current = $dummy;

        // Iterate through the reversed list
        while ($head !== null || $carry !== 0) {
            $val = ($head !== null ? $head->val : 0) * 2 + $carry;
            $carry = intdiv($val, 10);
            $current->next = new ListNode($val % 10);
            $current = $current->next;
            $head = ($head !== null ? $head->next : null);
        }

        // Reverse the result
        return $this->reverseList($dummy->next);
    }

    // Function to reverse a linked list
    function reverseList($head) {
        $prev = null;
        $current = $head;
        while ($current !== null) {
            $next = $current->next;
            $current->next = $prev;
            $prev = $current;
            $current = $next;
        }
        return $prev;
    }
}
```