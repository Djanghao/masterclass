# [Java] 0ms simple

**Author:** shuangpan
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/715694/](https://leetcode.com/problems/maximum-average-subtree/solutions/715694/)

---

```
class Solution {
    private double average = 0;
    public double maximumAverageSubtree(TreeNode root) {
        helper(root);
        return average;
    }
    
    private int helper(TreeNode root){
        if(root == null)
            return 0;
        int left = helper(root.left);
        int right = helper(root.right);
        int number = left + right + 1;
        if(left != 0)
            root.val += root.left.val;
        if(right != 0)
            root.val += root.right.val;
        average = Math.max(average, (double)(root.val) / number);
        return number;
    }
}
```