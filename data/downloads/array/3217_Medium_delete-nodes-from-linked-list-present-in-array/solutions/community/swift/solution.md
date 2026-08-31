# Optimal Solution

**Author:** dawoodaamir99
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744373/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744373/)

---

# Intuition
The problem asks us to remove nodes from the linked list that match values in the `nums` array. The simplest way to do this is to iterate through the linked list and remove nodes whose values exist in `nums`. We can optimize this by converting `nums` to a set for faster lookups.

# Approach
1. **Convert `nums` to a set:** This allows for constant time lookups of whether a value is in `nums`.
2. **Iterate through the linked list:** Traverse the linked list while checking if the current node's value exists in the set. If it does, skip that node by adjusting the `next` pointer.
3. **Handle edge cases:** Ensure that the head of the linked list is properly updated if it matches any value in `nums`.

# Complexity
- Time complexity:  
  $$O(m + n)$$ where `m` is the length of `nums` and `n` is the number of nodes in the linked list.  
  - Converting `nums` to a set takes $$O(m)$$.
  - Traversing the linked list takes $$O(n)$$.

- Space complexity:  
  $$O(m)$$ due to the set used to store the `nums` values for quick lookup.


# Code
```swift []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */

class Solution {
    func modifiedList(_ nums: [Int], _ head: ListNode?) -> ListNode? {
        // Convert nums to a set for O(1) lookups
        let numSet = Set(nums)
        
        // Dummy node to help handle the head of the list easily
        let dummy = ListNode(0)
        dummy.next = head
        
        // Previous and current pointers
        var prev: ListNode? = dummy
        var curr = head
        
        // Traverse the list
        while curr != nil {
            if numSet.contains(curr!.val) {
                // If current value exists in nums, skip this node
                prev?.next = curr?.next
            } 
            else {
                // Otherwise, move prev pointer
                prev = curr
            }
            // Move to the next node
            curr = curr?.next
        }
        
        // Return the new head (dummy.next points to the start of the modified list)
        return dummy.next
    }
}

```