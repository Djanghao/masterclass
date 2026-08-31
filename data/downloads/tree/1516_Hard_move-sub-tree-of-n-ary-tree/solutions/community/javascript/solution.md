# Self Explanatory Code | Modern ES6

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/5925564/](https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/5925564/)

---

# Code
```javascript []
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * Moves the subtree rooted at node p to become a child of node q.
 * @param {Node} root - The root of the n-ary tree.
 * @param {Node} p - The node whose subtree is to be moved.
 * @param {Node} q - The node to which the subtree is moved.
 * @return {Node} - The root of the modified tree.
 */
var moveSubTree = function (root, p, q) {
  // If p is already a child of q, return the root without changes
  if (q.children.includes(p)) return root;

  // Find the parents of p and q
  let pParent = findParent(root, p);
  let qParent = findParent(root, q);

  // If q is a descendant of p, we need to move p under q
  if (isDescendant(q, p)) {
    // Remove q from its parent (since we're moving p under q)
    qParent.children = qParent.children.filter(child => child !== q);
    // Add p as a child of q
    q.children.push(p);

    // If p is the root, return q as the new root
    if (!pParent) return q;

    // Replace p with q in its parent's children list
    pParent.children[pParent.children.indexOf(p)] = q;
  } else {
    // Otherwise, move p under q directly
    q.children.push(p);
    // Remove p from its parent\u2019s children
    pParent.children = pParent.children.filter(child => child !== p);
  }

  // Return the root of the modified tree
  return root;
};

const findParent = (root, target) => {
  if (!root) return null; // If the root is null, return null
  for (let child of root.children) {
    // Check if the current child is the target
    if (child === target) return root;
    // Recursively search for the target in the child
    let parent = findParent(child, target);
    if (parent) return parent; // If found, return the parent
  }
  return null; // Return null if the parent is not found
};

const isDescendant = (node, root) => {
  if (!root) return false; // If the root is null, return false
  if (root === node) return true; // If the root is the node, return true
  // Recursively check if the node is a descendant of any child
  return root.children.some(child => isDescendant(node, child));
};


```