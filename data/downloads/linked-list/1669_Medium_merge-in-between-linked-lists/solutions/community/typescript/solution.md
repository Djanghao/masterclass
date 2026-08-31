# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4899417/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4899417/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

# Code
```
class Solution {
public:
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) 
    {
        ListNode* tmp = list1, *tmp2 = list2;
        while(b--) tmp = tmp->next;
        while(tmp2->next) tmp2 = tmp2->next;
        tmp2->next = tmp->next;

        a--;
        tmp = list1;
        while(a--) tmp = tmp->next;

        tmp->next = list2;
        return list1;
    }
};
```