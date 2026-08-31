# Succinct iterative Python, O(n) time O(1) space

**Author:** zhuyinghua1203
**Votes:** 346
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/11491/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/11491/)

---

Use a dummy head, and

l, r :          define reversing range

pre, cur :  used in reversing, standard reverse linked linked list method

jump :      used to connect last node in previous k-group to first node in following k-group

    def reverseKGroup(self, head, k):
        dummy = jump = ListNode(0)
        dummy.next = l = r = head
        
        while True:
            count = 0
            while r and count < k:   # use r to locate the range
                r = r.next
                count += 1
            if count == k:  # if size k satisfied, reverse the inner linked list
                pre, cur = r, l
                for _ in range(k):
                    cur.next, cur, pre = pre, cur.next, cur  # standard reversing
                jump.next, jump, l = pre, l, r  # connect two k-groups
            else:
                return dummy.next