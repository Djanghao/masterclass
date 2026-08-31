# Swift Solution | Step by Step | Two-Pointer Approach

**Author:** ogtongm
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/3344685/](https://leetcode.com/problems/remove-linked-list-elements/solutions/3344685/)

---

# Approach
- Create a dummy node to serve as the new head of the linked list
- Initialize two pointers, `prev` and `curr`, with the dummy node and the actual head of the linked list, respectively
- Iterate through the linked list until the `curr` pointer becomes `nil`.
- If the `curr` node's value is equal to `val`, update the `prev` node's next pointer to skip the `curr` node
- If the `curr` node's value is not equal to `val`, update the `prev` pointer to the `curr` node
- In both cases, move the `curr` pointer to the next node.
Return the next pointer of the dummy node as the new head of the linked list

# Complexity
- Time complexity:
$$O(n)$$ - where `n` is the number of nodes in the linked list, as we traverse the entire linked list once

- Space complexity:
$$O(1)$$

# Code
```swift
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
    func removeElements(_ head: ListNode?, _ val: Int) -> ListNode? {
        let dummyNode = ListNode(0)
        dummyNode.next = head
        var prev: ListNode? = dummyNode
        var curr: ListNode? = head

        while curr != nil {
            if curr!.val == val {
                prev?.next = curr?.next
            } else {
                prev = curr
            }
            curr = curr?.next
        }

        return dummyNode.next
    }
}
```