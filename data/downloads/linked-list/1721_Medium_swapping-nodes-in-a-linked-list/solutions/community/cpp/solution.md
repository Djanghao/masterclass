# C++ 🔥 One-Pass 🔥 Easy and Explained approach 🔥

**Author:** ribhav_32
**Votes:** 196
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525152/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525152/)

---

# **PLEASE UPVOTE\uD83D\uDC4D**
# Approach
- ##### To solve this problem in one pass, we can use a two-pointer approach.
- ##### First, we can initialize two pointers, left_ptr and right_ptr, both pointing to the head of the linked list. We can then move the right_ptr k-2 steps forward.

- ##### After this, we can move both left_ptr and right_ptr forward simultaneously until right_ptr reaches the end of the list.
- ##### At this point, left_ptr will be pointing to the kth node from the beginning, and end_ptr will be pointing to the kth node from the end.

- ##### We can then swap the values of these two nodes, and return the head of the linked list.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# **PLEASE UPVOTE\uD83D\uDC4D**
# Code
```
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *left_ptr = head, *right_ptr = head;
        for (int i = 0; i < k-1; i++) {
            right_ptr = right_ptr->next;
        }
        
        ListNode *end_ptr = right_ptr;
        while (right_ptr->next) {
            left_ptr = left_ptr->next;
            right_ptr = right_ptr->next;
        }
        
        swap(end_ptr->val, left_ptr->val);
        
        return head;
    }
};
```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)