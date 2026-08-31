# [C++] Simple BFS solution, beats 100% in memory. [Detailed Explanation]

**Author:** cryptx_
**Votes:** 7
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/627736/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/627736/)

---

```
/*
    https://leetcode.com/problems/complete-binary-tree-inserter/submissions/
    
    Insert: TC: O(N), SC: O(1)
    get: TC: O(1)
    
    Idea is to to BFS and look for the first node that has 0/1 child, and 
    make the input value as a new node for that parent.
*/

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
class CBTInserter {
private:
    TreeNode* root_ = nullptr;
public:
    CBTInserter(TreeNode* root) {
        root_ = root;
    }
    
    int insert(int v) {
        // Use bfs for insertion
        queue<TreeNode*> q;
        q.emplace(root_);
        TreeNode* curr = nullptr;
        
        while(!q.empty()) {
            curr = q.front();
            q.pop();
            
            // check if any of its child is a nullptr
            // if a node is found to be not having a child, then
            // add the current node as its child
            if(!curr->left) {
                curr->left = new TreeNode(v);
                break;
            }
            if(!curr->right) {
                curr->right = new TreeNode(v);
                break;
            }
            
            if(curr->left)
                q.emplace(curr->left);
            if(curr->right)
                q.emplace(curr->right);
        }
        
        return curr->val;
    }
    
    TreeNode* get_root() {
        return root_;
    }
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * CBTInserter* obj = new CBTInserter(root);
 * int param_1 = obj->insert(v);
 * TreeNode* param_2 = obj->get_root();
 */
```