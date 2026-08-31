# ✔️ [Python3] I HATE LINKED LISTS, щ（ﾟДﾟщ）, Not Explained

**Author:** artod
**Votes:** 183
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1774318/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1774318/)

---

**UPVOTE if you like (\uD83C\uDF38-_-'), If you have any question, feel free to ask.**

Just a bunch of placeholders, edge cases, and strange errors about a cycle meanwhile :(

prev cur cur porev next cur prev pasdfaslfjgnzdsf;ljgfsdaz;lkjkfgn

Time: **O(n)** - iterate
Space: **O(1)**

```
def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
	if not head: return head

	prev, cur, ans = None, head, head.next
	while cur and cur.next:
		adj = cur.next
		if prev: prev.next = adj

		cur.next, adj.next = adj.next, cur
		prev, cur = cur, cur.next

	return ans or head
```

**UPVOTE if you like (\uD83C\uDF38-_-'), If you have any question, feel free to ask.**