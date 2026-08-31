# O(n) beats 100%

**Author:** vikashiiitb
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862296/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862296/)

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
    func removeZeroSumSublists(_ head: ListNode?) -> ListNode? {
        var prefixSum = 0
        var map = [Int: ListNode]()

        var dummy = ListNode(0)
        dummy.next = head
        map[0] = dummy
        var current = head
        while current != nil {
            prefixSum += current!.val
            map[prefixSum] = current
            current = current!.next
        }

        prefixSum = 0
        current = dummy
        while current != nil {
            prefixSum += current!.val
            current!.next = map[prefixSum]?.next
            current = current?.next 
        }
        return dummy.next
    }


}
```