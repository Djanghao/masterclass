# TypeScript dfs simple solution

**Author:** tony3502
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3434250/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3434250/)

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

function longestZigZag(root: TreeNode | null): number {
    let max =0;
    function dfs(node,side,n){
        if(node===null){
            if(n>max)max=n;
            return;
        }

        if(side==='left'){
            dfs(node.right,'right',n+1);
            dfs(node.left,'left',0);
        }
        if(side==='right'){
            dfs(node.right,'right',0);
            dfs(node.left,'left',n+1);
        }
    }
    dfs(root.right,'right',0);
    dfs(root.left,'left',0);
    return max;
};
```