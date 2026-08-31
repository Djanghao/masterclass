# Simple Java solution without recursion faster than 100% and memory less than 99%

**Author:** neutrino10
**Votes:** 29
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/1092599/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/1092599/)

---

```
class Solution {
    public Node flatten(Node head) {
        Node curr=head;
        while(curr!=null){
            if(curr.child != null){
                Node tail = findTail(curr.child);
                if(curr.next != null){
                    curr.next.prev=tail;
                }
                
                tail.next = curr.next;
                curr.next =curr.child;
                curr.child.prev = curr;
                curr.child =null;
            }
            curr = curr.next;
        }
        return head;
    }
    
    public Node findTail(Node child){
        while(child.next != null){
            child=child.next;
        }
        return child;
    }
}
```