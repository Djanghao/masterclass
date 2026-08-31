# Easy C++ solution without using stack or reversing the input/output list.

**Author:** ejaz_ahmed
**Votes:** 69
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/798754/](https://leetcode.com/problems/add-two-numbers-ii/solutions/798754/)

---

The idea is to add zeros to the start of the smaller list (which is **allowed** since it doesn't tamper with the original structure of the list) such that both the lists become of equal size and then use recursion to perform digit by digit addition (starting from the last digits, obviously).

For example consider the following lists,
```
l1: 7->2->4->3
l2: 5->6->4
```

After adding zeros to ```l2``` (the smaller list), the lists become,
```
l1: 7->2->4->3
l2: 0->5->6->4
```

We now use recursion to dive to the end of both the lists and start addition from the end.
After each recursion ends, ```l1``` and ```l2``` will be waiting at the previous nodes, so an indirect reverse traversal is obtained without the use of a doubly linked list. 
The key is being able to pass ```carry``` from current recursive function to the previous recursive function, for which we can pass the reference variable ```carry``` to function calls so that the changes made to ```carry``` reflect through all the recursive calls made.

If the concept is still not clear, dry running the code using pen and paper will surely help.

(P.S - This program might seem lengthy, and although most of it stems from the "adding zero" process, I did not want to reduce the length and compromise readability.)

Happy Coding..!!

```
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        //Adding zeros to the start of the smaller list:
        ListNode *ptr1 = l1, *ptr2 = l2;
        while(ptr1 != NULL || ptr2 != NULL)
        {
            if(ptr1 == NULL)
            {
                ListNode *newNode = new ListNode(0);
                newNode->next = l1;
                l1 = newNode;
                
                ptr2 = ptr2->next;
            }
            else if(ptr2 == NULL)
            {
                ListNode *newNode = new ListNode(0);
                newNode->next = l2;
                l2 = newNode;
                
                ptr1 = ptr1->next;
            }
            else
            {
                ptr1 = ptr1->next;
                ptr2 = ptr2->next;
            }
        }
        
        //Main operation:
        int carry = 0;
        ListNode *dummy = new ListNode(-1);
        dummy->next = addTwoDigit(l1, l2, carry);
        if(carry != 0)
        {
            ListNode *newNode = new ListNode(carry);
            newNode->next = dummy->next;
            dummy->next = newNode;
        }
        
        return dummy->next;
    }
    
    ListNode* addTwoDigit(ListNode* l1, ListNode* l2, int &carry)
    {
        if(l1 == NULL && l2 == NULL)
            return NULL;
        
        ListNode *newNode = new ListNode(-1);
        newNode->next = addTwoDigit(l1->next, l2->next, carry);
        
        newNode->val = (l1->val + l2->val + carry) % 10;
        carry = (l1->val + l2->val + carry) / 10;
        
        return newNode;
    }
};
```