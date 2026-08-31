# [C++] Easy BFS with Map

**Author:** kalEl_MS
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/821324/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/821324/)

---

```
class Solution {
public:
    vector<vector<int>> verticalOrder(TreeNode* root) {
        vector<vector<int>> res;
        
        if(!root) return res;
        
        map<int, vector<int>> map;
        
        queue<pair<TreeNode* , int>> q;
        
        q.push({root, 0});
        
        while(!q.empty()) {
            int size = q.size();
            
            for(int i = 0; i < size; i++) {
                TreeNode* curr = q.front().first;
                int dir = q.front().second;
                q.pop();
                map[dir].push_back(curr->val);
                if(curr->left) q.push({curr->left, dir - 1});
                if(curr->right) q.push({curr->right, dir + 1});
            }
        }
        
        for(auto i : map) {
            res.push_back(i.second);
        }
        return res;
    }
};
```