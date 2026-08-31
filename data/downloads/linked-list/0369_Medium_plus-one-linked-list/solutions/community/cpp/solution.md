# 9 lines recursive *without* helper

**Author:** StefanPochmann
**Votes:** 15
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/84118/](https://leetcode.com/problems/plus-one-linked-list/solutions/84118/)

---

If the +1 was already handled without further carry, then the result is the given head node. Otherwise it's a new node (with carry value 1). In other words, a carry-node is created at the end and gets carried towards the front until it has been fully integrated.

---

**Python**

    def plusOne(self, head):
        if not head:
            return ListNode(1)
        plused = self.plusOne(head.next)
        head.val += plused != head.next
        if head.val <= 9:
            return head
        head.val = 0
        plused.next = head
        return plused

---

**C++**

    ListNode* plusOne(ListNode* head) {
        if (!head)
            return new ListNode(1);
        auto plused = plusOne(head->next);
        head->val += plused != head->next;
        if (head->val <= 9)
            return head;
        head->val = 0;
        plused->next = head;
        return plused;
    }

---

**Java**

    public ListNode plusOne(ListNode head) {
        if (head == null)
            return new ListNode(1);
        ListNode plused = plusOne(head.next);
        if (plused != head.next)
            head.val++;
        if (head.val <= 9)
            return head;
        head.val = 0;
        plused.next = head;
        return plused;
    }

---

**Ruby**

    def plus_one(head)
      head or return ListNode.new(1)
      plused = plus_one(head.next)
      head.val += 1 if plused != head.next
      return head if head.val <= 9
      head.val = 0
      plused.next = head
      plused
    end