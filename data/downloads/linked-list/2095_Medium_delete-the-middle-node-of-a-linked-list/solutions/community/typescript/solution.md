# Typescript | Javascript | With comments | Fast & Slow pointers

**Author:** OsidAbu-Alrub
**Votes:** 7
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/2510026/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/2510026/)

---

```
function deleteMiddle(head: ListNode | null): ListNode | null {
  if(!head.next) return null;
  let slow = head;
  
  // make fast start from 3rd node
  let fast = head.next.next;
  
  // now we loop until fast reaches end of list
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // since we made fast start from 3rd node
  // when we exit the loop, the slow pointer
  // will be at node middle - 1 (not middle)
  // so we can easily delete middle node now
  slow.next = slow.next.next;
  return head;
};
```