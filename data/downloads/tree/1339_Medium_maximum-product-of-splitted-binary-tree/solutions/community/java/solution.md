# Java Simple and easy DFS solution,, clean code with comments

**Author:** satyaDcoder
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1419339/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1419339/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**

```
class Solution {
    
    static int MOD = (int)(1e9 + 7);
    
    int nodesSum;
    long maximumProduct;
    public int maxProduct(TreeNode root) {
        
        //find all the node sum
        nodesSum = getAllNodeSum(root);
        
        maximumProduct = 0l;
        
        //find the max product
        findMaxProduct(root);
        
        return (int)(maximumProduct % MOD);
    }
    
    private int getAllNodeSum(TreeNode node){
        if(node == null) return 0;
        
        return getAllNodeSum(node.left) + getAllNodeSum(node.right) + node.val;
    }
    
    
    private int findMaxProduct(TreeNode node){
        if(node == null) return 0;
        
        int substree1Sum = findMaxProduct(node.left) + findMaxProduct(node.right) + node.val;
        
        
        //remaining node, will be subtree 2 sum
        int substree2Sum = nodesSum - substree1Sum;
        
        maximumProduct = Math.max(maximumProduct, (long)substree1Sum * substree2Sum);
        
        return substree1Sum;
    }
}
```