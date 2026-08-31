# ✨ Easy Solution With Explanation | PHP 🐘

**Author:** mohamed_amin_hajbi
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744182/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744182/)

---

# Intuition
To solve the problem of removing nodes from a linked list based on values present in a given array, we need to efficiently check if a node\u2019s value exists in the array and remove it if it does. Using a hash set to store the values allows us to quickly determine if a node should be removed.
# Approach
**1. Convert Array to Set:** Convert the array nums into a hash set for fast lookup operations.
**2. Use a Dummy Node:** Introduce a dummy node before the head of the linked list to simplify edge cases, such as when the head node itself needs to be removed.
**3. Traverse and Modify:** Traverse the list with the dummy node, and use the hash set to decide if the current node should be removed. If the node\u2019s value exists in the set, skip it by adjusting pointers.
**4. Return Modified List:** After processing all nodes, return the list starting from dummy->next, which points to the new head of the modified list.

# Complexity
- Time complexity: **O(n+m)**
Where n is the number of elements in the array nums, and m is the number of nodes in the linked list. Converting nums to a set is O(n), and traversing the linked list is O(m).
- Space complexity: **O(n)**
For storing the values of nums in a hash set.
# Code
```php []
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
     * Remove nodes from the linked list that have values in the given array.
     *
     * @param Integer[] $nums - Values to remove from the linked list.
     * @param ListNode $head - Head of the linked list.
     * @return ListNode - Head of the modified linked list.
     */
    function modifiedList($nums, $head) {
        // Convert nums array to a hash set for faster lookups
        $set = array_flip($nums);
        
        // Create a dummy node to handle edge cases (e.g., removal of head node)
        $dummy = new ListNode(0, $head);
        $current = $dummy;
        
        // Traverse the list and remove nodes whose values exist in the set
        while ($current->next !== null) {
            if (isset($set[$current->next->val])) {
                // Skip the node by pointing to the next of next node
                $current->next = $current->next->next;
            } else {
                // Move to the next node if the current node is not removed
                $current = $current->next;
            }
        }
        
        // Return the modified list starting from the head
        return $dummy->next;
    }
}

}
```