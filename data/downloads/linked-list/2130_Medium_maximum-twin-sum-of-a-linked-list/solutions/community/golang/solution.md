# Golang, Recursion, Pointer to Pointer

**Author:** harshawasthi90
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3249614/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3249614/)

---

# Code
```
package main

func pairSum(head *ListNode) int {
	first := head
	return rec(&first, head)
}

func rec(head **ListNode, current *ListNode) int {
	if current == nil {
		return 0
	}

	ans := rec(head, current.Next)
	ans = max(ans, current.Val+(*head).Val)
	*head = (*head).Next
	return ans
}

```