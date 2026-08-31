# Two pointer solution with dummy nodes

**Author:** weakhero
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-list/solutions/4584141/](https://leetcode.com/problems/partition-list/solutions/4584141/)

---

Two pointers to create two linked lists. `lowerlist` for `values < x` and `upperlist` for `values >= x`.

We create dummy nodes to keep track of the head for lower and upper list.

To merge the two lists, we join lowerlist tail with upperlist head.

Then we return lowerlist head via the dummy node


# Complexity
o(n) space and time

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
    let curr = head;

    let lowerlist = new ListNode(0);
    let dummyl = lowerlist;

    let upperlist = new ListNode(0);
    let dummyu = upperlist;

    while(curr) {
        if(curr.val < x) {
            lowerlist.next = new ListNode(curr.val);
            lowerlist = lowerlist.next;
        } else {
            upperlist.next = new ListNode(curr.val);
            upperlist = upperlist.next;
        }
        curr = curr.next;
    }

    lowerlist.next = dummyu.next

    return dummyl.next;
};


```