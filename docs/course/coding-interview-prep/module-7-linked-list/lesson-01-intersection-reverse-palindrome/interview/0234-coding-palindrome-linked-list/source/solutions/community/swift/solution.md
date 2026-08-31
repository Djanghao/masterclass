# Swift solution

**Author:** cl0ud_runner
**Votes:** 7
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/64540/](https://leetcode.com/problems/palindrome-linked-list/solutions/64540/)

---

```
class Solution {
    func isPalindrome(_ head: ListNode?) -> Bool {
        var fast: ListNode? = head
        var slow: ListNode? = head
        
        while fast != nil && fast?.next != nil {
            fast = fast?.next?.next
            slow = slow?.next
        }
        if fast != nil {
            slow = slow?.next
        }
        slow = reverse(slow)
        fast = head
        while slow != nil {
            if fast?.val != slow?.val {
                return false
            }
            fast = fast?.next
            slow = slow?.next
        }
        
        return true
    }
    
    private func reverse(_ head: ListNode?) -> ListNode? {
        var head = head
        var pre: ListNode? = nil
    
        while head != nil {
            let next = head?.next
            head?.next = pre
            pre = head
            head = next
        }
        
        return pre
    }
}
```