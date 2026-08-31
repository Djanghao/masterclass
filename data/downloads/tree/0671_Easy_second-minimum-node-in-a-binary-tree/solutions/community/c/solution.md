# C++ || HashSet || Inorder Traversal || DFS || 100% Faster 0ms

**Author:** Akv_04
**Votes:** 20
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/1426155/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/1426155/)

---

**Please Upvote if you liked it**
 
     class Solution {
     public:
     void dfs(TreeNode* root,set<int> &s){                                            
       if(root==NULL)
            return;
        dfs(root->left,s);
        s.insert(root->val);
        dfs(root->right,s);
        }
    
    int findSecondMinimumValue(TreeNode* root) {
        set<int> s;
        dfs(root,s);
        if(s.size()==1)
            return -1;
        auto it=s.begin();
        it++;
        return *it;
         }
		 };