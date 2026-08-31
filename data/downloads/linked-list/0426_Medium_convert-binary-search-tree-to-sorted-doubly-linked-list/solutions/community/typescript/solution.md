# Reduce pointer confusion by unpacking into array then adjusting pointers

**Author:** SirensOfTitan
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4787009/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4787009/)

---

# Intuition
One of the larger issues with linked lists, especially in interviews is that it's quite easy to lose your visuals of where to adjust pointers--especially in a pressured situation where your working memory might be a little less than normal circumstances.

... a good way to circumvent this is split traversal and update into two separate steps so that you're not trying to figure out where next is while adjusting pointers.  Is it a little less efficient?  Sure, but I guarantee you none of the clever solutions here would ever find their way into a mature codebase.  

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function toArray(root: Node | null): Node[] {
  if (root == null) {
    return [];
  }

  return toArray(root.left).concat([root]).concat(toArray(root.right));
}


function treeToDoublyList(root: Node | null): Node | null {
  const xs = toArray(root);
  if (xs.length === 0) {
    return null;
  }

  for (let i = 0; i < xs.length; i += 1) {
    const next = xs[(i + 1) % xs.length];
    const curr = xs[i];

    curr.right = next;
    next.left = curr;
  }

  xs[0].left = xs[xs.length - 1];
  return xs[0];
};
```