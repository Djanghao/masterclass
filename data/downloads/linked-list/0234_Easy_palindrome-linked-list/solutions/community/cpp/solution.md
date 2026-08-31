# 3 Approaches (Step by Step) || don't need any other solution after watching this🤞

**Author:** Srajan_Agrawal
**Votes:** 528
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/3307045/](https://leetcode.com/problems/palindrome-linked-list/solutions/3307045/)

---

# Check if the linked list is palindrome or not.

Honestly Speakaing (Maja aa gya)
I solved this problem first time without using any reference just by finding the different ways to solve it.
At the first I thought like palindrome hii to check krna hai then just traverse kro aur usko kisi variable main store krke uska reverse lekar check kr lo. Such as
```
if list is
1->2->2->1
then temp = 1221
r_temp = 1221 (temp ka reverse)
and then compare kiya if(temp == r_temp) then
return true
else{
false return krdo
}
```
But But But.................
Any problems find ?
See here the no. of nodes in the linked list can vary from [1,10^5] and there is no way to store these many value in the variable.

It will go out of range of long long int or any other data type then what's next?

# Second Approach (Reverse the list)
Here I thought like what if I will reverse the whole list and then compare each and every element then if it is not equal return false otherwise return true.

Here is the code :

# Code
```
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // Some Brute Force Steps to follow
        // 1) Reverse the list and store it in r_head;
        // and then compare head->val and r_head->val if equal move both the pointers otherwise if not equal return false.
        // When the loop will be executed fully retrun true
         if(head == NULL || head->next == NULL){
            return (head);
        }
        ListNode *r_head = NULL;
        ListNode *ptr = head;
        while(ptr!=NULL){
            ListNode *temp = new ListNode(ptr->val);
            temp ->next = r_head;
            r_head = temp;
            ptr = ptr->next;
        }
        while(head && r_head){
            if(head->val != r_head->val){
                return false;
            }
            head = head->next;
            r_head = r_head->next;
        }
        return true;
    }
};
```

# Third Approach (Reverse the end half)
Here I will follow these steps 
- (Base Case) If head == NULL || head->next == NULL Return true;
 ```
if(head == NULL || head->next == NULL){
    return (head);
}
```
- Find the middle element (using two pointers)
- Reverse the end half
- Compare the start and reverse end half (if all equal return true)
- Otherwise return false
```
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // Steps to follow:
        // 1_) Find the middle element
        ListNode *slow = head, *fast = head;
        while(fast!=NULL && fast->next !=NULL){
            slow = slow->next;
            fast = fast->next->next;
        }
        // 2_) if the no of nodes are odd then move slow to one point
        if(fast != NULL && fast->next == NULL){
            slow = slow->next;
        }
        //3_) Reverse the end half
        ListNode *prev = NULL;
        ListNode *temp = NULL;
        while(slow != NULL && slow->next != NULL){
            temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }
        if(slow != NULL){
            slow->next = prev;
        }
        //4_) Compare the start half and end half if found any inequality then return false otherwise return true.
        fast = head;
        while(slow && fast){
            if(slow->val != fast->val){
                return false;
            }
            slow = slow->next;
            fast = fast->next;
        }
        return true;

    }
};
```
![upvoteCatImage.jpeg](./images/0.jpeg)

Please Upvote it. It takes a lot of enery and time creating it.
