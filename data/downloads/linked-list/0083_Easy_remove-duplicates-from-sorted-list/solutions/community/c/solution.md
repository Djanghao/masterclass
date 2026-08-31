# (C++ / Python / C / Java) ✅ Easiest Solution O(n) Time

**Author:** gus7890
**Votes:** 98
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3257316/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3257316/)

---

# C++
```
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* temp=head;
        while (temp&&temp->next)
        {
            if (temp->next->val==temp->val)
            {
                temp->next=temp->next->next;
                continue;
            }
            temp=temp->next;
        }
        return head;
    }
};
```

# Python
```
class Solution(object):
    def deleteDuplicates(self, head):
        temp = head
        while (temp and temp.next):
            if (temp.next.val == temp.val):
                temp.next = temp.next.next
                continue
            temp = temp.next
        return head
        
```

# C
```
struct ListNode* deleteDuplicates(struct ListNode* head) {
    struct ListNode* temp=head;
    while (temp&&temp->next)
    {
        if (temp->next->val==temp->val)
        {
            temp->next=temp->next->next;
            continue;
        }
        temp=temp->next;
    }
    return head;
}
```

# Java
```
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode temp = head;
        while (temp != null && temp.next != null)
        {
            if (temp.next.val==temp.val)
            {
                temp.next=temp.next.next;
                continue;
            }
            temp=temp.next;
        }
        return head;
    }
}
```

Upvote if this helps please \uD83D\uDE42
