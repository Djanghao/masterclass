# Θ(n),Θ(1) Recursive & Iterative Solutions Explained

**Author:** mxweaver
**Votes:** 21
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/3469664/](https://leetcode.com/problems/reverse-linked-list/solutions/3469664/)

---

There are multiple possible approaches to solving this problem. In this post, I have outlined 4 approaches that are either the most performant or most mathematically interesting.

# Impure Recursive

To reverse the list with recursion:

- Add an optional parameter to keep track of the parent node
- If the current node is empty, bail
- Keep a reference to the next node
- Flip the direction of the current node's edge
- If there is a next node, recurse
- Otherwise, return the current node

This will effectively iterate through the list and flip the direction of each node's edge, then return the tail of the original list. To use as little memory as possible, we can make our changes directly to the input instead of creating a new list.

This algorithm's time complexity is $$\u0398(n)$$ (where n is the size of the original list) because it calls itself exactly once per node in the original list. The space complexity is $$\u0398(n)$$ because a new scope is created for each level of recursion.

```ts
function reverseList(
  head: ListNode | null,
  parent: ListNode | null = null,
): ListNode | null {
  if (!head) return parent;

  const next = head.next;
  head.next = parent;

  return reverseList(next, head);
};
```

# Pure Recursive

With a slight change to the impure recursive algorithm, we can produce the same result while leaving the original list in-tact.

This algorithm's time complexity is $$\u0398(n)$$ (where n is the size of the original list) because it calls itself exactly once per node in the original list. The space complexity is $$\u0398(n)$$ because the caller scope will always persist while the function recurses and the algorithm creates exactly one new node for each node in the original list.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function reverse(curr: ListNode, parent: ListNode | null): ListNode {
    const next = curr.next;

    curr = new ListNode(curr.val, parent);

    if (!next) return curr;
    return reverse(next, curr);
  }

  return reverse(head, null);
};
```

# Impure Iterative

To reverse the list with iteration:

- If the current node is empty, bail
- Keep a reference to the previous node
- Do the following until the current node is empty:
  - Keep a reference to the next node
  - Flip the direction of the current node's edge
  - Move to the next node (prev <= current, current <= next)

To use as little memory as possible, we can make our changes directly to the input instead of creating a new list.

This algorithm's time complexity is $$\u0398(n)$$ (where n is the size of the original list) because it iterates exactly once per node in the original list. The space complexity is $$\u0398(1)$$ because it does not create any new objects and does not call and functions.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}
```

# Pure Iterative

With a small change to the impure iterative algorithm, we can keep the original list in-tact at the cost of a linear space complexity. 

This algorithm's time complexity is $$\u0398(n)$$ (where n is the size of the original list) because it iterates exactly once per node in the original list. The space complexity is $$\u0398(n)$$ because it creates a new node for each node found in the original list.

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}
```

# Conclusion

In most cases, the pure iterative algorithm is preferred as it provides the best real-world performance (no bloated call stacks) while keeping the function pure. Pure functions are preferred in many cases, especially when there may be multiple algorithms running in parallel on the same list.

In cases where parameter ownership is known, the impure iterative algorithm is prefferred as it provides the best time and space complexity in the tight case. Keep in mind that the TypeScript compiler cannot determine parameter ownership at compile time, so new code may break this constraint. Short of rewriting your solution in Rust, documentation is the best remedy for this.