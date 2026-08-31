# 💥[EXPLAINED] TypeScript. Runtime beats 95.90%, Memory beats 27.44%

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/reorder-list/solutions/5683908/](https://leetcode.com/problems/reorder-list/solutions/5683908/)

---

# Intuition
The goal is to reorder the linked list so that the nodes are arranged in an alternating pattern from the beginning and end towards the center. This involves splitting the list, reversing the second half, and merging the two halves.

# Approach
Find the Middle: Use a fast and slow pointer to find the middle of the list.

Reverse the Second Half: Reverse the second half of the list starting from the middle.

Merge the Halves: Merge the first half with the reversed second half to achieve the reordered list.

# Complexity
- Time complexity:
O(n): Traversing the list, reversing the second half, and merging the halves all take linear time.

- Space complexity:
O(1): The reordering is done in place, using only a constant amount of extra space.

# Code
```typescript []
function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) return;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow!.next!;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let second = slow.next;
    slow.next = null; // Split the list into two halves
    let prev: ListNode | null = null;
    while (second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    let reversedSecond = prev;

    // Step 3: Merge the two halves
    let first = head;
    while (reversedSecond) {
        const tmp1 = first.next;
        const tmp2 = reversedSecond.next;

        first.next = reversedSecond;
        reversedSecond.next = tmp1;

        first = tmp1;
        reversedSecond = tmp2;
    }
}

```