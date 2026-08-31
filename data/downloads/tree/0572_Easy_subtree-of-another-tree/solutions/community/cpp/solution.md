# C++ solution using tree traversal with explanation (explained)

**Author:** shweta_k
**Votes:** 70
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/1160972/](https://leetcode.com/problems/subtree-of-another-tree/solutions/1160972/)

---


 In this question we need to check if t is a subtree of s. So we will start with comparing between s and t itself.
If they are equal then yay we got our subtree. 
else we need to pass the left and right nodes of s and check if they are subtree.
We will perform the same thing till we reach end of s or subtree is found
    
Here is code with comments

 ```
class Solution {
public:
    
    bool isSametree(TreeNode* s, TreeNode* t){
        //if any of the tree is null then there is no need to compare 
        if(!s || !t){
            //if either of them are null both of them need to be null to be true
            return s==NULL && t==NULL;
        } //now since both are not null check if they have same value otherwise return false
        else if(s->val == t->val){
            //if value is same then check if both its left and right sub-tree are same          
            return isSametree(s->left,t->left) && isSametree(s->right,t->right);
        }
        else{
            return false;
        }
    }
    bool isSubtree(TreeNode* s, TreeNode* t) {
          if(!s){
              //if main tree is null then return false
              return false;
          }   
          else if(isSametree(s,t)){
              //check if s and t are same, if yes return true
              return true;
          }
          else{
              //if s and t are not same then pass left and right nodes, and check same for that nodes as well as its child nodes.
              return isSubtree(s->left,t) || isSubtree(s->right,t);
          }
    }
};
```


Here is the same code without comments for readability  :-)


 ```
class Solution {
public:
    
    bool isSametree(TreeNode* s, TreeNode* t){
        if(!s || !t){
            return s==NULL && t==NULL;
        } 
        else if(s->val == t->val){    
            return isSametree(s->left,t->left) && isSametree(s->right,t->right);
        }
        else{
            return false;
        }
    }
    bool isSubtree(TreeNode* s, TreeNode* t) {
          if(!s){
              return false;
          }   
          else if(isSametree(s,t)){
              return true;
          }
          else{
              return isSubtree(s->left,t) || isSubtree(s->right,t);
          }
    }
};
```

