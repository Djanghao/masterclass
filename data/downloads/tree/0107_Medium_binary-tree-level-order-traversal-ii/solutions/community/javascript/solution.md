# Iterative and recursive level-order traversal solutions in JavaScript

**Author:** thepatriot
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/388837/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/388837/)

---

## Recursive solution
``` javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let h = height(root); /* get the height using helper fn below */
  let results = []; /* init an array to hold final answer */
  let depth = 1; /* init depth to 1 since we are using 1-based height */
  for (depth; depth <= h; depth++) {
    /* iterate from depth to tree height */
    results.push(levelOrder(root, depth)); /* push an array of each level's node values to results */
  }

  return results.reverse();
};

/*
  recursive level-order traversal which collects all nodes
  from each level into an array.
*/
function levelOrder(node, d, level = []) {
  if (node == null) {
    return level;
  }
  if (d === 1) {
    level.push(node.val);
  } else if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}

/*
  computes the largest root-to-leaf path,
  using 1-based counting.
*/
function height(node) {
  if (node == null) {
    /* base case */
    return 0;
  }
  let left = height(node.left);
  let right = height(node.right);

  return Math.max(left, right) + 1;
}
```

## Iterative solution using a queue
```javascript
var levelOrderBottom = function(root) {
  if (root == null) {
    return [];
  }
  let queue = [];
  let results = [];
  queue.push(root);
  while (queue.length > 0) {
    /* level-order traversal */
    let level = []; /* collect node.vals for current level */
    let size = queue.length; /* instead of using recursion, we will use a loop bounded by the queue size */
    while (size > 0) {
      let current = queue.shift(); /* remove and capture next item from queue */
      level.push([current.val]); /* add the current val to the current level array */

      /* if we have a left or right subtree, explore */
      if (current.left != null) {
        queue.push(current.left);
      }

      if (current.right != null) {
        queue.push(current.right);
      }

      size--; /* level complete, decrement size and proceed */
    }

    results.push(level); /* push the last level's results */
  }
  return results.reverse(); /* return results, in reverse order */
};
```

Thank you for viewing and please add feedback and/or comments.