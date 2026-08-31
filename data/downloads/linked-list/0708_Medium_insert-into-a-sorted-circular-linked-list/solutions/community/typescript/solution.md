# Short clean solution + explanation - 14 lines of code (Typescript)

**Author:** jbernier
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/5051449/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/5051449/)

---

# Intuition

To find the insertion point, we cycle through the linked list until one of the following conditions are met:

- `insertVal` is between `node` and `node.next`
- The (non-decreasing) linked list resets, ie. `node > node.next`, and either `node < insertVal` or `insertVal < node.next`
- We've reached the end of the linked list (`node.next === head`)

We are guaranteed to reach one of these conditions, at which point we insert the node.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     constructor(val?: number, next?: Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */
function insert(head: Node | null, insertVal: number): Node | null {
  if (head == null) {
    const node = new Node(insertVal);
    node.next = node;
    return node;
  }
  let node = head;
  do {
    if (node.val <= insertVal && insertVal <= node.next.val || (node.val > node.next.val && (insertVal > node.val || insertVal < node.next.val)) || node.next === head) {
      node.next = new Node(insertVal, node.next);
      return head;
    }
    node = node.next;
  } while (node !== head)
  // This point will never be reached
  return head;
}
```