# ✅ C++ || Easy To Understand || 2 Approaches || Recursive || Iterative

**Author:** knockcat
**Votes:** 2323
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826666/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826666/)

---

# 21. Merge Two Sorted Lists
**KNOCKCAT**


```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Linked list problem, merge.
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```

[LeetCode](https://github.com/knockcat/Leetcode)    **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**EXPLANATION**

* Maintain a **head and a tail pointer** on the merged linked list. 
* Then choose the head of the merged linked list by comparing the first node of both linked lists.
* For all subsequent nodes in both lists, you **choose the smaller current node** and l**ink it to the tail** of the merged list, and **moving the current pointer of that list one step forward.**

* You **keep doing this while there are some remaining elements in both the lists.**
* If there are **still some elements in only one of the lists**, you **link this remaining list to the tail of the merged list.**

* Initially, the merged linked list is NULL.

* **Compare the value of the first two nodes and make the node with the smaller value** the head node of the merged linked list.

* Since it\u2019s the first and only node in the merged list, it will also be the tail.

* Then **move head1 one step forward.**

**Time Complexity O(n+m)**
**Space Complexity O(n+m)** this is auxiliary stack space due to recursion.


**RECURSIVE APPROACH**
```
					// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
	ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) 
  {
		// if list1 happen to be NULL
		// we will simply return list2.
		if(l1 == NULL)
        {
			return l2;
		}
		
		// if list2 happen to be NULL
		// we will simply return list1.
		if(l2 == NULL)
        {
			return l1;
		} 
		
		// if value pointend by l1 pointer is less than equal to value pointed by l2 pointer
		// we wall call recursively l1 -> next and whole l2 list.
		if(l1 -> val <= l2 -> val)
        {
			l1 -> next = mergeTwoLists(l1 -> next, l2);
			return l1;
		}
		// we will call recursive l1 whole list and l2 -> next
		else
        {
			l2 -> next = mergeTwoLists(l1, l2 -> next);
			return l2;            
		}
	}
};	
```

**ITERATIVE APPROACH**

**Time Complexity O(n+m)**
**Space Complexity O(1)** 

```
					// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
       
	    // if list1 happen to be NULL
		// we will simply return list2.
        if(list1 == NULL)
            return list2;
		
		// if list2 happen to be NULL
		// we will simply return list1.
        if(list2 == NULL)
            return list1;
        
        ListNode * ptr = list1;
        if(list1 -> val > list2 -> val)
        {
            ptr = list2;
            list2 = list2 -> next;
        }
        else
        {
            list1 = list1 -> next;
        }
        ListNode *curr = ptr;
        
		// till one of the list doesn't reaches NULL
        while(list1 &&  list2)
        {
            if(list1 -> val < list2 -> val){
                curr->next = list1;
                list1 = list1 -> next;
            }
            else{
                curr->next = list2;
                list2 = list2 -> next;
            }
            curr = curr -> next;
                
        }
		
		// adding remaining elements of bigger list.
        if(!list1)
            curr -> next = list2;
        else
            curr -> next = list1;
            
        return ptr;
       
    }
};
```