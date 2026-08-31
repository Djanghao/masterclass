# ✔️ 100% Fastest Swift Solution, time: O(n log n), space: O(n).

**Author:** sergeyleschev
**Votes:** 14
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/1941840/](https://leetcode.com/problems/insertion-sort-list/solutions/1941840/)

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
    //   - time: O(n log n), where n is the number of nodes in the linked list.
    //   - space: O(n)
    
    func insertionSortList(_ head: ListNode?) -> ListNode? {
        var nodes: [ListNode] = []
        var curr = head
        
        while curr != nil {
            nodes.append(curr!)
            curr = curr?.next
        }
        
        nodes.sort(by: { $0.val < $1.val })
        
        var newHead: ListNode?
        var prev: ListNode?
        
        for node in nodes {
            if newHead == nil {
                newHead = node
            }
            
            prev?.next = node
            prev = node
        }
        
        prev?.next = nil
        return newHead
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.