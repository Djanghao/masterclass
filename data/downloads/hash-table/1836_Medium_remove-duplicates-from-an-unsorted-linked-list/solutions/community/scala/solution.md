# Seen Array Solutions (Scala, Java, Python)

**Author:** JamesBarnes
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/2116292/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/2116292/)

---

# Scala Solution
```scala
object Solution {
    val LIST_LENGTH_REQ = 100000
    
    def deleteDuplicatesUnsorted(
      head: ListNode,
      seen: Array[Int] = new Array(LIST_LENGTH_REQ)
    ): ListNode = {
      if (head == null) {
        null
      } else {
        seen(head.x - 1) += 1
        head.next = deleteDuplicatesUnsorted(head.next, seen)
        
        if (seen(head.x - 1) > 1) head.next else head 
      }
    }
}
```

<br />

# Java Solution
```java
class Solution {
    private static int LIST_LENGTH_CONSTRAINT = 100000;

    public ListNode deleteDuplicatesUnsorted(ListNode head) {
        return helper(
            head,
            new int[LIST_LENGTH_CONSTRAINT]
        );
    }
    
    private ListNode helper(
        ListNode curr,
        int[] nodes
    ) {
        if (curr == null) {
            return null;
        } else {
            nodes[curr.val - 1]++;
            
            curr.next = helper(
                curr.next,
                nodes
            );
        
            return nodes[curr.val - 1] > 1 ? curr.next : curr; 
        }
    } 
}
```

<br />

# Python Solution
```python
LIST_LENGTH_REQ = 100000

def helper(head, seen) -> ListNode:
    if (head is None):
        return None
    else:
        seen[head.val - 1] += 1
        head.next = helper(head.next, seen)
        
        return head.next if (seen[head.val - 1] > 1) else head 

class Solution:
    def deleteDuplicatesUnsorted(self, head: ListNode) -> ListNode:
        return helper(head, [0]*LIST_LENGTH_REQ)
```