# SWIFT | Simple Step by Step Solution | Beats 90%

**Author:** gauravgupta1602
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5764431/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5764431/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
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
    func insertGreatestCommonDivisors(_ head: ListNode?) -> ListNode? {
        var prev = head
        var curr = head?.next
        while prev != nil && curr != nil {
            let node = ListNode(GCD(prev!.val, curr!.val))
            prev?.next = node
            node.next = curr
            prev = curr
            curr = curr?.next
        }
        return head
    }

    func GCD(_ x: Int, _ y: Int) -> Int {
        if x == 0 { return y }
        return GCD(y%x, x)
    }
}
```