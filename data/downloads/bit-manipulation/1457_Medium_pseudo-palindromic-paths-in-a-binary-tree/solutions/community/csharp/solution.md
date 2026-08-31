# Pseudo-Palindromic Paths: Efficient DFS Algo

**Author:** madhusudanrathi99
**Votes:** 2
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4618131/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4618131/)

---

# Intuition
The intuition is to use a depth-first search (DFS) to traverse the tree and a hash set to keep track of the node values in the current path. A path is pseudo-palindromic if it contains at most one node value with an odd count.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**:
Create a hash set `map` to store the node values in the current path and a variable `count` to keep track of the number of pseudo-palindromic paths.
2. **DFS Traversal**: 
Use a helper function to perform a DFS traversal of the tree. For each node, add its value to `map`. If the value is already in `map`, remove it. This ensures that `map` only contains node values with an odd count.
3. **Check Pseudo-Palindromic Path**: 
If the current node is a leaf node (both left and right children are null), check if the path is pseudo-palindromic by checking the size of `map`. If `map` contains at most one node value, increment `count`.
4. **Backtrack**: 
After visiting a node, remove its value from `map`. If the value is not in `map`, add it back. This ensures that `map` correctly represents the node values in the current path after backtracking.
5. **Return Result**: 
After the DFS traversal, return `count` as the result.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(H)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public void helper(TreeNode root, HashSet<int> map, ref int count) {
        if(root == null)
            return;

        if(!map.Add(root.val))
            map.Remove(root.val);

        if(root.left == null && root.right == null) {
            if(map.Count < 2)
                count++;
        } else {
            helper(root.left, map, ref count);
            helper(root.right, map, ref count);
        }

        if(!map.Remove(root.val))
            map.Add(root.val);
    }

    public int PseudoPalindromicPaths (TreeNode root) {
        int ans = 0;
        HashSet<int> map = new HashSet<int>();
        helper(root, map, ref ans);
        return ans;
    }
}
```