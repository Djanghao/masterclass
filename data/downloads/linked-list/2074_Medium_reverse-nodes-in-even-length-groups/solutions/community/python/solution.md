# Python Reverse Linked List O(1) Space

**Author:** WangQiuc
**Votes:** 29
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/1577032/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/1577032/)

---

Similiar to [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/), reverse a range of linked list when the range has an even length
```
def reverseEvenLengthGroups(head):
	prev = head
	d = 2 # the head doesn't need to be reversed anytime so starts with length 2
	while prev.next:
		node, n = prev, 0
		for _ in range(d):
			if not node.next:
				break
			n += 1
			node = node.next
		if n & 1:  # odd length
			prev = node
		else:      # even length
			node, rev = prev.next, None
			for _ in range(n):
				node.next, node, rev = rev, node.next, node
			prev.next.next, prev.next, prev = node, rev, prev.next
		d += 1
	return head
```

Cheat during the contest to save time, convert linked list to a list and then just do slice reversion.
Of course cost extra O(n) space
```
def reverseEvenLengthGroups(self, head):
	a = []
	node = head
	while node:
		a.append(node.val)
		node = node.next
	i, d, n = 0, 1, len(a)
	while i < n:
		if min(d, n-i) & 1 == 0:
			a[i:i+d] = a[i:i+d][::-1]
		i += d
		d += 1
	node = head
	for x in a:
		node.val = x
		node = node.next
	return head
```