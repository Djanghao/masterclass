# ✅ Recursive vs Iterative without Dummy || O(1) Space + Intuition

**Author:** Rowque
**Votes:** 90
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/1785026/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/1785026/)

---

For these modification Questions , **Recursion** is a great tool in these linked list question.

**My Intuition** :
Whenever `the process is having repeated tasks again and again especially in Linked List`, We use **Recursion**.
# For eg -> 
```
1. Skip M nodes, delete N nodes nodes
2. Reverse every K nodes.
3. Skip M node, Reverse N nodes.
4. get sum between consecutive 0's.{This Question}.
```

You see all above question are having **same tasks again and again**, and thats why **I thought of Recursion**.
              

**Algorithm**: In Recursion , we only have to consider about first part and rest will be done by principle of recursion.
1. Fetch the sum between two consecutive 0.
2. Assign the sum to first node between 2 consecutive 0's.
3. Call function for the next parts.
4. Whatever was returned from the function , assign it to next of the first node on which we assigned the sum previously.
5. Return the New head as head->next.

**We are using Constant space because we are not creating any extra node for sum.**
**We are just assigning the sum to already existed node.**
# C++ Recursive : Very Easy
    ListNode* mergeNodes(ListNode* head){
	    //BASE CASE -> if we have a single zero, simply return null
        if(!head->next) return nullptr;
        
        //fetch sum from current 0 to next 0
        ListNode* ptr= head->next;
        int sum=0;
        while(ptr->val!=0) sum+= ptr->val, ptr=ptr->next;
        
        //assign sum on the first node between nodes having value 0.
        head->next->val= sum;
        
        //call and get the answer and connect the answer to next of head->next
        head->next->next= mergeNodes(ptr);
        
        //return head->next..=> new head
        return head->next;
    }
**Time**: O(N).
**Space**: O(1) {Excluding recursion space}.

	
# C++ Iterative :	Faster than 95%
Same as Recursive above but in iterative version.
Doing everything INPLACE without creating new node for sum, as in recursion.
   
     ListNode* mergeNodes(ListNode* head) {
         head=head->next;
         ListNode* start=head;
         while(start){
		    ListNode* end= start;   /* Point to first node of current part for getting sum */
            int sum=0;
            while(end->val!=0) sum+= end->val , end=end->next;
            start->val=sum;   /*assign sum to first node between two 0*/
            start->next=end->next;   /*make this connect to first node of next part*/
            start=start->next;    /*go..to..next..part*/
		 }
         return head;
    }

**Time** -> O(N)
**Space** -> O(1) {We are doing everything **inplace**, **without creating new nodes for sum**}


