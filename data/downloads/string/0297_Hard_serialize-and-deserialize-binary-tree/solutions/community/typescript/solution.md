# Why Not? 🤔 | No Code Solution 🤯 | Beats 100% 💯 | JavaScript 👨‍💻

**Author:** ArtemLeet
**Votes:** 3
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/3902404/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/3902404/)

---

![image.png](./images/0.png)

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

/*
 * Encodes a tree to a single string.
 */
const serialize = JSON.stringify;

/*
 * Decodes your encoded data to tree.
 */
const deserialize = JSON.parse;


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```