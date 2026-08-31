# slow/fast c solution

**Author:** nameldi
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/3511830/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/3511830/)

---

```
struct ListNode** splitCircularLinkedList(struct ListNode* list){
    struct ListNode* fast = list;
    struct ListNode* slow = list;
    /* test case:
	    1 5 7 9 11 
        s s s
        f   f   f
        1 5 7 9 11 13
        s s s 
        f   f   f    
    */
    while(fast->next != list && fast->next->next != list){
        slow = slow->next;
        fast = fast->next->next;
    }
    if(fast->next != list)
        fast = fast->next;
    /* answer should be 2 circular linked lists */
    struct ListNode** ans = (struct ListNode**)calloc(2, sizeof(struct ListNode*));
    fast->next = slow->next;
    slow->next = list;
    ans[0] = slow->next;
    ans[1] = fast->next;
    return ans;
}
```