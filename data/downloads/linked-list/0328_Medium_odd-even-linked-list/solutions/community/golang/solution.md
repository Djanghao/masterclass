# Very simple and elegant solution

**Author:** go-petr
**Votes:** 9
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/2732365/](https://leetcode.com/problems/odd-even-linked-list/solutions/2732365/)

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
func oddEvenList(head *ListNode) *ListNode {
    
    if head == nil {return nil}
    
    dummyEven := &ListNode{Next: head.Next}
    odd, even := head, head.Next
    
    for even != nil && even.Next != nil {
        odd.Next = even.Next
        odd = odd.Next
        even.Next = odd.Next
        even = even.Next
    }
    
    odd.Next = dummyEven.Next
    
    return head
    
}
```