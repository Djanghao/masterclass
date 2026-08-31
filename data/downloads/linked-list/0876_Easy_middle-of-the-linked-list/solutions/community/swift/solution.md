# Two Swift 4ms clean solutions

**Author:** aminSiddiqui
**Votes:** 21
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/568973/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/568973/)

---

#### Solution #1: O(n)

Converting LinkList to an Array in O(n).
Then using simple math we can return the center array element.

```
func middleNode(_ head: ListNode?) -> ListNode? {
    var found = [ListNode?]()
	var node = head
	
    while(node != nil) {
        found.append(node)
        node = node?.next
    }
	
    return found[found.count/2]
}
```

#### Solution #2: O(n/2)

Using a fast/slow pointer, the fast pointer moves 2 nodes ahead in one loop while the slow pointer moves one node in the same time.
By the time the fast pointer reaches the end, the slow pointer is half-way across, i.e. at the center, which we need to return.

```
func middleNode(_ head: ListNode?) -> ListNode? {
    var (fast,slow) = (head, head)
	
    while(fast?.next != nil) {
        fast = fast?.next?.next
        slow = slow?.next
    }
	
    return slow
}
```