# Swift Solution (Fast and Slow)

**Author:** imamatov
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/2377140/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/2377140/)

---

```
class Solution {
    func deleteMiddle(_ head: ListNode?) -> ListNode? {
        if head?.next == nil{
            return nil
        }
        var slow=head
        var fast=head
        var prev:ListNode?
        while fast?.next != nil{
            fast=fast?.next?.next
            prev=slow
            slow=slow?.next
        }
        prev?.next=slow?.next
        return head
    }
}
```