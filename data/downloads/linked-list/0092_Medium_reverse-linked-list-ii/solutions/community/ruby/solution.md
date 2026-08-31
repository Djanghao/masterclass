# Clean iterative Ruby

**Author:** anthonyto
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-linked-list-ii/solutions/1934292/](https://leetcode.com/problems/reverse-linked-list-ii/solutions/1934292/)

---

Using Ruby's parallel assignment really helps clean things up

```
def reverse_between(head, left, right)
  prehead = ListNode.new(0, head)
  prev, curr = prehead, head
  
  (left-1).times { prev, curr = curr, curr.next } # set pointers
  
  node = prev
  (right-left+1).times { curr.next, prev, curr = prev, curr, curr.next } # reverse list
  
  node.next.next, node.next = curr, prev # attach nodes
  prehead.next
end
```