# Beats 98% users. no extra space.

**Author:** aniket_0311
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4802536/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4802536/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* sortLinkedList(ListNode* head) {
        if(!head || !head->next)
            return head;
        
        ListNode* first = head;
        ListNode* curr = head;
        ListNode* prev = head;
        ListNode* next = head;
        while(curr) {
            if(curr->val < 0) {
                next = curr->next;
                curr->next = first;
                prev->next = next;
                first = curr;
                curr = next;
            }else {
                next = curr->next;
                prev = curr;
                curr = curr->next;
                
            }
        }
        return first;
    }
};
```