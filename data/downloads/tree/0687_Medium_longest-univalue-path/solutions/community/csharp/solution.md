# C# DFS With Backtracking Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/5269661/](https://leetcode.com/problems/longest-univalue-path/solutions/5269661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->We need to traverse the binary tree and keep track of the longest path where all nodes have the same value. We'll use a recursive approach to traverse the tree and calculate the lengths of univalue paths.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization:
//  *'maxLength' is used to keep track of teh longest univalue path found.
//  *The 'LongestUnivaluePath' function initiates the recursive travel.

//  Recursive Travel:
//  *The 'FindLongestPath' function perfomrs a depth-first traversal of the tree.
//  *For each node, it calculates the length of the longest univalue path in the left and right subtrees.
//  *It updates 'maxLength' with the sum of the left and right univalue path lengths if the current node's value
//  matches its parent's value.

//  Return Value:
//  *The 'FindLongestPath' function returns the length of teh longegst univalue path that can be extended to the parent
//  node.
//  *If the current node's value does not match the parent node's value, return 0.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where n is the number of nodes in the tree.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(h), where h is the height of the tree. This space complexity comes from the recursion stack.
(Worst case O(n). In best case (for balanced tree), the height h would be O(log n)).
___

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
    private int maxLength = 0;
    
    public int LongestUnivaluePath(TreeNode root) {
        if (root == null) return 0;
        FindLongestPath(root, root.val);
        return maxLength;
    }
    
    private int FindLongestPath(TreeNode node, int parentVal) {
        if (node == null) return 0;
        
        int left = FindLongestPath(node.left, node.val);
        int right = FindLongestPath(node.right, node.val);
        
        maxLength = Math.Max(maxLength, left + right);
        
        if (node.val == parentVal) {
            return Math.Max(left, right) + 1;
        }
        
        return 0;
    }
}
```