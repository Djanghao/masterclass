# Simple iterative Python 6 lines, 60 ms

**Author:** zhuyinghua1203
**Votes:** 178
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/28621/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/28621/)

---

    def deleteDuplicates(self, head):
        cur = head
        while cur:
            while cur.next and cur.next.val == cur.val:
                cur.next = cur.next.next     # skip duplicated node
            cur = cur.next     # not duplicate of current node, move to next node
        return head