# Beats 70.00% Runtime Swift

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5191789/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5191789/)

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
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var prev: Node?
 *     public var next: Node?
 *     public var child: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.prev = nil
 *         self.next = nil
 *         self.child  = nil
 *     }
 * }
 */

class Solution {
    func flatten(_ head: Node?) -> Node? {
        guard head != nil else { return nil }
        var curr = head
        
        while curr != nil {
            if curr!.child == nil {
                curr = curr!.next
            } else {
                let childHead = curr!.child
                let nextNode = curr!.next
                
                // link curr with child
                curr!.next = childHead
                childHead!.prev = curr
                curr!.child = nil
                
                // Find the tail of the flattened child list
                var tail = childHead
                while tail!.next != nil {
                    tail = tail!.next
                }
                
                // link child tail to nextNode
                tail!.next = nextNode
                if nextNode != nil {
                    nextNode!.prev = tail
                }
                
                curr = curr!.next
            }
        }
        return head
    }
}

```