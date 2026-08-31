# For JAVASCRIPT solution not working... Please choose Language as typescript

**Author:** Zeeshan_Ali_MG
**Votes:** 3
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2696630/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2696630/)

---

```
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return [];
  let q = [root];
  while (q.length > 0) {
    let currentIterstionLength = q.length;
    let level = [];
    for (let i = 0; i < currentIterstionLength; i++) {
      let element = q.shift();
      element.next = q[0] || null;
      if (element.left) {
        level.push(element.left);
      }
      if (element.right) {
        level.push(element.right);
      }
    }
    q = level;
  }
  return root;
};

```