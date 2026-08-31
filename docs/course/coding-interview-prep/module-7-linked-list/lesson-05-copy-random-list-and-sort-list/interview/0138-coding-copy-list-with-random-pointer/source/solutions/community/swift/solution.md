# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 15
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/1938497/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/1938497/)

---

```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public var random: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *    	   self.random = nil
 *     }
 * }
 */

class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the linked list.
    //   - space: O(1), only constant space is used.

    func copyRandomList(_ head: Node?) -> Node? {
        guard let head = head else { return nil }
        
        var cur: Node? = head
        while let val = cur?.val {
            var newNode = Node(val)
            newNode.next = cur?.next
            cur?.next = newNode
            cur = newNode.next
        }
        
        cur = head
        while cur != nil {
            cur?.next?.random = cur?.random?.next
            cur = cur?.next?.next
        }
        
        var oldList: Node? = head
        var newList = head.next
        let headOld = head.next
        
        while oldList != nil {
            oldList?.next = oldList?.next?.next
            newList?.next = newList?.next?.next
            oldList = oldList?.next
            newList = newList?.next
        }
        return headOld
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.