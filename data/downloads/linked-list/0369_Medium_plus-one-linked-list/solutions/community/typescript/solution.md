# Recursive solution one pass

**Author:** weakhero
**Votes:** 0
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/4577791/](https://leetcode.com/problems/plus-one-linked-list/solutions/4577791/)

---

# Intuition
In this solution, we traverse the linked list recursively.
When we get to the end, we add `1` to the value and return any carry over from the sum. `9 + 1 = 10. Carry 1`

As we pop the recursion stack; if there is a remainder/carry to add, we can add to current node value and again recompute and return the new carry for the next node popped in the recursion stack.

Finally, if there is a carry at the end whence we need to add an additional node. e.g. `999 + 1 -> 1000`; we return the new head via a dummy node; else we return original head.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

function plusOne(head: ListNode | null): ListNode | null {
    // 9,9,9
    // res = 1,0,0,0
    const dummy = new ListNode();
    dummy.next = head;
    const carry = solve(head)

    if(carry > 0) {
        dummy.val = carry;
        return dummy;
    }
    return head;
};

function solve(head: ListNode | null) {
    if(head.next === null) {
        const sum = head.val + 1; // 9 + 1 = 10
        head.val = sum % 10;
        const carry = Math.floor(sum / 10);
        return carry;
    };

    let carry = solve(head.next);

    if(carry > 0) {
        const sum = head.val + carry;
        head.val = sum % 10;
        carry = Math.floor(sum / 10);
    }
    return carry;
}
```