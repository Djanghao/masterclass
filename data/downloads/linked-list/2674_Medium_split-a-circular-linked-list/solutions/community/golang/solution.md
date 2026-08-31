# [Golang] Slow and fast pointer

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/3636537/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/3636537/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func splitCircularLinkedList(list *ListNode) []*ListNode {
  slow, fast := list, list
  for fast.Next != list && fast.Next.Next != list {
    slow = slow.Next
    fast = fast.Next.Next
  }
  list2 := slow.Next
  if fast.Next == list {
    fast.Next = list2
  } else if fast.Next.Next == list {
    fast.Next.Next = list2
  }
  // Do it after changing the second list because if slow and fast are pointing 
  // to the same node (in case of only 2 elements), we don't want to break the chain
  slow.Next = list
  return []*ListNode{list, list2}
}
```