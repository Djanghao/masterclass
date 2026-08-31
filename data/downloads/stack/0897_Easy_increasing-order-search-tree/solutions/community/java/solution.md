# Simple and Easy to Understand, Java 0 ms, faster than 100.00%  using dfs

**Author:** satyaDcoder
**Votes:** 23
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/1097619/](https://leetcode.com/problems/increasing-order-search-tree/solutions/1097619/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**

```
class Solution {

    TreeNode curr;
    public TreeNode increasingBST(TreeNode root) {
        //create a dummy node
        TreeNode first = new TreeNode(-1);
        
        //assign first
        curr = first;
        
		//depth first search
        dfs(root);
        
        return first.right;
    }
    
    private void dfs(TreeNode node){
        if(node == null) return;
        
        //go to left child
        dfs(node.left);
        
        //create a new node, and assign to right
        curr.right = new TreeNode(node.val);
        
        //move the current pointer
        curr = curr.right;
        
        dfs(node.right);
    }
}
```