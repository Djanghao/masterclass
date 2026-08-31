# Concise DFS solution [cpp and Java(0ms)]

**Author:** Vp-
**Votes:** 7
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1340243/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1340243/)

---

We will approach the question in preorder computing the sum of nodes from root to leaf, if the sum becomes less than limit then we know that  the node has become insufficient, so we will simply return NULL,  and it is  observable that If all leaves relatively connected under a node are insufficient, then that node is insufficient.

```
class Solution {
public:  
    TreeNode* sufficientSubset(TreeNode* root, int limit, int sum = 0) 
    {
        if(!root)  return NULL;
        
        if(!root->left && !root->right)
           return root->val + sum < limit ? NULL : root;
        
        root->left = sufficientSubset(root->left,limit,sum + root->val);
        root->right = sufficientSubset(root->right,limit,sum + root->val);
        
        return !root->left && !root->right ? NULL : root;
    }
};
```

the cpp code for the same 

```
class Solution {   
   public TreeNode helper(TreeNode root,int limit, int sumTillNow)
    {
        if(root == null)  return null;
        
        if(root.left == null && root.right == null)
             return root.val + sumTillNow < limit ? null : root;
        
        root.left = helper(root.left,limit,sumTillNow + root.val);
        root.right = helper(root.right,limit,sumTillNow + root.val);
        
        return root.left == null && root.right == null ? null : root;
    }
    
    
    public TreeNode sufficientSubset(TreeNode root, int limit){
        return helper(root,limit,0);
    }
}
```