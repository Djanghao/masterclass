# ✅ C++ || Merge Sort || 2 Pointer || Easy To Understand

**Author:** knockcat
**Votes:** 579
**Link:** [https://leetcode.com/problems/sort-list/solutions/1795126/](https://leetcode.com/problems/sort-list/solutions/1795126/)

---

# 148. Sort List
**KNOCKCAT**
```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Please Upvote if it helps\u2B06\uFE0F
5. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09 
```
[LeetCode](https://github.com/knockcat/Leetcode)    **Link to LeetCode Repository**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**EXPLANATION**
```
1. Using 2pointer / fast-slow pointer find the middle node of the list.
2. Now call mergeSort for 2 halves.
3. Merge the Sort List (divide and conqueror Approach)
```

**CODE WITH EXPLANATION**
```
							// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        //If List Contain a Single or 0 Node
        if(head == NULL || head ->next == NULL)
            return head;
        
        
        ListNode *temp = NULL;
        ListNode *slow = head;
        ListNode *fast = head;
        
        // 2 pointer appraoach / turtle-hare Algorithm (Finding the middle element)
        while(fast !=  NULL && fast -> next != NULL)
        {
            temp = slow;
            slow = slow->next;          //slow increment by 1
            fast = fast ->next ->next;  //fast incremented by 2
            
        }   
        temp -> next = NULL;            //end of first left half
        
        ListNode* l1 = sortList(head);    //left half recursive call
        ListNode* l2 = sortList(slow);    //right half recursive call
        
        return mergelist(l1, l2);         //mergelist Function call
            
    }
    
    //MergeSort Function O(n*logn)
    ListNode* mergelist(ListNode *l1, ListNode *l2)
    {
        ListNode *ptr = new ListNode(0);
        ListNode *curr = ptr;
        
        while(l1 != NULL && l2 != NULL)
        {
            if(l1->val <= l2->val)
            {
                curr -> next = l1;
                l1 = l1 -> next;
            }
            else
            {
                curr -> next = l2;
                l2 = l2 -> next;
            }
        
        curr = curr ->next;
        
        }
        
        //for unqual length linked list
        
        if(l1 != NULL)
        {
            curr -> next = l1;
            l1 = l1->next;
        }
        
        if(l2 != NULL)
        {
            curr -> next = l2;
            l2 = l2 ->next;
        }
        
        return ptr->next;
    }
};
```