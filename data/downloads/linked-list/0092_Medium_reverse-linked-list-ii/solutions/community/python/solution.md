# Python one pass iterative solution

**Author:** Google
**Votes:** 166
**Link:** [https://leetcode.com/problems/reverse-linked-list-ii/solutions/30672/](https://leetcode.com/problems/reverse-linked-list-ii/solutions/30672/)

---

The idea is simple and intuitive: find linkedlist [m, n], reverse it, then connect m with n+1, connect n with m-1

    
    class Solution:
        # @param head, a ListNode
        # @param m, an integer
        # @param n, an integer
        # @return a ListNode
        def reverseBetween(self, head, m, n):
            if m == n:
                return head
    
            dummyNode = ListNode(0)
            dummyNode.next = head
            pre = dummyNode
    
            for i in range(m - 1):
                pre = pre.next
            
            # reverse the [m, n] nodes
            reverse = None
            cur = pre.next
            for i in range(n - m + 1):
                next = cur.next
                cur.next = reverse
                reverse = cur
                cur = next
    
            pre.next.next = cur
            pre.next = reverse
    
            return dummyNode.next