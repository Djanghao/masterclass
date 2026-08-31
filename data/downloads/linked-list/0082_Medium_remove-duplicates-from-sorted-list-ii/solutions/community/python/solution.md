# Python in-place solution with dummy head node.

**Author:** OldCodingFarmer
**Votes:** 259
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/28336/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/28336/)

---

        
    def deleteDuplicates(self, head):
        dummy = pre = ListNode(0)
        dummy.next = head
        while head and head.next:
            if head.val == head.next.val:
                while head and head.next and head.val == head.next.val:
                    head = head.next
                head = head.next
                pre.next = head
            else:
                pre = pre.next
                head = head.next
        return dummy.next