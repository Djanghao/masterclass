# Merge Linked Lists Between

**Author:** PC-Principal
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4901673/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4901673/)

---

# Intuition
To solve this problem efficiently, we can first traverse list1 to find the nodes before and after the specified positions a and b. Then, we can connect the node before position a to the head of list2 and connect the tail of list2 to the node after position b. This approach allows us to perform the operation in a single pass through list1 and list2, optimizing the solution.

# Approach
1. Traverse list1 to find the node before position a and the node after position b.
2. Connect the node before position a to the head of list2.
3. Find the last node in list2 and connect it to the node after position b.

# Complexity
- Time complexity:
O(n + m), where n is the length of list1 and m is the length of list2.

- Space complexity:
O(1), as we only use a constant amount of extra space regardless of the input size.

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
     * @param ListNode $list1
     * @param Integer $a
     * @param Integer $b
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeInBetween($list1, $a, $b, $list2) {
                // Find the node before position a
        $prevA = $list1;
        for ($i = 1; $i < $a; $i++) {
            $prevA = $prevA->next;
        }
        
        // Find the node after position b
        $nextB = $list1;
        for ($i = 0; $i <= $b; $i++) {
            $nextB = $nextB->next;
        }
        
        // Connect prevA to list2
        $prevA->next = $list2;
        
        // Find the last node in list2 and connect it to nextB
        $lastNodeList2 = $list2;
        while ($lastNodeList2->next !== null) {
            $lastNodeList2 = $lastNodeList2->next;
        }
        $lastNodeList2->next = $nextB;
        
        return $list1;
    }
}
```