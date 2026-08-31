# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/rotate-list/solutions/1912571/](https://leetcode.com/problems/rotate-list/solutions/1912571/)

---

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
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the linked list.
    //   - space: O(1), only constant space is used.

    func rotateRight(_ head: ListNode?, _ k: Int) -> ListNode? {
        guard head?.next != nil else { return head }

        var curr = head
        var len = 1

        while curr?.next != nil {
            curr = curr?.next
            len += 1
        }
        curr?.next = head

        for _ in 0..<(len - k % len) { curr = curr?.next }

        var newHead = curr?.next
        curr?.next = nil

        return newHead
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.