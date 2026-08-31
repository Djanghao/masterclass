# Example and step by step example walkthrough

**Author:** JamesCommits
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4757854/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/4757854/)

---

### Explanation

---

The problem statement requires sorting a singly linked list in non-decreasing order based on the actual values of its nodes. Initially, the list is sorted in non-decreasing order considering the absolute values of its nodes. The task is to reorder it considering the real values, which involves moving negative numbers (if any) to the beginning of the list in the correct order without using additional lists or arrays for sorting.

### Solution Overview

The solution iterates through the linked list, starting from the head. For each node (`curr`), it checks if the next node's value is negative. If so, it performs two operations:

1. **Insertion at Head:** It creates a new node with the negative value and inserts it at the beginning of the list. This step ensures that the negative value is moved to the front, maintaining its relative order with other negative values already moved.
2. **Removal of Original Node:** It then removes the original node with the negative value from its current position by linking the current node (`curr`) directly to the next node of the node being moved.

The iteration continues until there are no more nodes to process or the next node's value is not negative, indicating that all negative values (if any) have already been moved to the beginning of the list in their correct order.

### Time and Space Complexity

- **Time Complexity:** O(n), where n is the number of nodes in the linked list. The solution iterates through the list once, performing constant-time operations (insertion at head and removal) for each node.
- **Space Complexity:** O(1), as the solution does not use any additional space proportional to the input size. It only uses a fixed number of variables regardless of the list size.

### Walkthrough

---

Let's walk through a detailed example using the solution provided, with the following input list:

```bash
Input: head = [0,2,-5,5,10,-10]
```

The goal is to reorder this list to:

```makefile
Output: [-10,-5,0,2,5,10]
```

### Initial Setup

- We start with `curr` pointing at the head of the list, which is `0`.
- The list looks like this: `[0 -> 2 -> -5 -> 5 -> 10 -> -10]`.

### Iteration 1

- `curr` is `0`, and `curr.next` is `2`. Since `2` is not negative, we move `curr` to the next node.
- List remains unchanged: `[0 -> 2 -> -5 -> 5 -> 10 -> -10]`.

### Iteration 2

- `curr` is now `2`, and `curr.next` is `5`. Since `5` is negative:
    1. We insert `5` at the head: `[-5 -> 0 -> 2 -> 5 -> 10 -> -10]`.
    2. We remove `5` from its original position, so `curr.next` now points to `5`.
- The list now looks like: `[-5 -> 0 -> 2 -> 5 -> 10 -> -10]`.

### Iteration 3

- `curr` is `2`, and `curr.next` is `5`. Since `5` is not negative, we move `curr` to the next node.
- List remains: `[-5 -> 0 -> 2 -> 5 -> 10 -> -10]`.

### Iteration 4

- `curr` is `5`, and `curr.next` is `10`. Since `10` is not negative, we move `curr` to the next node.
- List remains: `[-5 -> 0 -> 2 -> 5 -> 10 -> -10]`.

### Iteration 5

- `curr` is `10`, and `curr.next` is `10`. Since `10` is negative:
    1. We insert `10` at the head: `[-10 -> -5 -> 0 -> 2 -> 5 -> 10]`.
    2. We remove `10` from its original position, so `curr.next` now points to `null`.
- The list now looks like: `[-10 -> -5 -> 0 -> 2 -> 5 -> 10]`.

### Conclusion

- The iteration ends because `curr.next` is `null`, indicating we've reached the end of the list.
- The final list is: `[-10, -5, 0, 2, 5, 10]`, which is sorted in non-decreasing order based on the actual values of its nodes.

### Detailed Explanation

Throughout the process, we've moved each negative node to the beginning of the list as soon as we encountered it. This strategy ensures that the relative order of negative numbers is preserved (since each new negative number is added to the front, the last encountered negative becomes the head). Meanwhile, the relative order of non-negative numbers remains untouched since we only move `curr` forward without altering the order of these nodes.

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

function sortLinkedList(head: ListNode | null): ListNode | null {
  let curr: ListNode | null = head;

  while (curr !== null && curr.next !== null) {
      if (curr.next.val < 0) {
          let newNode: ListNode = new ListNode(curr.next.val, head);
          head = newNode;
          curr.next = curr.next.next;
      } else {
          curr = curr.next;
      }
  }

  return head;
};
```