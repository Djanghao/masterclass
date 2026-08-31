# solution

**Author:** jspvela93
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5908916/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5908916/)

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
 * @return {string}
 */
var gameResult = function (head) {
    //o(n) time | o(1) space
    let even = 0;
    let odd = 0;

    while (head) {
        if (head.val > head.next.val) even++;
        if (head.val < head.next.val) odd++;
        head = head.next.next;
    }

    return even > odd ? "Even" : even < odd ? "Odd" : "Tie";
};
```