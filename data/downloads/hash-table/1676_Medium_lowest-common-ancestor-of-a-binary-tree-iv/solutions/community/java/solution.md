# Easy to understand Java Solution - 100% faster - No extra space

**Author:** rahul-raj
**Votes:** 9
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1309094/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1309094/)

---

```

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode[] nodes) {
        if(root==null){
            return null;
        }
        for(TreeNode node: nodes){
		   // if there's a match return the node directly.
		   // if there are multiple nodes on the list  within same direction of lookup, this could also return the first one with a match. 
            if(root == node){ 
                return root;
            }
        }
        
        TreeNode left = lowestCommonAncestor(root.left, nodes);
        TreeNode right = lowestCommonAncestor(root.right, nodes);
        // if both left and right nodes turn out to be not null, then it means root is the LCA
        if(left != null && right != null){
            return root;
        } else if(left == null && right == null){ // both null indicates that no elements present. 
            return null;
        }else if(left == null){ //if one of them is null, return the other one.
            return right;
        } else{
            return left;
        }
        
    }
    
    
}

```