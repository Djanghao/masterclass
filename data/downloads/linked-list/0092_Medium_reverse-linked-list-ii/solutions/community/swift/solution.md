# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/reverse-linked-list-ii/solutions/1921952/](https://leetcode.com/problems/reverse-linked-list-ii/solutions/1921952/)

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
    func reverseBetween(_ head: ListNode?, _ left: Int, _ right: Int) -> ListNode? {
        var left_head = head
        var left_tail: ListNode?
        var current = head
        var index = 1
        
        while index < left {
            left_tail = current
            current = current?.next
            index += 1 
        }

        var mid_tail = current
        var node0: ListNode? = current
        var node1: ListNode? = node0?.next
        var node2: ListNode? = node1?.next
        
        while index < right {
            node1?.next = node0
            node0 = node1
            node1 = node2
            node2 = node2?.next
            index += 1
        }

        if left_tail == nil {
            mid_tail?.next = node1
            return node0
            
        } else {
            left_tail?.next = node0
            mid_tail?.next = node1
            return left_head
        }
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.