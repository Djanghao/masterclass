# ✅ Beat 100% || no Force Unwrapping || Time: O(n) || Space: O(1)

**Author:** hudamabed
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5414128/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5414128/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![Screenshot 2024-07-04 at 10.44.41\u202FAM.png](./images/0.png)

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
    func mergeNodes(_ head: ListNode?) -> ListNode? {
        var current = head
        var nextNode = head?.next
        var sum: Int = 0
        
        while (nextNode != nil) {
            if let l1Value = nextNode?.val, l1Value != 0  {
                sum += l1Value
            } else {
                current = current?.next
                current?.val = sum
                sum = 0
            }
            nextNode = nextNode?.next
        }
        current?.next = nil
        return head?.next
    }
}

```