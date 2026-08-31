# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 26
**Link:** [https://leetcode.com/problems/linked-list-cycle/solutions/1938506/](https://leetcode.com/problems/linked-list-cycle/solutions/1938506/)

---

```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */

class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the linked list.
    //   - space: O(1), only constant space is used.
    
    func hasCycle(_ head: ListNode?) -> Bool {
        var slow = head
        var fast = head?.next
        
        while slow != nil, fast != nil {
            guard slow !== fast else { return true }
            
            slow = slow?.next
            fast = fast?.next?.next            
        }
        
        return false
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.