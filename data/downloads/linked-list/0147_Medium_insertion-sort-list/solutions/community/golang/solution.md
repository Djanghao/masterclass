# Clearest Go Solution

**Author:** evleria
**Votes:** 4
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/1630522/](https://leetcode.com/problems/insertion-sort-list/solutions/1630522/)

---

[Github link](https://github.com/evleria/leetcode-in-go/blob/main/problems/0147-insertion-sort-list/insertion_sort_list.go)

```
func insertionSortList(head *ListNode) *ListNode {
	dummy := new(ListNode)
	for head != nil {
		cur := dummy
		for ; cur.Next != nil && cur.Next.Val < head.Val; cur = cur.Next {
		}
		cur.Next, head.Next, head = head, cur.Next, head.Next
	}
	return dummy.Next
}
```