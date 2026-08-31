# Swift solution

**Author:** cl0ud_runner
**Votes:** 19
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49817/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49817/)

---

```
class Solution {
    func getIntersectionNode(_ headA: ListNode?, _ headB: ListNode?) -> ListNode? {
        if headA == nil || headB == nil {
            return nil
        }
        
        var a: ListNode? = headA
        var b: ListNode? = headB
        
        while a !== b {
            a = a == nil ? headB : a?.next
            b = b == nil ? headA : b?.next
        }
        
        return a;
    }
}
```