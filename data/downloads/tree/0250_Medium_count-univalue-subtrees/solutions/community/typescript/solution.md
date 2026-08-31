# TypeScript Beats 100% Runtime 87.5% Memory

**Author:** PhillipChaffee
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/2744662/](https://leetcode.com/problems/count-univalue-subtrees/solutions/2744662/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(H)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

function countUnivalSubtrees(root: TreeNode | null): number {
  return univalCount(root)[0];
};

function univalCount(node: TreeNode | null): [number, boolean] {
  if(node === null) return [0, true];
  if(node.left === null && node.right === null) return [1, true];
  
  const [lCount, lUnival] = univalCount(node.left);
  const [rCount, rUnival] = univalCount(node.right);
  
  let stillUnival = true;
  if(!lUnival || (node.left && node.left.val !== node.val)) stillUnival = false;
  if(!rUnival || (node.right && node.right.val !== node.val)) stillUnival = false;
  
  const result = (stillUnival ? 1 : 0) + lCount + rCount;
  
  return [result, stillUnival];
}
```