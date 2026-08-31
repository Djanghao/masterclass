# Problems with Python3 and Multiple Solutions

**Author:** batman_005
**Votes:** 196
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/465094/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/465094/)

---

**Python 2 Solution:**
```
def mergeKLists_Python2(self, lists):
	h = []
	head = tail = ListNode(0)
	for i in lists:
		if i:
			heapq.heappush(h, (i.val, i))

	while h:
		node = heapq.heappop(h)[1]
		tail.next = node
		tail = tail.next
		if node.next:
			heapq.heappush(h, (node.next.val, node.next))

	return head.next
```

**Python 3:** 
The above solution works fine with Python 2.However, with Python3 it gives Type Error:
TypeError: '<' not supported between instances of 'ListNode' and 'ListNode'
**This error occurs because the cmp() special method is no longer honored in Python 3**

Here are the two ways we can solve this problem:
**a) Implement eq, lt methods** 
	
One of the solution would be to provide `__eq__ and __lt__` method implementation to `ListNode` class
```
def mergeKLists_Python3(self, lists):
	ListNode.__eq__ = lambda self, other: self.val == other.val
	ListNode.__lt__ = lambda self, other: self.val < other.val
	h = []
	head = tail = ListNode(0)
	for i in lists:
		if i:
			heapq.heappush(h, (i.val, i))

	while h:
		node = heapq.heappop(h)[1]
		tail.next = node
		tail = tail.next
		if node.next:
			heapq.heappush(h, (node.next.val, node.next))

	return head.next
```

**b) Fix heapq** 

The problem while adding `ListNode` objects as tasks is that the Tuple comparison breaks for (priority, task) pairs if the priorities are equal and the tasks do not have a default comparison order. The solution is to store entries as 3-element list including the priority, an entry count, and the task.
The entry count serves as a tie-breaker so that two tasks with the same priority are returned in the order they were added.
And since no two entry counts are the same, the tuple comparison will never attempt to directly compare two tasks.

```
def mergeKLists_heapq(self, lists):
	h = []
	head = tail = ListNode(0)
	for i in range(len(lists)):
		heapq.heappush(h, (lists[i].val, i, lists[i]))

	while h:
		node = heapq.heappop(h)
		node = node[2]
		tail.next = node
		tail = tail.next
		if node.next:
			i+=1
			heapq.heappush(h, (node.next.val, i, node.next))

	return head.next
```
	