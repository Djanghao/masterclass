# ✅ Easiest TypeScript Solution (3 Liners 99%)

**Author:** mlajkim
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/3345548/](https://leetcode.com/problems/remove-linked-list-elements/solutions/3345548/)

---


# Code (3 Liners 99%)
- If `head` is null, we return `null`
- If `head`'s `val` is the excluding target, you recursively `removeElement()` of `head.next`
- If is not the excluding target, you return the head, and make sure `head.next` is `removeElements()` filtered `ListNode`

```
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null
    if (head.val === val) return removeElements(head.next, val)
    return (head.next = removeElements(head.next, val), head) 
};
```

# Tips
- If you solve a problem like this, make sure to think if you can reuse the given function(s).