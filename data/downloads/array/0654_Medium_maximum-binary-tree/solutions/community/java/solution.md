# Two Solution With Detail Explain

**Author:** gcl272633743
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/1072835/](https://leetcode.com/problems/maximum-binary-tree/solutions/1072835/)

---

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
    /**
        Solution2: use monotonic decrease stack
        if current num is less than peek num in stack link current num to right child
        of peek elememnt in stack
        
        while current num is greater than peek num in stack
           link current node left child to peek num in stack
        
        3   stack 3              tree: 3
        2   stack 3 2            tree: 3
                                        \\
                                         2
        1   stack 3 2 1          tree: 3
                                        \\
                                         2
                                          \\
                                           1
        6: a) 
            stack 3 2            tree: 3 
                                        \\
                                         2   6
                                          \\ /
                                           1
           stack 3               tree:
                                       3   6
                                        \\ /
                                         2
                                          \\
                                           1
          stack ''               tree: 6
                                      /
                                     3
                                      \\
                                       2
                                        \\
                                         1
          stack 6                               
        
        5: stack 6 5             tree: 6
                                      / \\
                                     3   5
                                      \\
                                       2
                                        \\
                                         1 
       
       0: stack 6 5 0           tree:   6
                                     /    \\
                                    3      5
                                     \\    /
                                      2  0
                                       \\
                                        1
       
        
    */
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        Deque<TreeNode> stack = new LinkedList<>();
        for(int n : nums){
            TreeNode cur = new TreeNode(n);
            while(!stack.isEmpty() && stack.peek().val < n){
                cur.left = stack.pop();
            }
            if(!stack.isEmpty()){
                stack.peek().right = cur;
            }
            stack.push(cur);
        }
        return stack.isEmpty() ? null : stack.removeLast();
    }
    
    /**
    Solution 1 : 
        Time Complexcity : O(n^2)
        Space Complexcity : O(logn)
    */
    // public TreeNode constructMaximumBinaryTree(int[] nums) {
    //     if(nums==null || nums.length==0) return null;
    //     return helper(nums,0,nums.length-1);
    // }
    // public TreeNode helper(int[] nums, int l,int r){
    //     if(l>r) return null;
    //     if(l==r) return new TreeNode(nums[l]);
    //     int maxIdx = l;
    //     // find maxmium element
    //     for(int i=l;i<=r;i++){
    //         if(nums[i]>nums[maxIdx]) maxIdx = i;
    //     }
    //     TreeNode root = new TreeNode(nums[maxIdx]);
    //     root.left = helper(nums, l, maxIdx-1);
    //     root.right = helper(nums, maxIdx+1, r);
    //     return root;
    // }
}
```