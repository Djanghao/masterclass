# Reversing Nodes in k-Group in a Singly Linked List

**Author:** authxth
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/5635770/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/5635770/)

---

# Intuition
The function reverses every `k` nodes in a linked list. If there are fewer than `k` nodes remaining, those nodes are left in their original order. The approach involves segmenting the list into chunks of `k` nodes, reversing each chunk, and reconnecting them.


# Approach
1. Initial Check: If `k` is 1, no changes are needed, so return the original list.
2. Dummy Node: Use a dummy node to simplify edge cases, such as reversing at the head of the list.
3. Traversal and Reversal:
    - Find k-th Node: Traverse the list to find the k-th node from the current position. If fewer than `k` nodes are left, return the modified list.
    - Reverse Segment:
        - Reverse the segment of `k` nodes by rearranging pointers.
        - Maintain the correct connections between the reversed segment and the rest of the list.
    - Update Pointers: Adjust pointers to ensure proper connectivity between the reversed segments and the remaining list.
4. Return Result: Return the new head of the modified list, which is `dummy.next`.


# Complexity
- Time complexity: $O(n)$, $\uD835\uDC5B$ is the number of nodes in the linked list. Each node is processed once.
- Space complexity: $O(1)$, as the reversal is done in-place without using extra space.


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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k === 1) {
        return head;
    }

    const dummy = new ListNode(0, head);
    let root = dummy;
    while (root != null) {
        let pre = root;
        let cur = root;

        let count = 0;
        while (count !== k) {
            count++;
            cur = cur.next;
            if (cur == null) {
                return dummy.next;
            }
        }

        const nextRoot = pre.next;
        pre.next = cur;

        let node = nextRoot;
        let next = node.next;
        node.next = cur.next;
        while (node != cur) {
            [next.next, node, next] = [node, next, next.next];
        }
        root = nextRoot;
    }

    return dummy.next;
}
```