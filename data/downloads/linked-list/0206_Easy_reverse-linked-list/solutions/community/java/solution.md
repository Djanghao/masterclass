# In-place iterative and recursive Java solution

**Author:** braydenCN
**Votes:** 1016
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/58125/](https://leetcode.com/problems/reverse-linked-list/solutions/58125/)

---

    public ListNode reverseList(ListNode head) {
        /* iterative solution */
        ListNode newHead = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }
        return newHead;
    }
    
    public ListNode reverseList(ListNode head) {
        /* recursive solution */
        return reverseListInt(head, null);
    }
    
    private ListNode reverseListInt(ListNode head, ListNode newHead) {
        if (head == null)
            return newHead;
        ListNode next = head.next;
        head.next = newHead;
        return reverseListInt(next, head);
    }