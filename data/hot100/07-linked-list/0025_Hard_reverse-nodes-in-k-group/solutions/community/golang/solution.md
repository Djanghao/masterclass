# Go solution

**Author:** ganesh
**Votes:** 10
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1346680/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1346680/)

---

https://github.com/ganeshskudva/Leetcode-Golang
```
func reverseKGroup(head *ListNode, k int) *ListNode {
	node, cnt := head, 0
	for cnt < k {
		if node == nil {
			return head
		}
		node = node.Next
		cnt++
	}

	prev := reverseKGroup(node, k)
	for cnt > 0 {
		next := head.Next
		head.Next = prev
		prev = head
		head = next
		cnt--
	}

	return prev
}
```