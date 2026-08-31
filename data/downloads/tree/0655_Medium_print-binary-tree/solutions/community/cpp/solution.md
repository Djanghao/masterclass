# ✅ C++ 100% faster || Easy implementation of BFS and DFS

**Author:** underground_coder
**Votes:** 7
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/3336396/](https://leetcode.com/problems/print-binary-tree/solutions/3336396/)

---

# Code
```
class Solution {
public:

    int findHeight(TreeNode* root){
        // if(!root) return -1;
        queue<TreeNode*> q;
        int height = -1;
        q.push(root);
        while(!q.empty()){
            height++;
            int size = q.size();
            while(size--){
                TreeNode* node = q.front(); q.pop();
                if(node->left) q.push(node->left);
                if(node->right) q.push(node->right);
            }
        }
        return height;
    }

    void print(TreeNode* root, vector<vector<string>> &grid, int i, int j, int height){
        if(!root) return;
        grid[i][j] = to_string(root->val);
        
        int factor = pow(2, height-i-1);
        int leftCol = (j-factor);
        int rightCol = (j+factor);

        print(root->left, grid, i+1, leftCol, height);
        print(root->right, grid, i+1, rightCol, height);

    }


    vector<vector<string>> printTree(TreeNode* root) {
        int height = findHeight(root);
        int n = height+1;
        int m = pow(2,n) - 1;
        vector<vector<string>> grid(n, vector<string>(m, ""));
        
        print(root, grid, 0, (m-1)/2, height);
        
        return grid;

    }
};
```