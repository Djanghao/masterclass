# simple level order solution using queue | TS/JS

**Author:** garbagedevvv
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4203202/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4203202/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;
  const queue: { level: number; tree_node: TreeNode }[] = [];
  queue.push({ level: 0, tree_node: root });
  // const temp: number[][] = [];

  while (queue.length > 0) {
    const shifted = queue.shift();
    if (shifted) {
      const { level, tree_node } = shifted;
      if (result[level] === undefined) {
        result.push(tree_node.val);
      } else {
        if (result[level] < tree_node.val) result[level] = tree_node.val;
      }
      // if (!temp[level]) {
      //     temp.push([tree_node.val]);
      // } else {
      //     temp[level].push(tree_node.val);
      // }

      if (tree_node.right)
        queue.push({ level: level + 1, tree_node: tree_node.right });
      if (tree_node.left)
        queue.push({ level: level + 1, tree_node: tree_node.left });
    }
  }
  // console.log(temp);
  return result;
}

```