# C++ / Java Beats 100%

**Author:** Cosmopolitan
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1536944/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1536944/)

---

Iterate over the list, when encounter the negative value, move it to the head.

Efficiency is achieved by using only one comparison at each iteration.

**Java:**
```
    public ListNode sortLinkedList(ListNode head) {
        ListNode headCpy = head, prev = head;
        head = head.next; // move one step to avoid checking for prev != null
        while (head != null)
            if (head.val < 0) { // replace head
                prev.next = head.next;
                head.next = headCpy;
                headCpy = head;
                head = prev.next;
            } else {
                prev = head;
                head = head.next;
            }
        return headCpy;
    }
```
**C++:**
```
    ListNode* sortLinkedList(ListNode* head) {
        ListNode *headCpy = head, *prev = head;
        head = head->next; // move one step to avoid checking for prev != null
        while (head)
            if (head->val < 0) { // replace head
                prev->next = head->next;
                head->next = headCpy;
                headCpy = head;
                head = prev->next;
            } else {
                prev = head;
                head = head->next;
            }
        return headCpy;
    }