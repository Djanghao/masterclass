# Simulation

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4796790/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4796790/)

---

# Intuition
Just simulation.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
    string gameResult(ListNode* head) {
        int even = 0, odd = 0;
        for (; head; head = head->next->next) {
            if (head->val > head->next->val) {
                ++even;
            } else if (head->val < head->next->val) {
                ++odd;
            }
        }
        if (odd == even) return "Tie";
        return odd > even ? "Odd" : "Even";
        
    }
};
```