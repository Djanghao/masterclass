# 100% golang solution

**Author:** pranalijalgam
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/284872/](https://leetcode.com/problems/remove-linked-list-elements/solutions/284872/)

---

```
func removeElements(head *ListNode, val int) *ListNode {
	if head == nil {
		return head
	}
	curr := head

	for ;curr.Next!=nil; {
		if curr.Next.Val==val {
			curr.Next = curr.Next.Next
		} else {
			curr = curr.Next
		}
	}
	if head.Val==val {
		return head.Next
	}
	return head
}