# ✔️ 100% Fastest Swift Solution,  time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/1921891/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/1921891/)

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
    
    func deleteDuplicates(_ head: ListNode?) -> ListNode? {
        var current = head
        var last: ListNode?
        
        while current != nil {
            if last != nil && current!.val == last!.val {
                last?.next = current?.next
            
            } else {
                last = current
            }
            
            current = current?.next
        }
        
        return head
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.