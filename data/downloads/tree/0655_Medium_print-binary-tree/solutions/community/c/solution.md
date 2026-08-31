# ✅✅Faster || Easy To Understand || C++ Code

**Author:** __KR_SHANU_IITG
**Votes:** 5
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/2409429/](https://leetcode.com/problems/print-binary-tree/solutions/2409429/)

---

* ***Approach 1 :- Using BFS***

* ***Time Complexity :- O(No. of nodes)***

* ***Space Complexity :- O(N * M), where N = no. of req. rows and M = no. of req. Col.***

```
class Solution {
public:
    
    // function for find height of tree
    
    int height(TreeNode* root)
    {
        if(root == NULL)
            return 0;
        
        int left_height = height(root -> left);
        
        int right_height = height(root -> right);
        
        return 1 + max(left_height, right_height);
    }
    
    vector<vector<string>> printTree(TreeNode* root) {
        
        // find height of tree
        
        int h = height(root);
        
        h--;
        
        // n = no. of rows
        
        int n = h + 1;
        
        // m = no. of columns
        
        int m = pow(2, h + 1) - 1;
        
        // declare a res matrix
        
        vector<vector<string>> res(n, vector<string> (m, ""));
        
        // apply bfs
        
        // declare a queue
        
        queue<pair<TreeNode*, pair<int, int>>> q;
        
        // push the root into queue
        
        q.push({root, {0, (m - 1) / 2}});
        
        while(!q.empty())
        {
            // take outh the front node
            
            auto curr = q.front();
            
            q.pop();
            
            // find row no.
            
            int r = curr.second.first;
            
            // find col. no.
            
            int c = curr.second.second;
            
            // find curr_node
            
            TreeNode* curr_node = curr.first;
            
            // put the value at its position in res
            
            res[r][c] = to_string(curr_node -> val);
            
            // push the left node into queue
            
            if(curr_node -> left)
            {
                q.push({curr_node -> left, {r + 1, c - pow(2, h - 1 - r)}});
            }
            
            // push the right node into queue
            
            if(curr_node -> right)
            {
                q.push({curr_node -> right, {r + 1, c + pow(2, h - 1 - r)}});
            }
        }
        
        return res;
    }
};
```