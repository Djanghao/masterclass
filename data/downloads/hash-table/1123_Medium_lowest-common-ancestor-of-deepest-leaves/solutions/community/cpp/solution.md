# BFS + LCA | C++

**Author:** TusharBhart
**Votes:** 8
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/2914839/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/2914839/)

---

```
class Solution {
    TreeNode* lca(TreeNode* root, TreeNode* a, TreeNode* b) {
        if(!root || root == a || root == b) return root;
        auto l = lca(root -> left, a, b);
        auto r = lca(root -> right, a, b);
        return l && r ? root : l && !r ? l : !l && r ? r : NULL;
    }
public:
    TreeNode* lcaDeepestLeaves(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        vector<TreeNode*> v;

        while(q.size()) {
            int n = q.size();
            v.clear();
            while(n--) {
                TreeNode* temp = q.front(); q.pop();
                v.push_back(temp);
                if(temp -> left) q.push(temp -> left);
                if(temp -> right) q.push(temp -> right);
            }
        }
        TreeNode* ans = v[0];
        for(auto i : v) ans = lca(root, ans, i);
        
        return ans;
    }
};
```