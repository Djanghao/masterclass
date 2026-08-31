# Simplest solution in JavaScript with BFS

**Author:** rkmamashev
**Votes:** 1
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2103289/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2103289/)

---

Runtime: 79 ms, faster than 93.62% of TypeScript online submissions for Vertical Order Traversal of a Binary Tree.
Memory Usage: 46.4 MB, less than 27.66% of TypeScript online submissions for Vertical Order Traversal of a Binary Tree.

```ts
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

function verticalTraversal(root: TreeNode | null): number[][] {
    const stack: [TreeNode | null, number][] = [[root, 500]]
    
    let result = [];
      
    while (stack.length) {
        let curLen = stack.length;
        
        let map = new Map();
        
        while (curLen) {
            curLen--;
            
            const [node, position] = stack.shift();
            
            if (!node) continue;
            
            if (!map.has(position)) map.set(position, []);
            map.get(position).push(node.val);
            
            stack.push([node.left, position - 1], [node.right, position + 1])
        }
        
        for (let [position, value] of map) {
            if (!result[position]) result[position] = [];
            
            result[position] = [...result[position], ...value.sort((a, b) => a - b)];
        }
    }
    
    return result.filter(item => item);
};
```