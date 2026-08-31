# Go one-pass with two pointers

**Author:** vashik
**Votes:** 16
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1070524/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1070524/)

---

```
func swapNodes(head *ListNode, k int) *ListNode {
    kthFromStart, kthFromEnd := head, head
    for node := head; node != nil; node = node.Next {
        k--
        if k == 0 {
            kthFromStart = node
        }
        if k < 0 {
            kthFromEnd = kthFromEnd.Next
        }
    }
    kthFromStart.Val, kthFromEnd.Val = kthFromEnd.Val, kthFromStart.Val
    return head
}
```