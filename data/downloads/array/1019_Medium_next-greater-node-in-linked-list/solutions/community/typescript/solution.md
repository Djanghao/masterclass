# TypeScript/JavaScript Monotonic Stack solution.

**Author:** tranhan0795
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/6023592/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/6023592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
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

function nextLargerNodes(head: ListNode | null): number[] {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const monoStack = [];
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];

        while (monoStack.length && cur > monoStack[monoStack.length - 1][1] && arr[monoStack[monoStack.length - 1][0]] === 0) {
            const idx = monoStack.pop()[0];
            arr[idx] = cur;
        }

        arr[i] = 0;
        monoStack.push([i, cur]);
    }

    return arr;
};
```