# ✅ [Solution][Swift] One Pass

**Author:** adanilyak
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4577092/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4577092/)

---

**TC:** $$O(n)$$
**SC:** $$O(1)$$
```
class Solution {
    func sortLinkedList(_ head: ListNode?) -> ListNode? {
        var current = head
        var head = head

        while let next = current?.next {
            if next.val >= 0 {
                current = next
            } else {
                current?.next = next.next
                next.next = head
                head = next
            }
        }

        return head
    }
}
```