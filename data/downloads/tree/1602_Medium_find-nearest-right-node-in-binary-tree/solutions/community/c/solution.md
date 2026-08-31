# C++ DFS version without global variable

**Author:** nanshan0719
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1716654/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1716654/)

---

The most intuitive approach for this problem is BFS. I just use this problem to work on my DFS.

The following method doesn't use class variable, which could be better in practice. The main idea is to keep track of the depth of the target node, and update result when first time traverse to a node with the same depth. Actually it doesn't matter using pre-order, in-order or post-order, as long the left subtree is traversed before the right subtree. Note that the variables that we change inside the DFS function (those "global variables") should be passed by reference.
```
class Solution {
private:
    void DFS(TreeNode* root, TreeNode* u, int h, int &uh, bool &findans, TreeNode* &ans){
        if(findans) {return;}
        if(!root) {return;}
        if(h==uh){
            ans = root;
            findans = true;
            return;
        }
        if(root==u) {
            uh = h;
            return;
        }
        DFS(root->left,u,h+1,uh,findans,ans);
        DFS(root->right,u,h+1,uh,findans,ans);
        return;
    }
public:
    TreeNode* findNearestRightNode(TreeNode* root, TreeNode* u){
        if(!root) {return root;}
        TreeNode* ans = nullptr;
        int uh = -1;
        bool findans = false;
        DFS(root, u, 0, uh, findans, ans);
        return ans;
    }
};
```
A small modification that use ```TreeNode* ans``` directly as return value.
```
class Solution {
private:
    TreeNode* DFS(TreeNode* root, TreeNode* u, int h, int &uh, bool &findans){
        if(findans) {return nullptr;}
        if(!root) {return nullptr;}
        if(h==uh){
            findans = true;
            return root;
        }
        if(root==u) {
            uh = h;
            return nullptr;
        }
        TreeNode* leftans = DFS(root->left,u,h+1,uh,findans);
        TreeNode* rightans = DFS(root->right,u,h+1,uh,findans);
        return leftans ? leftans : rightans;
    }
public:
    TreeNode* findNearestRightNode(TreeNode* root, TreeNode* u){
        if(!root) {return root;}
        TreeNode* ans = nullptr;
        int uh = -1;
        bool findans = false;
        return DFS(root, u, 0, uh, findans);
    }
};
```