# 3 lines C++ (12ms) and C (4ms)

**Author:** StefanPochmann
**Votes:** 111
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/9814/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/9814/)

---

**C++**

The first line ensures that `a` is at least as good a list head as `b`, by swapping them if that's not already the case. The second line merges the remaining lists behind `a`.

    ListNode* mergeTwoLists(ListNode* a, ListNode* b) {
        if (!a || b && a->val > b->val) swap(a, b);
        if (a) a->next = mergeTwoLists(a->next, b);
        return a;
    }

---

**C**

Same solution, I just have to replace C++'s `swap`. I'm not sure whether evaluation order is standardized, but it worked and got accepted this way.

    struct ListNode* mergeTwoLists(struct ListNode* a, struct ListNode* b) {
        if (!a || b && a->val > b->val) a += b - (b = a);
        if (a) a->next = mergeTwoLists(a->next, b);
        return a;
    }