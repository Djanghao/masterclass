# Simple 3-Line Typescript/Javascript solution (beats 100% runtime)

**Author:** kevwen
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5127311/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5127311/)

---

# Intuition
Basically we just want a decreasing linked list, where the smallest number is whatever was at the end of the original linked list.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
const removeNodes = (head: ListNode) => {
    if (!head.next) return head;
    head.next = removeNodes(head.next);
    return head.next.val > head.val ? head.next : head;
};
```