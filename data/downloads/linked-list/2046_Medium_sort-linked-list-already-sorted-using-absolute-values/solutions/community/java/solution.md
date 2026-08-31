# java O(N) solution

**Author:** xtnhemwa
**Votes:** 10
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1565859/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1565859/)

---

```
 public ListNode sortLinkedList(ListNode head) {
        
       ListNode curr = head;
       
       while(curr!=null && curr.next != null){
            
           if(curr.next.val<0){
               head = new ListNode(curr.next.val,head);
               curr.next = curr.next.next;
           }else{
               curr = curr.next;
           }  
          
       } 
        
     return head; 
        
    }
```

TC = O(N)
SC =O(N)