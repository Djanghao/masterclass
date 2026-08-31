# javascript O(n) time | O(1) space

**Author:** ethanneff
**Votes:** 3
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/973586/](https://leetcode.com/problems/plus-one-linked-list/solutions/973586/)

---

```
var plusOne = function(head) {
    let first = new ListNode(0)
    first.next = head
    let farRightNine = first
    
    while(head) {
        if (head.val !== 9) {
            farRightNine = head
        }
        head = head.next
    }
    
    farRightNine.val++
    farRightNine = farRightNine.next
    
    while(farRightNine) {
        farRightNine.val = 0
        farRightNine = farRightNine.next
    }
    return first.val === 0 ? first.next : first  
};


```