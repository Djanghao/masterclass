# Simple & Clean C++ code with comments

**Author:** shlom
**Votes:** 67
**Link:** [https://leetcode.com/problems/rotate-list/solutions/883486/](https://leetcode.com/problems/rotate-list/solutions/883486/)

---

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        auto iter = head;
        auto len = 1;
        while (iter->next != nullptr) {
            iter = iter->next; ++len;
        }
        // close the list (create a ring)
        iter->next = head;
        iter = head;
        // find one element before the new head
        for (int i = 0; i < len - (k % len) - 1; ++i) {
            iter = iter->next;
        }
        head = iter->next;
        // open the list (break the ring)
        iter->next = nullptr;
        return head;
    }
};
```