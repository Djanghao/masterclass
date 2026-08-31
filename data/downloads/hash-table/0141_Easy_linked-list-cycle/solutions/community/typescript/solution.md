# ✅✅✅ TS || Easy to understand || Two Pointers Approach

**Author:** vupro
**Votes:** 7
**Link:** [https://leetcode.com/problems/linked-list-cycle/solutions/4833039/](https://leetcode.com/problems/linked-list-cycle/solutions/4833039/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind solving this problem is to use two pointers - one slow pointer that moves one step at a time and another fast pointer that moves two steps at a time. If there's a cycle in the linked list, eventually the fast pointer will catch up to the slow pointer.

# Approach
<!-- Describe your approach to solving the problem. -->
To determine if a linked list has a cycle, we can use the "hare and tortoise" or "slow and fast pointer" approach. The idea is simple: we have two pointers starting at the beginning of the linked list, one moving at twice the speed of the other. If there's a cycle, these two pointers will eventually meet at some node within the cycle.

1. We initialize two pointers, called the slow pointer and the fast pointer, both pointing to the head of the linked list.

2. In each iteration of the algorithm:

+ Move the slow pointer one step forward.
+ Move the fast pointer two steps forward.
+ If there's a cycle, the fast pointer will eventually "lap" the slow pointer and catch up to it.

4. If at any point during the iteration the slow and fast pointers meet (i.e., their references are equal), it indicates that there's a cycle in the linked list.

5. If the fast pointer reaches the end of the list (i.e., it becomes null), it means there's no cycle in the linked list.

6. Continue this process until either the fast pointer reaches the end of the list or the slow and fast pointers meet.

If the fast pointer meets the slow pointer, return true, indicating the presence of a cycle. Otherwise, return false.

**Consider the following example:**
```
1 -> 2 -> 3 -> 4 -> 5 -> 2 (points back to 2)

```

In this linked list, there's a cycle because node 5 points back to node 2. By using the slow and fast pointer approach, the pointers will eventually meet at node 2, indicating the presence of a cycle.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Since each iteration moves both pointers forward, the time complexity of this approach is O(n), where n is the number of nodes in the linked list.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this approach is O(1) because we are using only a constant amount of extra space for the pointers, regardless of the size of the linked list.
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

function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
};
```