# Golang Solution | No Reverse | Recursion | Easy to Understand | O(max(n1,n2)))

**Author:** annop
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/1280249/](https://leetcode.com/problems/add-two-numbers-ii/solutions/1280249/)

---

```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(n1 *ListNode, n2 *ListNode) *ListNode {
	l1 := Len(n1)
	l2 := Len(n2)


	// n1 must be longer than n2
	if l1 < l2 {
		n1,n2 = n2,n1
		l1,l2 = l2,l1
	}
	// keep head node, will use it later
	var head = n1

	// traverse n1 until it reaches the same position as n2
	for l1 != l2 {
		n1 = n1.Next
		l1--
	}

	// add n2.Val to n1.Val
	for n1 != nil {
		n1.Val += n2.Val
		n1 = n1.Next
		n2 = n2.Next
	}

	// keep asking the amount of carry from next node and return the carry of current node
	carry := GetMyCarry(head)

	// if head node has carry, then we need to add a new node
	if carry > 0 {
		head = &ListNode{
			Val: carry,
			Next: head,
		}
	}
	return head
}

func GetMyCarry(n *ListNode) int {
	if n == nil {
		return 0
	}
	// find the previous carry
	carry := GetMyCarry(n.Next)
	n.Val += carry
	// if the value + previous carry is less than 10, then this node doesn't has carry.
	if n.Val < 10 {
		return 0
	}
	// otherwise, calculate and return its carry
	carry = n.Val / 10
	n.Val %= 10
	return carry
}

func Len(n *ListNode) int {
	var count int
	for n != nil {
		n = n.Next
		count++
	}
	return count
}

```