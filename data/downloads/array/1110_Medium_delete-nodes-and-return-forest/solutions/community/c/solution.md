# c++ intuitive postorder solution, beats 100% (both time and memory)

**Author:** goelrishabh5
**Votes:** 154
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/328953/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/328953/)

---

```
class Solution {
public:
    
    vector<TreeNode*> res;
    set<int> dp;
    
    void util (TreeNode* &root)
    {
        if(root!=NULL)
        {
            util(root->left);
            util(root->right);
            if(dp.find(root->val)!=dp.end())
            {
                if(root->left)  res.push_back(root->left);
                if(root->right) res.push_back(root->right);
                root=NULL;
				delete root;
            }
        }
    }
    
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
	
        for(int i=0;i<to_delete.size();i++)
            dp.insert(to_delete[i]);
        util(root);
        if(root)
            res.push_back(root);
        return res;
    }
};
```