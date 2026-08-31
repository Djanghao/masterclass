# 8 lines C++ solution.faster than 100% submissions|for beginners.explanation of approach

**Author:** googly_boy
**Votes:** 358
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1395724/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1395724/)

---

first make a dummy node and assign its value equals to 0 and its next points to the head of the given linked list.
also make a prev node and point it to the dummy node.
***Always remember that a prev node is always required wherever we have to delete a node or we have to break links and create new links . this thing is very important for beginner coders for developing their intusions in future. That's not a rule i have said it on the basis of my coding expirience***.
Then you have to traverse the linked list so run a while loop.
check that if the two adjacent nodes are equal or not if the two adjacent nodes are equal then traverse trhe linked list upto ehen the adjacent nodes are not identical.
Then directly connect the link from prev->next to the head->next.
While in other case is the adjacent nodes are not equal then simply traverse the linked list by prev=prev->next.




 ListNode* deleteDuplicates(ListNode* head) {
       
        ListNode *dummy=new ListNode(0,head);
           ListNode *prev=dummy;
            
            while(head!=NULL){
           
            if(head->next!=NULL && head->val==head->next->val){
                    
    while(head->next!=NULL && head->val==head->next->val)head=head->next;
                         
                       
                            prev->next=head->next;
                    }
                    
                    else prev=prev->next;
                           
                   
                    head=head->next;
            }
            
            return dummy->next;
                
        }
		
		
		//if(you_like_and_understand_my_solution)
		//{
		//  please_upvote++;
		// }
		
		/*Guys plz plz plz upvote my solution if you really like and understand it.and if you stuck at any point then feel free to comment*/.