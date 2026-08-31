# SSS: Swift Simple Solution (Iterative & Recursive Approaches) ★★

**Author:** mishe1e
**Votes:** 9
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/1963782/](https://leetcode.com/problems/reverse-linked-list/solutions/1963782/)

---

**Iterative Approach**

```
func reverseList(_ head: ListNode?) -> ListNode? {
	guard let head = head else { return nil }
	guard var current = head.next else { return head }

	var prev = head
	prev.next = nil

	while let next = current.next {
		current.next = prev
		prev = current
		current = next
	}
	current.next = prev

	return current
}
```

or

```
func reverseList(_ head: ListNode?) -> ListNode? {
    var prev = head, node = head?.next
    prev?.next = nil

    while node != nil {
        let next = node!.next
        node!.next = prev
        prev = node
        node = next
    }

    return prev
}
```

**Recursive Approach** \uD83D\uDCA3 *my brain exploded* \uD83E\uDD2F

```
func reverseList(_ head: ListNode?) -> ListNode? {
	guard var current = head else { return nil }
	guard let next = current.next else { return current }

	let newHead = reverseList(next)
	next.next = current
	current.next = nil

	return newHead
}
```
or

```
func reverseList(_ head: ListNode?) -> ListNode? {
    guard head != nil, head?.next != nil else { return head }

    let tail = reverseList(head!.next)
    head!.next?.next = head
    head!.next = nil

    return tail
}
```
