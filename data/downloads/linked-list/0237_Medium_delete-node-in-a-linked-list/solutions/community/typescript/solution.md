# EASY TS

**Author:** adiathasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/3475449/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/3475449/)

---


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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    if(!node){
        return 
    }

    node.val = node.next.val
    node.next = node.next.next
};
```