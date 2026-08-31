# 【golang】my weird solution

**Author:** kw1031
**Votes:** 9
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/1696193/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/1696193/)

---

The concept of my solution is "**when a list is created, the memory stack is continuous.**" (maybe this is not always true ?)
Therefore, I can search and check whether the memory address is **upscent**. If not, then return the next address of the current node.
```go
func detectCycle(head *ListNode) *ListNode {
    for head != nil {
        if uintptr(unsafe.Pointer(head.Next)) > uintptr(unsafe.Pointer(head)) {
            head = head.Next
        }else {
            return head.Next
        }
    }
    return head
}
```