# Swift: Fastest Solution ✅

**Author:** hackyoux
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4676002/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4676002/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
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
    func deleteNodes(_ head: ListNode?, _ m: Int, _ n: Int) -> ListNode? {
        var head = head  
        var temp = head
        var counter = 1
        
        while temp != nil {            
            if counter < m {
                temp = temp?.next
            } else if counter < m + n {
                temp?.next = temp?.next?.next
            }
            
            if counter > m + n {
                counter = 0
            } else {
                counter += 1
            }
        }
            
        return head
    }
}
```