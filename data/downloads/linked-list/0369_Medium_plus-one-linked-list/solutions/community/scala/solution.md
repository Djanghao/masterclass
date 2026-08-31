# Three Recursive Solutions (Scala, Java, Python)

**Author:** JamesBarnes
**Votes:** 1
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/2116198/](https://leetcode.com/problems/plus-one-linked-list/solutions/2116198/)

---

# Scala Solution
```scala
object Solution {
  implicit class EnrichedListNode(val curr: ListNode) extends AnyVal {
    def isTail(): Boolean =
       curr.next == null

    def increment(): Boolean =
      if (curr.x == 9) {
        curr.x = 0
        true
      } else {
        curr.x += 1
        false
      } 
  }
  
  def helper(curr: ListNode): Boolean =
    if (curr.isTail || helper(curr.next)) curr.increment else false
  
  def plusOne(head: ListNode): ListNode = {
    if (helper(head)) new ListNode(1, head) else head
  }
}
```

<br />

# Java Solution
```java
class Solution {
    public ListNode plusOne(ListNode head) {
        return helper(head) ? new ListNode(1, head) : head;
    }
    
    private boolean helper(ListNode curr) {
        if (curr.next == null || helper(curr.next)) {
            return increment(curr);
        } else {
            return false;
        }
    }
    
    private boolean increment(ListNode curr) {
        if (curr.val == 9) {
            curr.val = 0;
            return true;
        } else {
            curr.val++;
            return false;
        }
    }
}
```

<br />

# Python Solution
```python
def helper(curr: ListNode) -> bool:
    return increment(curr) if (curr.next is None or helper(curr.next)) else False

def increment(curr: ListNode) -> bool:
    if (curr.val == 9):
        curr.val = 0
        return True
    else:
        curr.val += 1
        return False

class Solution:
    def plusOne(self, head: ListNode) -> ListNode:
        return ListNode(1, head) if (helper(head)) else head 
```