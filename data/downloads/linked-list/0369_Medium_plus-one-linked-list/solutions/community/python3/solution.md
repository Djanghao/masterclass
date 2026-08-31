# Very easy to understand, fast python bottom up recursive solution.

**Author:** oo3Mramu
**Votes:** 6
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/676303/](https://leetcode.com/problems/plus-one-linked-list/solutions/676303/)

---

Here, we make use of the fact that, in recursion, we return to the previous caller in our stack frame.
So, when we adding, we move to the end of our list, add one(or whatever we want to).
If the val >= 10, we have a carry, which we can simply return to our previous caller and go on. 

```
class Solution:
    def plusOne(self, head: ListNode) -> ListNode:
        def helper(head):
			#When you reach the last node, add 1 to it, if carry exists, return carry.
            if not head.next:
                carry, head.val = divmod(1 + head.val, 10)
                return carry
            carry = helper(head.next)
            carry, head.val = divmod(carry + head.val, 10)
            return carry
        carry_node = ListNode(1, head)
        if helper(head): return carry_node
        return head
```