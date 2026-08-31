# 4ms Recursive Golang soultion - O(n)

**Author:** linfongi
**Votes:** 2
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/84214/](https://leetcode.com/problems/plus-one-linked-list/solutions/84214/)

---

    func plusOne(head *ListNode) *ListNode {
    	if head != nil && add(head) == 1 {
    		return &ListNode{Val: 1, Next: head}
    	}
    
    	return head
    }
    
    func add(n *ListNode) int {
    	if n.Next == nil || add(n.Next) == 1 {
    		n.Val++
    	}
    
    	defer func() { n.Val %= 10 }()
    	return n.Val / 10
    }