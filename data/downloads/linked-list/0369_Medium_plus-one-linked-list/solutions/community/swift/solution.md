# simple backtracking

**Author:** stoedirman
**Votes:** 0
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/5124814/](https://leetcode.com/problems/plus-one-linked-list/solutions/5124814/)

---



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
    func plusOne(_ head: ListNode?) -> ListNode? {
        var res = doubleItVal(head)
        if res == nil {
            return res
        }

        if res!.val >= 10 {
            res!.val = res!.val - 10
            return ListNode(1, res)
        }
        return res
    }

    func doubleItVal(_ head: ListNode?) -> ListNode? {
        if head == nil {
            return head
        }

        if head!.next == nil {
            head!.val = head!.val + 1
        }
        var val = (head!.val)

        let curr = doubleItVal(head?.next)
        if curr != nil {
            if curr!.val >= 10 {
                val += 1
                curr!.val = curr!.val - 10
            }
        }
        return ListNode(val, curr)
    }
}
```