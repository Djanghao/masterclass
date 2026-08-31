# Python concise solution with dummy nodes.

**Author:** OldCodingFarmer
**Votes:** 144
**Link:** [https://leetcode.com/problems/partition-list/solutions/29174/](https://leetcode.com/problems/partition-list/solutions/29174/)

---

        
    def partition(self, head, x):
        h1 = l1 = ListNode(0)
        h2 = l2 = ListNode(0)
        while head:
            if head.val < x:
                l1.next = head
                l1 = l1.next
            else:
                l2.next = head
                l2 = l2.next
            head = head.next
        l2.next = None
        l1.next = h2.next
        return h1.next