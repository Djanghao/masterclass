# Easy C++ solution

**Author:** saiteja_balla0413
**Votes:** 14
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/1308753/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/1308753/)

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
    TreeNode* constructFromPrePost(vector<int>& pre, vector<int>& post) {
     
        //map all the elements of postorder with their index
        
        unordered_map<int,int> mp;
        for(int i=0;i<post.size();i++)
            mp[post[i]]=i;
        
        int preorderIndex=0;
        return buildTree(pre,mp,preorderIndex);
        
    }
    TreeNode* buildTree(vector<int>& pre,unordered_map<int,int>& mp,int& preorderIndex)
    {
        int curr=pre[preorderIndex];
        TreeNode* n=new TreeNode(curr);
        preorderIndex++;
        if(preorderIndex<pre.size()  && mp[pre[preorderIndex]] < mp[curr])
        {
            //the next elemenet is present to the left of tree
            n->left=buildTree(pre,mp,preorderIndex);
        }
        else 
            return n;
        if(preorderIndex < pre.size() && mp[pre[preorderIndex]] < mp[curr])
        {
            n->right=buildTree(pre,mp,preorderIndex);
        }
        return n;
        
    }
};
```
**Upvote if this helps you ;)**