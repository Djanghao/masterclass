# Linked List+bitset without Memory leaks||343 ms Beats 99.05%

**Author:** anwendeng
**Votes:** 61
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5743781/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5743781/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Remove the nodes with values seen in `nums`.
Use a bitset to record the nums; then transverse the linked list `head` to proceed.

For comparison, an unordered_set version is also implemented.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Use `bitset<100001> hasN=0` to set `x in nums` to be `hasN[x]=1` instead of using `unordered_set`.
2. Declare a dummy node `ListNode dummy(0, head)`.
3. Initialize `prev=&dummy, *tmp=NULL`
4. Use a loop to proceed `for(ListNode* curr=head; curr; curr=curr->next, delete tmp){....}` which deletes the node removed to avoid of memory leakage.
5. The iteration in the loop is:
```
if (hasN[curr->val]){ 
    prev->next = curr->next;
    tmp=curr;
}
else{
    prev = prev->next;
    tmp=NULL;
}
```
6. ` dummy.next` is the answer.
7. 2nd C++ using unordered_set is also made.

|Method|Elapsed time|Record|Memory|
|---|---|---|---|
|bitset w/o Memory leaks|343ms|99.05%|227.92MB|
|bitset with Memory leaks|346ms|98.94%|223.56MB|
|unordered_set w/o Memory leaks|454ms|47.11%|262.89MB|
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(|nums|+|head|)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(10^5)$
# Code||343 ms Beats 99.05%
```cpp []
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
    ListNode* modifiedList(vector<int>& nums, ListNode* head) {
        bitset<100001> hasN=0;
        for(int x: nums) hasN[x]=1;
        ListNode dummy(0, head);
        ListNode* prev=&dummy, *tmp=NULL;
        for(ListNode* curr=head; curr; curr=curr->next, delete tmp){
            if (hasN[curr->val]){ 
                prev->next = curr->next;
                tmp=curr;
            }
            else{
                prev = prev->next;
                tmp=NULL;
            }
        }
        return dummy.next;
    }
};
```
# C++ with unordered_set||454ms Beats 47.11%
```
class Solution {
public:
    ListNode* modifiedList(vector<int>& nums, ListNode* head) {
        unordered_set<int> hasN(nums.begin(), nums.end());
        ListNode dummy(0, head);
        ListNode* prev=&dummy, *tmp=NULL;
        for(ListNode* curr=head; curr; curr=curr->next, delete tmp){
            if (hasN.count(curr->val)){ 
                prev->next = curr->next;
                tmp=curr;
            }
            else{
                prev = prev->next;
                tmp=NULL;
            }
        }
        return dummy.next;
    }
};
```
Classical Leetcode question [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/4813267/fast-slow-pointers-care-with-memory-leaks-0ms-beats-100/)
[Please turn on English subtitles if necessary]
[https://youtu.be/OqLR3ShDALY?si=SDv3JLDQxgsfJGNf](https://youtu.be/OqLR3ShDALY?si=SDv3JLDQxgsfJGNf)