# [ C++ ] Easy and concise solution | DFH | Logic Of Protection

**Author:** dhairyabahl
**Votes:** 11
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1339945/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1339945/)

---

**Approach** : In this question, first we are calculating sum from root to leaf. Then according to my logic, if **sum of root to leaf is greater than limit, then it will protect all of its ancestors**.

This logic of protection sounds a bit wierd \uD83D\uDE02 but that's how I thought this solution. This logic is over here because **all** the nodeToRootSum through that node must have sum lesser than limit. Otherwise it will get **protected by that nodeToRootSum which is greater than limit**. Hope you understood this logic of protection \uD83D\uDE02. If you have any queries, free feel to ask in comments.

If none of the nodeToRootSums is greater than limit, then only we will delete that node coz in that case both of its children will be returing false.

PS : I am not sure if this logic is perfect, feel free to suggest better logic in comments. Thanks for reading. Do upvote if you liked my solution \uD83D\uDE42 or my approach of protection \uD83D\uDE02 lol. 

```
class Solution {
public:
    
    bool insufficientTraversal(TreeNode* &root , int limit,int sum ){
        
        if(root == NULL)
            return false;
        
        if(root -> left == NULL && root -> right == NULL){
            
            if(sum+root->val >= limit)
                return true;
            
            return false;
            
        }
        
        bool left = insufficientTraversal(root->left , limit,sum+root->val);
        bool right= insufficientTraversal(root->right, limit,sum+root->val);
        
        if(left == false)
            root-> left = NULL;
        
        if(right == false)
            root->right = NULL ;
        
        if(left || right)
            return true;
        
        return false;
        
    }
    
    TreeNode* sufficientSubset(TreeNode* root, int limit) {
        
        if(root == NULL)
            return NULL;
        
        bool ans = insufficientTraversal(root,limit,0);
        
        if(ans == false)
            return NULL;
        
        return root ;
    }
};
```

Note : Same logic is giving 0ms in Java and it is giving 30ms in C++ . I dont know why this is happening.