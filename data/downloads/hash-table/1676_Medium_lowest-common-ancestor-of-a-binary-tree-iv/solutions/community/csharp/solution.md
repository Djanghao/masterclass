# LCA recursion

**Author:** gustavoja
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/4874742/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/4874742/)

---

# Intuition
Initially, I iterated over the paths where I found the required node using recursion.

# Approach
Later, I realized that it was too slow, so I attempted to eliminate the loops and rely solely on recursion.

# Complexity
- Time complexity:
Let n be the total number of nodes in the binary tree and k be the number of nodes in the HashSet.
Converting the nodes array to a HashSet takes O(k) time.
The worst-case scenario for the recursion is still O(n * k), where n is the number of nodes in the binary tree and k is the number of nodes in the nodes HashSet.

- Space complexity:
The space complexity of the function is determined by the recursion stack and the HashSet.
The HashSet requires O(k) space to store the nodes.
In the worst-case scenario, the function may recursively call itself for each node in the binary tree.
Therefore, the space complexity of the function is O(n + k), where n is the height of the binary tree and k is the number of nodes in the nodes HashSet.

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode[] nodes) {

        if(root is null || nodes.Any(r=>r == root))
            return root;

        var left = LowestCommonAncestor(root.left, nodes);
        var right = LowestCommonAncestor(root.right, nodes);

        if(left != null && right != null)
            return root;
        
        return left ?? right;
    }
}
```