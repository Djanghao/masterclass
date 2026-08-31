# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 6
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1990895/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1990895/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
class Solution {
public ListNode reverseKGroup(ListNode head, int k) {

    ListNode prev = null;
    ListNode current = head;
    int count = 0;
    ListNode next = null;
	
    //reverse blindly
    while (current != null && count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    //restoring if count lesser
    if (count < k) {
        current = prev;
        prev = null;
        next = null;
		
        while (count != 0) {
            count--;
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
    //head always contains first node (last node after reverse) current head will become current tail and next set should be attached to that
    if (next != null) {
        head.next = reverseKGroup(next, k);
    }
    //prev contains current head and it should be returned
    return prev;
}
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* temp=head;
        for(int i=0;i<k;i++){
            if(!temp)return head;
            temp=temp->next;
        }
        
        ListNode *prev=NULL;
        ListNode *nex1=NULL;
        temp=head;
        for(int i=0;i<k;i++){
            nex1=temp->next;
            temp->next=prev;
            prev=temp;
            temp=nex1;
        }
        if(nex1!=NULL)
            head->next=reverseKGroup(nex1,k);
        return prev;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        curr = head
        for _ in range(k):
            if not curr: return head
            curr = curr.next
        prev = None
        curr = head
        for _ in range(k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        head.next = self.reverseKGroup(curr, k)
        return prev
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var reverseKGroup = function(head, k) {
	// will return the new head of the resultant linked list
    return reverseAGroup(head);
    
    function reverseAGroup(start) {
		// a temp varaible to move the curr start pointer k steps 
        let temp_k = k;
        let curr = start;
        while(curr && temp_k-- > 0) {
            curr = curr.next;
        }
        if(temp_k > 0) {  // curr group size is less than k, so need not reverse
            return start;
        }
        const groupTail = start,                // the start pointer is pointing to the tail node of the current group (on reversal)
              groupHead = reverse(start, curr); // get the tail pointer of the current group by reversing the group of nodes
        
        if(curr) {  // if there is a node followed by the current group, update the next pointer of the current group's tail next pointer
            groupTail.next = reverseAGroup(curr);    // we will get the next group head by recursively calling the function on the following node
        }
        return groupHead;    // finally return the current group head node
    }
    function reverse(root, nextGroup) {
        let curr = root,
            next = null,
            prev = null;
        
        while(curr && curr !== nextGroup) {    // the terminate condition will check if the current node reaches the next group's head node
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;    // this will point to the new head node of the group after reversing 
    }
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        
        // check whether there is more than k nodes 
        var temp = head
        for (i in 0 until k) {
            // if there are less than k nodes, return head (no need to reverse node)
            if (temp == null) return head else temp = temp.next
        }

        // newNextStart is the starting node(after which reversion has taken place)
        val newNextStart = reverseKGroup(temp, k) 
        
        // reverse k nodes one by one 
        var prev: ListNode? = null 
        var curr: ListNode? = head 
        for (i in 0 until k) {
            var next = curr!!.next 
            curr.next = prev
            
            prev = curr
            curr = next
        }
        
        // link starting node(head) with the new next starting node(newNextStart)
        head!!.next = newNextStart
        
        return prev
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func reverseKGroup(_ head: ListNode?, _ k: Int) -> ListNode? {
        if(head == nil) {return nil}
        if(k < 2) {
            return head
        }
        var dummy = ListNode(0)
        guard let head = head else {
            return nil
        }
        dummy.next = head
        
        var current = dummy

        while(current.next != nil) {
            var start = current.next
            var end = current.next
            
            var count = 1
            while(count < k && end != nil) {
                end = end!.next
                count += 1
            }
            if(end == nil) {
                break
            }
            
            //next keep track for head of remaing list
            var next = end!.next
            
            //break the chain to reverse the k elements
            end!.next = nil
            
            var tCurr = start
            var prev:ListNode? = nil
            while(tCurr != nil) {
                let tNext = tCurr!.next
                tCurr!.next = prev
                prev = tCurr!
                tCurr = tNext
            }
            
            
            //after reversing. Put the conenction back
            
            current.next = end
            
            start!.next = next
            
            //start next iteration
            current = start!
            
        }
        return dummy.next
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***