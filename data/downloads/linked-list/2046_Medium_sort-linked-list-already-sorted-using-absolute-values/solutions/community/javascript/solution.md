# solution

**Author:** jspvela93
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/5994924/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/5994924/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortLinkedList = function (head) {
    //o(n) time | o(1) space
    const arrNeg = Array(50001).fill(0)
    const arrPos = Array(50001).fill(0)

    let curr = head;

    while (curr) {
        if (curr.val >= 0) {
            arrPos[curr.val]++;
        } else arrNeg[-curr.val]++;
        curr = curr.next;
    }

    curr = head;

    for (let i = arrNeg.length - 1; i > 0;) {
        if (arrNeg[i] > 0) {
            curr.val = -i;
            curr = curr.next;
            arrNeg[i]--;
        } else i--;
    }

    for (let i = 0; i < arrPos.length;) {
        if (arrPos[i] > 0) {
            curr.val = i;
            curr = curr.next;
            arrPos[i]--;
        } else i++;
    }

    return head;
};
```