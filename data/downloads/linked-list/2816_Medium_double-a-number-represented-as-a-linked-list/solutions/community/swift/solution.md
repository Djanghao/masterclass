# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124537/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124537/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
    func doubleIt(_ head: ListNode?) -> ListNode? {
        guard let head = head else {
            return nil
        }

        let doubledValue = head.val * 2
        let nextVal = head.next?.val ?? .zero
        let nextNode = doubleIt(head.next)
        if nextVal >= 5 {
            head.val = doubledValue % 10 + 1
            head.next = nextNode?.next
        } else {
            head.val = doubledValue % 10
            head.next = nextNode
        }

        if doubledValue >= 10 {
            let oneNode = ListNode(1)
            oneNode.next = head
            return oneNode
        } else {
            return head
        }
    }
}
```