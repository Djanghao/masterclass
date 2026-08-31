# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1918883/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1918883/)

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
        let dummy: ListNode? = ListNode(-1)
        dummy?.next = head

        var curr = dummy
        while let nextVal = curr?.next?.val, let nextNextVal = curr?.next?.next?.val {
            if nextVal == nextNextVal {
                let duplicate = nextVal
                while curr?.next != nil, curr?.next?.val == duplicate {
                    curr?.next = curr?.next?.next
                }
            } else {
                curr = curr?.next
            }
        }

        return dummy?.next
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.