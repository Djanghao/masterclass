# clean java post-order.

**Author:** ian8765
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2011415/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2011415/)

---

postOrder - 
        - each time return two things back to parent
            - max Descending len from self
            - max Ascending  len from self
        - also update max as if this node is the intersection of best answer.  /->\\ or /<-\\ 

```
class Solution {
    int max = 0;
    public int longestConsecutive(TreeNode root) {
        dfs(root);
        return max;
    }
    
    private int[] dfs(TreeNode root){
        if (root == null)
            return new int[0];
        
        // continue all the way down regardless.
        int[] left = dfs(root.left);
        int[] right = dfs(root.right);
        
        //ld = leftDescending la = leftAscending
        int ld = (left.length > 0 && root.val == root.left.val+1) ? left[0] : 0 ;
        int la = (left.length > 0 && root.val == root.left.val-1) ? left[1] : 0 ;
        int rd = (right.length > 0 && root.val == root.right.val+1) ? right[0] : 0 ;
        int ra = (right.length > 0 && root.val == root.right.val-1) ? right[1] : 0 ;
        
        /* maxHere is either: 
                    - going from left to right: left is less and right is more 
                    - going from right to left: right is less and left is more
                +1 for self
        */
        int maxHere = Math.max(ld + ra, la + rd) + 1;
        max = Math.max(maxHere, max);
        
        /* partial 
                - index 0 is best descending: ld or rd +1 for self
                - index 1 is best ascending:  la or ra +1 for self
        */
        int[] partial = {Math.max(ld,rd)+1, Math.max(la,ra)+1};
        return partial;
    }
}
```