# All the possible cases I have written here Read and try . Easy Code.(paper work is must)

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/4961472/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/4961472/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
 Divide the task in to Two sections 
1) keep a max path sum from node to node for the final answer.
1. Take a small sub tree write down the max path sum occuring cases.
 Max of all below cases will be your final answer Max(1,2,3,4)
Math path occurs 
```
 input [1,2,3]
 1) case 1 : root.val directly "may be a single node" 1
 2) case 2 : root.val +root.left "root with root.left" 1->2 
 3) case 3 : root.val +root.right "root with root.right" 1->3
 4) Case 4 : root.val + root.left+root.right "root with root.left and root.rigth" 1->2->3
 visualize them => 
``` 
2)  Return max sum for each node with respective childrens left and right
    for a parent node the max path sum will
be the Max of all below cases will be your perticular node answer Max(1,2,3)
Math path occurs 
```
1) case 1: root.val
2) case 2 :  root.left+ root.val 
3) case 3 : root.right +root.val  
// 4) Case 4 : root.val + root.left+root.right (Dont include this case. your answer will depends on returning path of Max(1,2,3) but not 4 the case. Initally solve the problem by including case then you will get the idea why not include.
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int max =Integer.MIN_VALUE;
    int traversal(TreeNode root){
        if(root == null) return 0;
      
        if(root.left==null && root.right ==null){
        
            max = Math.max(max,root.val); 
            return root.val;
        } 
        int lh = traversal(root.left); // get left max value
        int rh = traversal(root.right); //get right max Vale

        int max1 =Math.max(root.val+lh,root.val+rh);
        int max2 =Math.max(root.val,root.val+lh+rh);
        max = Math.max(Math.max(max1,max2),max);
    
       return Math.max(root.val,max1);
    }
    public int maxPathSum(TreeNode root) {
        traversal(root);
        return max;
    }
}
```