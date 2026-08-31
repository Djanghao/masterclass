# Typescript. 100% beat time and space

**Author:** gvalentyuk8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/5848529/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/5848529/)

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
```typescript []
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
/**
 * @param {TreeNode} root
 * @param {TreeNode} u
 * @return {TreeNode}
 */
function findNearestRightNode(root: TreeNode, u: TreeNode): TreeNode | null {
    if (!root) return null;

    let queue = [root];
    while (queue.length) {
        let length = queue.length, count = 0;

        while (count < length) {
            count++
            const node = queue.shift();
            if (node === u && count !== length) {
                return queue.shift();
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
    }

    return null
};
```