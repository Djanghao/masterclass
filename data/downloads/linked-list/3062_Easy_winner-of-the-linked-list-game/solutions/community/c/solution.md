# C Solution

**Author:** heisenb_g
**Votes:** 1
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4802776/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4802776/)

---

```
char* gameResult(struct ListNode* head) {
    struct ListNode *cur = head;
    int even = 0, odd = 0;
    
    while(cur && cur->next) {
        if(cur->val > cur->next->val) 
            even++;
        else if(cur->val < cur->next->val) 
            odd++;
        else 
            even++, odd++;
        
        cur = cur->next->next;
    }
    
    char *result = NULL;
    if(even > odd)
        result = "Even";
    else if(odd > even)
        result = "Odd";
    else 
        result = "Tie";
    
    return result;
}
```