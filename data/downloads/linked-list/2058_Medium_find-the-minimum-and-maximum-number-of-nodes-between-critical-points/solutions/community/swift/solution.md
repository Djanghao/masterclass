# swift but Not Swift 😂

**Author:** hudamabed
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5422003/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5422003/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
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
    func nodesBetweenCriticalPoints(_ head: ListNode?) -> [Int] {
        if (head == nil || head?.next == nil || head?.next?.next == nil ) {
            return [-1, -1]
        }
        var previousNode = head
        var currentNode  = head?.next
        var nextNode     = head?.next?.next

        var minDistance = Int.max
        var maxDistance = 0
        var result = [Int]()
        var index = 1

        while(nextNode != nil) {
            if let currentNodeVal = currentNode?.val, let nextNodeVal = nextNode?.val, 
               let previousNodeVal = previousNode?.val {
                if (currentNodeVal > nextNodeVal && currentNodeVal > previousNodeVal) ||
                   (currentNodeVal < nextNodeVal && currentNodeVal < previousNodeVal) {
                    result.append(index)
                }
            previousNode = currentNode
            currentNode  = nextNode
            nextNode     = nextNode?.next
            index += 1
            }
        }
        if (result.count < 2) {
            return [-1, -1]
        }

       // maxDistance = result.last! - result.first!
        if let first = result.first, let last = result.last {
            var min = first
            var max = last
            maxDistance = max - min
        }
        for i in 1..<result.count {
            let distance = result[i] - result[i - 1]
            if (distance < minDistance) {
                minDistance = distance 
            }
        }
        return [minDistance, maxDistance]
    }
}
```