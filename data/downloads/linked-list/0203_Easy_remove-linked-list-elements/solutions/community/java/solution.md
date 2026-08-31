# 3 line recursive solution

**Author:** renzid
**Votes:** 959
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/57306/](https://leetcode.com/problems/remove-linked-list-elements/solutions/57306/)

---

    public ListNode removeElements(ListNode head, int val) {
            if (head == null) return null;
            head.next = removeElements(head.next, val);
            return head.val == val ? head.next : head;
    }