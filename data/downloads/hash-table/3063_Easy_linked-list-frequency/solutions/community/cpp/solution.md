# C++ using hash map

**Author:** smakarenko
**Votes:** 6
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4840220/](https://leetcode.com/problems/linked-list-frequency/solutions/4840220/)

---


# Approach
Build frequency hash map while scanning through input linked list and use hash map to construct resulting linked list

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

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
    ListNode* frequenciesOfElements(ListNode* head) {
        unordered_map<int, int> freqs;
        while (head != nullptr) {
            freqs[head->val]++;
            head = head->next;
        }
        for (auto& [_, freq] : freqs) {
            head = new ListNode(freq, head);
        }
        return head;
    }
};
```