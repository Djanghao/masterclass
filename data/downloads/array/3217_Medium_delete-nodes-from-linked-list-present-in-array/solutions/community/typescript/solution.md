# Easy O(n) solution with full explanation🌟🥳🔥.

**Author:** mubasirvc
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5746298/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5746298/)

---

# Code
```typescript []
function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    // Create a dummy node to simplify edge case handling
    // The dummy node points to the head of the original list
    let dummy = new ListNode(0);
    dummy.next = head;

    // Convert the nums array into a Set for O(1) lookups
    const set = new Set(nums);

    // Initialize two pointers: `cur` for traversing the list,
    // and `prev` to keep track of the last valid node
    let cur = head;
    let prev = dummy;

    while (cur !== null) {
        // If the current node's value is in the set, it needs to be removed
        if (set.has(cur.val)) {
            // Skip the current node by linking the previous node to the next node
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        // Move the `cur` pointer to the next node in the list
        cur = cur.next;
    }

    // Return the modified list, starting from the node after the dummy
    return dummy.next;
}


```