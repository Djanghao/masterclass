# Simple C++ Solution

**Author:** KnightWorks
**Votes:** 1
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/652057/](https://leetcode.com/problems/plus-one-linked-list/solutions/652057/)

---

```
class Solution {
public:
    ListNode* plusOne(ListNode* head) {
        
        ListNode* sentineal = new ListNode(0);
        sentineal->next = head;
        ListNode* notNine   = sentineal;
        if(head == NULL) return NULL;
        
        while(head != NULL){
            if(head->val != 9) notNine = head;
            head = head->next;
        }
        notNine->val++;
        notNine = notNine->next;
        while(notNine != NULL && notNine->val == 9 ){
            notNine->val = 0;
            notNine = notNine->next;
        }
        
        if(sentineal->val > 0){
            return sentineal;
        }
        return sentineal->next;
        
    }
};
```