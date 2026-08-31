# solution

**Author:** jspvela93
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5929512/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5929512/)

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
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function (node) {
    //o(n) time | o(n) space
    const arr = [];

    let prevNode = node;
    let curr = node?.next;

    while (prevNode) {
        arr.unshift(prevNode.val);
        prevNode = prevNode?.prev;
    }

    while (curr) {
        arr.push(curr.val);
        curr = curr?.next;
    }

    return arr;
};
```