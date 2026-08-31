# [C++] One Liner, Beats 100% on Time and Space (No Explanation Needed)

**Author:** leetcodegrindtt
**Votes:** 12
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/441065/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/441065/)

---

```
class Solution {
public:
    void printLinkedListInReverse(ImmutableListNode* head) {
        return head ? printLinkedListInReverse(head->getNext()), head->printValue() :  void();
    }
};