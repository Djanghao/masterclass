# (C++):  ~99% Faster Iterative Solution || Time: O(n) || Space: O(1)

**Author:** venomous_spider
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4651084/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4651084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
**Traversal and Deletion:**

The code traverses the given singly-linked list (head) while keeping track of two counters: mcnt for counting nodes to be kept, and ncnt for counting nodes to be deleted.
When mcnt reaches the value of m, it enters a loop to delete the next n nodes.

**Deletion Loop:**

Inside the loop, a temporary node tmpNode is set to the current node (curr) to mark the start of the nodes to be deleted.
It then iterates n+1 times (including the initial node), effectively skipping n nodes to be deleted.
After the loop, the next pointer of the current node (curr->next) is updated to point to the node after the nodes to be deleted (tmpNode).

**Reset Counters:**

The counters mcnt and ncnt are reset to 0 after the deletion loop to restart the process for the next set of nodes to be kept and deleted.
Continue Traversal:

The traversal continues until the end of the linked list is reached.


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
    ListNode* deleteNodes(ListNode* head, int m, int n) {
        if (!head) {
            return head; 
        }

        int mcnt = 0, ncnt = 0;
        ListNode* curr = head;
        ListNode* tmpNode;
        
        while (curr != nullptr) {
            mcnt += 1;
            if (mcnt == m) {
                tmpNode = curr;
                while (tmpNode && ncnt != n+1) {
                    ncnt += 1;
                    tmpNode = tmpNode->next;
                }
                curr->next = tmpNode;
                mcnt = 0;
                ncnt = 0;
                curr = curr->next;
            }
            else {
                curr = curr->next;
            }
        }
        return head;
    }
};
```