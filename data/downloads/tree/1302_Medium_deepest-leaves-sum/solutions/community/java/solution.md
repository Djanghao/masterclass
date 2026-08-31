# [Java] Recursive, faster than 100.00%

**Author:** tusharj227
**Votes:** 149
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/565187/](https://leetcode.com/problems/deepest-leaves-sum/solutions/565187/)

---

```
class Solution {
    
   private int maxLevel = 0;
    private int sum = 0;
    
    public int deepestLeavesSum(TreeNode root) {
        if(root == null) return 0;
        calculateSumAtLevel(root,0);
        return sum;
        
    }
    
    private void calculateSumAtLevel(TreeNode root,int level){
        
       if(root == null) return;
        if(level > maxLevel){
            sum = 0;
            maxLevel = level;
        }
        if(level == maxLevel){
            sum = sum + root.val;
        }
        calculateSumAtLevel(root.left,level+1);
        calculateSumAtLevel(root.right,level+1);
    }
}

```