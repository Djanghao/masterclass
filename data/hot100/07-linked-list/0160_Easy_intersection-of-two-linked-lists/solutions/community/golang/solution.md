# Go - That's how you do it in the real world, no fancy stuff.

**Author:** Hessz
**Votes:** 11
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3016868/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3016868/)

---

"Simplicity is the ultimate sophistication"

```
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    seen := make(map[*ListNode]bool)
    for n := headA; n != nil; n = n.Next {
        seen[n] = true
    }

    for n := headB; n != nil; n = n.Next {
        if seen[n] {
            return n
        }
    }
    return nil
}
```