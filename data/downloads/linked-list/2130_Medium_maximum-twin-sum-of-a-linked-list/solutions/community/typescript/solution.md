# TypeScript: Two pointers and Stack

**Author:** xgmichael
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2831496/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2831496/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using two pointers, we can find the mid point of the linked list by advancing the slow pointer by 1 and the fast by 2 on each iteration.
Once at the midpoint, we can traverse the rest of the list after the midpoint and pop from the stack to get the 'twin' for this node, then update the max sum.
# Approach
<!-- Describe your approach to solving the problem. -->
Push each node.val to the stack, until fast is off the end of the list (since it goes at 2x speed this means slow is at the midpoint).
Then advance slow to the end of the list while popping from the stack to get the twin value.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n), our stack will have n/2 values in it
# Code
```
function pairSum(head: ListNode | null): number {
  const stack: number[] = [];
  let slow = head;
  let fast = head.next;

  while (fast != null) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next?.next;
  }

  let maxTwinSum = 0;
  while (slow != null) {
    maxTwinSum = Math.max(maxTwinSum, slow.val + stack.pop());
    slow = slow.next;
  }

  return maxTwinSum;
};
```