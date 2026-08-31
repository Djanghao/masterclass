# Golang concise solution using two pointers

**Author:** redtree1112
**Votes:** 7
**Link:** [https://leetcode.com/problems/rotate-list/solutions/22756/](https://leetcode.com/problems/rotate-list/solutions/22756/)

---

To simplify, let's assume `k` is less than a number of ListNode first.  
Then we need to do is let a fast pointer move to the `k` th node first, then set a slow pointer to the head and move both slow and fast pointers until the fast pointer reach to the end.

As a result, we can get the situation like below:
```
+---+    +---+    +---+    +---+    +---+    +---+
|   +--->+   +--->+   +--->+   +--->+   +--->+   |
+---+    +---+    +---+    +---+    +---+    +---+
                   slow                       fast
```
fast is on the last node and slow is `k` th point before the fast one. So we can arrange the node like so that:
1. a new head is positioned at the next node of slow.
2. `slow.Next` should `nil`, means an end.
3. `fast.Next` should an original head.

So...remaining tricky part is when `k` is more than a length of the list. To handle this, I calculate the remaining rotation number and call another `rotateRight`.

```
func rotateRight(head *ListNode, k int) *ListNode {
	if k == 0 || head == nil {
		return head
	}

	slow, fast := head, head
	for i := 0; i < k; i++ {
		if fast.Next == nil {
			return rotateRight(head, k%(i+1))
		}
		fast = fast.Next
	}

	for fast.Next != nil {
		slow, fast = slow.Next, fast.Next
	}
	newHead := slow.Next
	slow.Next, fast.Next = nil, head
	return newHead
}
```