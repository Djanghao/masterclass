# Typescript Tortle and Rabbit

**Author:** boytsovevg
**Votes:** 24
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/2373313/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/2373313/)

---

A Rabbit goes twice faster than tortle

```
function middleNode(head: ListNode | null): ListNode | null {
    let rabbit = head.next;
    let tortle = head;
    
    while(rabbit) {
        rabbit = rabbit.next?.next;
        tortle = tortle.next;
    }
    
    return tortle;
};
```