# 3 Line JAVA recursive solution

**Author:** wen587sort
**Votes:** 386
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/28625/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/28625/)

---

This solution is inspired by renzid https://leetcode.com/discuss/33043/3-line-recursive-solution

    public ListNode deleteDuplicates(ListNode head) {
            if(head == null || head.next == null)return head;
            head.next = deleteDuplicates(head.next);
            return head.val == head.next.val ? head.next : head;
    }

Enjoy!