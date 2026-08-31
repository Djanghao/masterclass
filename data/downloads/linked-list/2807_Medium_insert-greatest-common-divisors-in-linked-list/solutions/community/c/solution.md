# One Pass

**Author:** votrubac
**Votes:** 15
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3868090/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3868090/)

---

**C++**
```cpp
ListNode* insertGreatestCommonDivisors(ListNode* head) {
    for (auto n = head; n->next != nullptr; n = n->next->next)
        n->next = new ListNode(gcd(n->val, n->next->val), n->next);
    return head;
}
```