# C++ / Python mid and reverse solution

**Author:** TovAm
**Votes:** 258
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/1680417/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/1680417/)

---

**C++ :**

```
int pairSum(ListNode* head) {
	ListNode* slow = head;
	ListNode* fast = head;
	int maxVal = 0;

	// Get middle of linked list
	while(fast && fast -> next)
	{
		fast = fast -> next -> next;
		slow = slow -> next;
	}

	// Reverse second part of linked list
	ListNode *nextNode, *prev = NULL;
	while (slow) {
		nextNode = slow->next;
		slow->next = prev;
		prev = slow;
		slow = nextNode;
	}

	// Get max sum of pairs
	while(prev)
	{
		maxVal = max(maxVal, head -> val + prev -> val);
		prev = prev -> next;
		head = head -> next;
	}

	return maxVal;
}
```


**Python :**

```
def pairSum(self, head: Optional[ListNode]) -> int:
	slow, fast = head, head
	maxVal = 0

	# Get middle of linked list
	while fast and fast.next:
		fast = fast.next.next
		slow = slow.next

	# Reverse second part of linked list
	curr, prev = slow, None

	while curr:       
		curr.next, prev, curr = prev, curr, curr.next   

	# Get max sum of pairs
	while prev:
		maxVal = max(maxVal, head.val + prev.val)
		prev = prev.next
		head = head.next

	return maxVal
```

**Like it ? please upvote !**