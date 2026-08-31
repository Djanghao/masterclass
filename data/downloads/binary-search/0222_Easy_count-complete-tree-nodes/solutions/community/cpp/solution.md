# C++ | 4 Methods | One line solution | Easy-To-Understand | Clean Code

**Author:** vaibhav4859
**Votes:** 58
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/1538458/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/1538458/)

---



***Method-1 : ( 1-Line )***
```
int countNodes(TreeNode* root) {
        return root == NULL ? 0 : countNodes(root->left) + countNodes(root->right) + 1;
    }
};
```

***Method - 2 : ( Effecient Approach )***
```
class Solution {
public:
    int countNodes(TreeNode* root) {
        if(!root)
            return 0;
        int lh = 0, rh = 0;
        TreeNode* l = root, *r = root;
        while(l){
            lh++;
            l = l->left;
        }
        while(r){
            rh++;
            r = r->right;
        }
        if(lh == rh)
            return pow(2, lh) - 1;
        
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};
```
*Time Complexity : O( logN  logN )*

***Method - 3 : ( Using queue )***
```
class Solution {
public:
    int countNodes(TreeNode* root) {
        if(root == NULL)
        return 0;
    
        int res = 0;
        queue<TreeNode *> q;
        q.push(root);
        while(!q.empty())
        {

            for(int i = 0; i < q.size(); ++ i)
            {
                 ++ res;
                TreeNode *p = q.front();
                q.pop();

                if(p -> left != NULL)
                    q.push(p -> left);
                if(p -> right != NULL)
                    q.push(p -> right);
            }
        }

        return res;
    }
};
```

***Method - 4 : ( 0(n) approach )***

```
class Solution {
public:
    int count = 0;
    void helper(TreeNode* root){
         
        if(root)
            count++;
        
        if(root->left)
        helper(root->left);
        if(root->right)
        helper(root->right);
        
    }
    
    int countNodes(TreeNode* root) {
        if(!root)
            return 0;
       helper(root);
        return count;
    }
};
```
*Time Complexity : O(n)*

Hope you liked it , kindly upvote !!

Happy Coding \uD83E\uDD17