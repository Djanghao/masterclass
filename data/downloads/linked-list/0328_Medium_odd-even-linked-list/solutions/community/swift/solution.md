# Swift solution

**Author:** cl0ud_runner
**Votes:** 3
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/78101/](https://leetcode.com/problems/odd-even-linked-list/solutions/78101/)

---

```
class Solution {
    func oddEvenList(_ head: ListNode?) -> ListNode? {
        if head == nil {
            return nil
        }
        
        var odd: ListNode? = head
        var even: ListNode? = head?.next
        let evenHead: ListNode? = even
        
        while even != nil && even?.next != nil {
            odd?.next = odd?.next?.next
            even?.next = even?.next?.next
            odd = odd?.next
            even = even?.next
        }
        odd?.next = evenHead
        
        return head
    }
}
```