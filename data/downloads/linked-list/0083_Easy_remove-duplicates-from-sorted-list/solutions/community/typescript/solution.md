# FAST 🏎️ TS/JS Solution | Beats 97.19% ✅

**Author:** adiathasan
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3506654/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3506654/)

---

![image.png](./images/0.png)

As it is sorted we know that the next val can be similar. 

Hence, we check for that and shift the pointer `->` `next`.

# Code
```tsx
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head

    while(node !== null){
        if(node.next !== null){
            if(node.val === node.next.val){
                node.next = node.next.next
                continue
            }
        }

        node = node.next
    }

    return head
};
```