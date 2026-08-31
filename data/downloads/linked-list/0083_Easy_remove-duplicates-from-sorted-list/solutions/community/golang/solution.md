# Simple value checks which beats 100% in time and 97% in space complexity

**Author:** sushilmaxbhile
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5882206/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5882206/)

---

# Approach
Simple value checks which beats 100% in time and 97% in space complexity

# Complexity
- Time complexity:
0 ms, Beats 100.00%

- Space complexity:
3.08 MB, Beats 91.91%

# Code
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	temp := head
	if temp == nil || temp.Next == nil {
		return head
	}
	for temp.Next != nil {
		if temp.Val == temp.Next.Val {
			temp.Next = temp.Next.Next
		} else {
			temp = temp.Next
		}
	}
	return head
}
```