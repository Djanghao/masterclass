# Runtime: 0 ms, faster than 100.00% [c++]

**Author:** rajat_gupta_
**Votes:** 157
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/773305/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/773305/)

---


     class Solution {
         public:
            vector<vector<int>> levelOrder(TreeNode* root) {
                if(root==NULL)
                   return {};
               vector<vector<int>> ans; 
                queue<TreeNode*> q;
                q.push(root);
                TreeNode *temp;
                int len;
                while(!q.empty()){
                   len=q.size();
			       vector<int> v;
                   for(int i=0;i<len;i++){
                        temp=q.front();
                        q.pop();
                        v.push_back(temp->val);

                       if(temp->left) q.push(temp->left);
                       if(temp->right) q.push(temp->right);
                    }
			        ans.push_back(v);
                }
              return ans;
            }
         };
	
	
**Feel free to ask any question in the comment section.
If you like this solution, do UPVOTE.
Happy Coding :)**
	