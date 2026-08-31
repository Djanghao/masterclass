# O(n) Time O(n) Space

**Author:** d_johnson
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/3142652/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/3142652/)

---

# Intuition
While, similar to [LCA of Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) (my solution [here](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3142624/o-logn-time-o-1-space/)), one complication is that we no longer are working with a binary search tree, but instead a Binary Tree. Therefore, we can't guarantee whether we should go left/right at a given node based on it's value. So we need a new intuition.

Naively, we can do a single pass to identify whether both nodes exist in the tree (since we aren't guaranteed they are), and then a second pass to identify the LCA. But ideally, we would use a single pass. Consider our various tree traversal methods, Using InOrder, PreOrder, Breadth-first, all have an inherent issue in that I may see my LCA before I see both $$p$$ and $$q$$, so I can't be certain they are the LCA in one pass. Let's instead consider a Post-Order Traversal. In that case, I can both identify as I go through the tree whether I found both $$p$$ and $$q$$ and then, upon finding them, return the LCA (either $$p$$, $$q$$, or the first parent of both). That will be a single pass, with $$O(n)$$ space for the recursion stack.

# Approach
1. Post-Order Traversal through the binary tree
2. Keep track of whether you have seen $$p$$ and $$q$$
3. If a given node is either return them to their parent
4. If you have found both, return self
5. At the end, as long as you found both $$p$$ and $$q$$, the LCA is the returned node

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

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
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        bool foundP = false;
        bool foundQ = false;

        TreeNode postOrderLca(TreeNode node) {
            if (node == null) {
                return null;
            }

            TreeNode left = postOrderLca(node.left);
            TreeNode right = postOrderLca(node.right);

            if (node == p || node == q) {
                if (node == p) {
                    foundP = true;
                } else {
                    foundQ = true;
                }

                return node;
            }

            if (left != null && right != null) {
                return node;
            }
            
            return left != null ? left : right;
        }

        TreeNode result = postOrderLca(root);

        return result != null && foundP && foundQ ? result : null;
    }
}
```