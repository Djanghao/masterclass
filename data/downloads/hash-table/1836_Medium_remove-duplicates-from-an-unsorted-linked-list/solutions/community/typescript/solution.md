# Time: O(N) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5523260/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5523260/)

---

# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(N)$

# Code - 2 Passes
```typescript
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

function deleteDuplicatesUnsorted(head: ListNode | null): ListNode | null {
    // Populate value frequencies
    const freqMap = new Map<number, number>();
    for (let node = head; node != null; node = node.next) {
        freqMap.set(node.val, 1 + (freqMap.get(node.val) ?? 0));
    }

    // Create dummy root node
    const root = new ListNode(-1, head);

    // Reconnect the list, skipping duplicate values
    let tail = root;
    for (let node = head; node != null; node = node.next) {
        if (freqMap.get(node.val)! < 2) {
            tail.next = node;
            tail = node;
        }
    }
    tail.next = null;

    // Return the list's new head
    return root.next;
};
```