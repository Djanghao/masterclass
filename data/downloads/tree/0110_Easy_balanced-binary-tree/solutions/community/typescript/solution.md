# Simple Typescript w/ Annotations

**Author:** evanoshea
**Votes:** 8
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/3502427/](https://leetcode.com/problems/balanced-binary-tree/solutions/3502427/)

---

# Intuition
Because balance depends on the left-max-depth and right-max-depth of every node, I know that every node must be traversed (DFS sounds good).


# Approach
So DFS every node.

At every level, we want to return the max-depth to the previous recursive call, so we return Math.max(maxLeftDepth, maxRightDepth).
BUT you should add 1 to it to account for the depth of the current node we're on. So `Math.max(maxLeftDepth, maxRightDepth) + 1`
This passes max-depth up the chain of recursion.

After maxLeftDepth and maxRightDepth are checked, we check to see if they differ by more than 1 -> `Math.abs(maxLeftDepth - maxRightDepth) > 1` and set a global variable `imabalanceFound` to true if that's the case.

Base case is when a node is not reached, so return 0 to indicate depth.

At end of function call, return opposite of global variable `imbalanceFound`

# Complexity
- Time complexity:
O(n), since every node is visited

- Space complexity:
O(1) since, only 1 variable required to hold boolean

# Upvote if helpful, thanks y'all

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

function isBalanced(root: TreeNode | null): boolean {
    let imbalanceFound = false;

    function dfs (thisNode) {
        if(!thisNode) return 0;

        else if(!imbalanceFound) { //prevents unnecessary recursion

            let leftDepth = dfs(thisNode.left)
            let rightDepth = dfs(thisNode.right)

            //stops the recursive calls if imbalance found
            if(Math.abs(leftDepth - rightDepth) > 1) imbalanceFound = true
            
            //pass up current depth + max below it
            return 1 + Math.max(leftDepth, rightDepth)
        
        }
    }
    dfs(root);

return !imbalanceFound
};



```