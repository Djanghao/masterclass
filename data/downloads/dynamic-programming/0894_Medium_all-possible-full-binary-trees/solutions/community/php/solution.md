# Beats 94.67% in Python3 (DP)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/5312365/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/5312365/)

---

# Approach
The idea is to build up the solutions incrementally by considering the possible ways to split the nodes into left and right subtrees.

# Complexity
- Time complexity:
$$O(n^2)$$
- - The outer loop iterates from 3 to n in steps of 2, resulting in O(n/2) = O(n) iterations.
- - For each iteration of the outer loop, there are two nested loops that iterate through all possible left and right subtree sizes. The number of iterations for these nested loops is proportional to the current size i, resulting in O(i) iterations.
- - Since the nested loops iterate up to n, the overall time complexity is O(n^2).

- Space complexity:
$$O(n)$$ because the dynamic programming table dp has a size of n+1, as it stores all possible trees with sizes from 0 to n.

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        # Base case: n = 0, return empty list
        if n == 0:
            return []
        
        # Base case: n = 1, return a tree with single node
        if n == 1:
            return [TreeNode(0)]
        
        # Create a dynamic programming table to store all possible trees
        dp = [[] for _ in range(n+1)]
        
        # Base case: n = 1, there is only one tree with root node 0
        dp[1].append(TreeNode(0))
        
        # Iterate through all possible tree sizes
        for i in range(3, n+1, 2):
            # Iterate through all possible left subtree sizes
            for j in range(1, i-1//2):
                # Iterate through all possible left subtrees
                for left in dp[j]:
                    # Iterate through all possible right subtrees
                    for right in dp[i-1-j]:
                        # Create a new tree with root node 0 and left and right subtrees
                        dp[i].append(TreeNode(0, left, right))
                        
        # Return the list of trees with n nodes
        return dp[n]

        
```
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    // Base case: n = 0, return empty list
    if (n === 0) {
        return [];
    }
    
    // Base case: n = 1, return a tree with single node
    if (n === 1) {
        return [new TreeNode(0)];
    }
    
    // Create a dynamic programming table to store all possible trees
    const dp = Array.from({ length: n + 1 }, () => []);
    
    // Base case: n = 1, there is only one tree with root node 0
    dp[1].push(new TreeNode(0));
    
    // Iterate through all possible tree sizes
    for (let i = 3; i <= n; i += 2) {
        // Iterate through all possible left subtree sizes
        for (let j = 1; j < i - 1; j += 2) {
            // Iterate through all possible left subtrees
            for (const left of dp[j]) {
                // Iterate through all possible right subtrees
                for (const right of dp[i - 1 - j]) {
                    // Create a new tree with root node 0 and left and right subtrees
                    dp[i].push(new TreeNode(0, left, right));
                }
            }
        }
    }
    
    // Return the list of trees with n nodes
    return dp[n];
};
```
``` php []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param Integer $n
     * @return TreeNode[]
     */
    function allPossibleFBT($n) {
         // Base case: n = 0, return empty list
        if ($n === 0) {
            return [];
        }
        
        // Base case: n = 1, return a tree with single node
        if ($n === 1) {
            return [new TreeNode(0)];
        }
        
        // Create a dynamic programming table to store all possible trees
        $dp = array_fill(0, $n + 1, []);
        
        // Base case: n = 1, there is only one tree with root node 0
        $dp[1][] = new TreeNode(0);
        
        // Iterate through all possible tree sizes
        for ($i = 3; $i <= $n; $i += 2) {
            // Iterate through all possible left subtree sizes
            for ($j = 1; $j < $i - 1; $j += 2) {
                // Iterate through all possible left subtrees
                foreach ($dp[$j] as $left) {
                    // Iterate through all possible right subtrees
                    foreach ($dp[$i - 1 - $j] as $right) {
                        // Create a new tree with root node 0 and left and right subtrees
                        $dp[$i][] = new TreeNode(0, $left, $right);
                    }
                }
            }
        }
        
        // Return the list of trees with n nodes
        return $dp[$n];
    }
}
```