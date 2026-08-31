# C++ Easy Explanation O(1) Solution

**Author:** mirakiii
**Votes:** 99
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/1354873/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/1354873/)

---

Basically we are just copying node's next value to itself
Input: 1->2->3->4->5 ->6
given node = 4
output: 1->2->3->5->6

**1.** in first step:  node->val becomes node's next ki value i.e 4 becomes 5
1->2->3->5->5->6
**2.** in 2nd step: node points to node's next next i.e 5->6
1->2->3->5->6




```
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};
```