# [TS] Compact, easy to understand recursive solution (Runtime: 100%, Memory: 100%)

**Author:** tmythicator
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/4380090/](https://leetcode.com/problems/maximum-average-subtree/solutions/4380090/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Going with postorder tree traversal, each iteration over the node should return information about the number of nodes, that was visited and the cumulative sum of its values.

Base case would be the tree leaves (if node.left and node.right are null): it will return 1 as node amount in the subtree and node value as the sum of all values in the subtree.

Each time we are preparing the information tuple, we calculate the current average and compare it to the maxAverage across all the subtrees. 

After we successfully traversed the whole tree, we return the calculated maxAverage.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$, because of the call-stack size in skewed tree
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

function maximumAverageSubtree(root: TreeNode | null): number {
    let maxAverage = Number.NEGATIVE_INFINITY;
    type Tuple = {
        n: number,
        sum: number
    }
    const dfs = (node: TreeNode | null): Tuple => {
        if (!node) {
            return;
        }

        let curAmountNodes = 1;
        let curSum = node.val;
        if (node.left) {
            const infoLeft = dfs(node.left);
            curAmountNodes += infoLeft.n;
            curSum += infoLeft.sum;
        }

        if (node.right) {
            const infoRight = dfs(node.right);
            curAmountNodes += infoRight.n;
            curSum += infoRight.sum;
        }

        maxAverage = Math.max(maxAverage, curSum / curAmountNodes);
        return { n: curAmountNodes, sum: curSum }
    }
    dfs(root);
    return maxAverage;
};
```