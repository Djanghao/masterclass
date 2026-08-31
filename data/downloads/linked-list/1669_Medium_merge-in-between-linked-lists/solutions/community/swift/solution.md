# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4900383/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4900383/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
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

extension ListNode {
    var last: ListNode {
        next?.last ?? self
    }
}

class Solution {
    func mergeInBetween(_ list1: ListNode?, _ a: Int, _ b: Int, _ list2: ListNode?) -> ListNode? {
        guard var curNode = list1 else { return nil }
        var curInd = 0
        var beforeInsertNode: ListNode? = a == 0 ? nil : curNode
        var afterInsertNode: ListNode?
        while afterInsertNode == nil, let nextNode = curNode.next {
            curNode = nextNode
            curInd += 1
            if curInd < a {
                beforeInsertNode = curNode
            } else if curInd > b {
                afterInsertNode = curNode
            }
        }
        beforeInsertNode?.next = list2
        list2?.last.next = afterInsertNode
        return a > 0 ? list1 : list2
    }
}
```