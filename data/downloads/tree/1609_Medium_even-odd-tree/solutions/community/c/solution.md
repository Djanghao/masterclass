# C++ || Beast 90% || Simplest Solution || Level Order Traversal

**Author:** garvit14
**Votes:** 11
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/2759549/](https://leetcode.com/problems/even-odd-tree/solutions/2759549/)

---

```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
        if(root==NULL)
            return false;
        queue<TreeNode*> q;
        q.push(root);
        int level=0;
        
        while(!q.empty())
        {
            int size=q.size();
            vector<int> temp;
            
            for(int i=0;i<size;i++)
            {
                TreeNode *front=q.front();
                q.pop();
                temp.push_back(front->val);   
                if(front->left)
                    q.push(front->left);
                if(front->right)
                    q.push(front->right);
            }
            if(level==0 || level%2==0){
//                 Checking conditions for even level
                for(int i=0;i<temp.size();i++)
                    if(temp[i]%2==0)
                        return false;
                for(int i=0;i<temp.size()-1;i++)
                    if(temp[i]>=temp[i+1])
                        return false;
            }
            else{
//                Checking conditions for odd level
                for(int i=0;i<temp.size();i++)
                    if(temp[i]%2!=0)
                        return false;
                for(int i=0;i<temp.size()-1;i++)
                    if(temp[i]<=temp[i+1])
                        return false;
            }
            level++;
        }
        return true;
    }
};

/*
if(itHelps())
{
  upvote++;
 }
 */
```
