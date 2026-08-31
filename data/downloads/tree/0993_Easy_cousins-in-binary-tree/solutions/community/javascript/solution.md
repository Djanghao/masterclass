# JavaScript iterative BFS solution

**Author:** shengdade
**Votes:** 22
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/514578/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/514578/)

---

```javascript
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;
    // iterate through one level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      // check if children are x and y
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false;
      }
      // find x and y at the same level
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (foundX && foundY) return true;
  }
  return false;
};
```

* 103/103 cases passed (56 ms)
* Your runtime beats 81.57 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.8 MB)