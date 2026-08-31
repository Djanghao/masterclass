# 💅🏻 Elegant Simple Solution for Hard Problem O(n)

**Author:** stazcp
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/5208642/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/5208642/)

---

# Intuition
The problem requires reversing nodes in a singly linked list in groups where the group length is even. This involves iterating through the linked list, identifying the group lengths, and reversing those groups that have an even number of nodes. The key is to efficiently manage the pointers to reverse the required segments while maintaining the overall structure of the linked list.

# Approach
1. **Initialization**: Start with pointers to traverse the linked list (`cur` for the current node and `prev` to track the end of the previous group). Initialize the `group` counter to determine the current group size.
2. **Traverse and Group Nodes**: Iterate through the list, grouping nodes based on the current `group` size.
3. **Check Group Size**: For each group, check if the size is even.
   - If even, reverse the group using a helper function `reverseSublist`.
   - If odd, move the `prev` pointer to the end of the current group without reversing.
4. **Reverse and Reconnect**: If a group is reversed, reconnect the reversed group to the previous part of the list and update pointers accordingly.
5. **Increment Group Size**: After processing each group, increment the `group` counter to handle the next group.

# Complexity
- Time complexity: $$O(n)$$
  - Each node in the linked list is processed exactly once, making the time complexity linear with respect to the number of nodes in the list.

- Space complexity: $$O(1)$$
  - The space complexity is constant as no additional space proportional to the input size is used, only a few pointers are used for traversal and reversal.

# Code
```javascript
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

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
    if (!head?.next) return head;
    let cur = head, prev = null, group = 1, steps = 0;

    while (steps < group && cur?.next) {
        steps = 1; // first step
        for (let i = 0; i < group - 1; ++i) {
            if (cur?.next) {
                cur = cur?.next; // move to end of group
                ++steps;
            }
        }

        if (steps % 2 === 0) {
            console.log(steps);
            // we assume that prev exists because it gets set on group 1 which is odd
            let sublistHead = prev.next;
            const [rHead, rTail] = reverseSublist(sublistHead, steps);
            console.log(rHead.val, rTail.val);
            prev.next = rHead;
            prev = rTail;
            cur = rTail.next;
        } else {
            // set prev to cur which is curr at the tail of the cur sublist
            prev = cur;
            cur = cur.next;
        }

        ++group; // increment next group
    }

    return head;
};

const reverseSublist = (head, steps) => {
    let prev = null, cur = head;

    while (steps) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        --steps;
    }

    head.next = cur; // connect to mainlist

    return [prev, head];
};
