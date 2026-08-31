# 100% / Accepted

**Author:** martinlasek
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/4744941/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/4744941/)

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
    var stack: [ListNode] = []
    var startNode: ListNode? = nil

    func splitCircularLinkedList(_ list: ListNode?) -> [ListNode?] {
        guard let head = list else {
            return []
        }

        self.startNode = head

        traverse(head)

        let count = stack.count
        
        let middle = if count % 2 == 0 {
            (count / 2) - 1
        } else {
            (count / 2)
        }

        stack[middle].next = stack[0]
        stack[stack.count-1].next = stack[middle+1]

        return [stack[0], stack[middle+1]]
    }

    func traverse(_ node: ListNode) {
        stack.append(node)

        if
            let next = node.next,
            next !== startNode
        {
            traverse(next)
        }
    }
}
```