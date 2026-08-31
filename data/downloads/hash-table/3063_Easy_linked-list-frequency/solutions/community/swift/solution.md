# ✅ One Pass Solution

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4841081/](https://leetcode.com/problems/linked-list-frequency/solutions/4841081/)

---

# Solution
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
final class Solution {
    @_optimize(speed)
    func frequenciesOfElements(_ head: ListNode?) -> ListNode? {
        var head = head
        var sentinel: ListNode? = nil
        var freqs = [Int: ListNode]()
        
        while let node = head {
            if freqs[node.val] == nil {
                freqs[node.val] = ListNode(1, sentinel)
                sentinel = freqs[node.val]
            } else {
                freqs[node.val, default: ListNode(0)].val += 1
            }
            head = node.next
        }
        return sentinel
    }
}
```