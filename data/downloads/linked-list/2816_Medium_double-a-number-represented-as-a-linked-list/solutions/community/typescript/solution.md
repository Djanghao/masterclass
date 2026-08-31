# Simple Recursion JS / TS

**Author:** Executioner1280
**Votes:** 1
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5543568/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5543568/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function doubleIt(head: ListNode | null): ListNode | null {

    let carry = helper(head);
    if (carry) return new ListNode(1, head);
    return head;

    function helper(head: ListNode | null) {
        if (head === null) return 0;
        let carry = helper(head.next);
        let val = (head.val * 2) + carry;
        head.val = val % 10;
        return val >= 10 ? 1 : 0;
    };
};
```