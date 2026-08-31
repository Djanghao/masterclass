# [C++] O(N) solution using hashing. [Detailed Explanation]

**Author:** cryptx_
**Votes:** 10
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/685304/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/685304/)

---

```
/*
    https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/submissions/
    
    Idea is that whenever consecutive 0-sum zublist appears, the cumulative sum becomes the same as
    it was just before the start of that sublist.
    We use a hash table to update the latest position of each cumulative sum.
    Then we again start the traversal computing cumulative sum and checking what is the
    latest position where it occurs and delete the sublist in between.
*/

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
    // Deletes a linked list
    void deleteList(ListNode* head) {
        ListNode *nextptr= nullptr;
        while(head) {
            nextptr = head->next;
            //delete head;
            head = nextptr;
        }
    }
    
    // TC: O(N)
    // SC: O(N)
    ListNode* removeZeroSumSublists(ListNode* head) {
        // (sum: pos): cumulative sum till a given node
        unordered_map<int, ListNode*> sum_pos;
        ListNode *start = nullptr, *end = nullptr, 
                *after_start = nullptr, *after_end = nullptr;
        long long sum = 0;
        
        // dummy head for easier head ops
        ListNode *dummy = new ListNode(0);
        dummy->next = head;
        
        // initial sum 0 for position before head
        sum_pos[0] = dummy;
        
        // Store the cumulative sum till each node,
        // for the same cumulative sum we store the latest position
        ListNode *curr = head;
        while(curr) {
            sum += curr->val;
            sum_pos[sum] = curr;
            curr = curr->next;
        }
        
        // We compute the cumulative sum again, this time
        // for each sum we check that farthest position where it is 
        // found again and delete the list till that position
        sum = 0;
        curr = dummy;
        while(curr) {
            sum += curr->val;
            // check the position this sum is last seen
            ListNode *last_seen_pos = sum_pos[sum];
            // delete the sublist to avoid memory leaks
            after_start = curr->next;
            after_end = last_seen_pos->next;
            // when it is not the same node
            // and trhere is somethign to delete
            if(last_seen_pos != curr) {
                last_seen_pos->next = nullptr;
                deleteList(after_start);
            }
            
            curr->next = after_end;
            curr = curr->next;
        }
        
        head = dummy->next;
        delete dummy;
        return head;
    }
};
```