# Easy approch using vector TS O(N) and SC O(N)

**Author:** AshuChauhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526759/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526759/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        vector<int> v;
        ListNode* temp = head;
        while(temp!=NULL){
            v.push_back(temp->val);
            temp = temp->next;
        }
        int n = v.size();
        swap(v[k-1], v[n-k]);
        ListNode* ans = new ListNode(-1);
        temp = ans;
        for(auto x:v){
            ListNode* op = new ListNode(x);
            temp->next = op;
            temp = op;
        }
        return ans->next;
    }
};
```