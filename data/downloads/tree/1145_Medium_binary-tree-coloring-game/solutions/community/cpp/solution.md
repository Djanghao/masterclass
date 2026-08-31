# ✅ [C++] Easy Intuitive solution with Explanation

**Author:** biT_Legion
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/2053667/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/2053667/)

---

This question is easy once you figure out what to do. We need to check if we can win or not. **Its simple**. Just reduce the win chances of your opponent. 
***How do we do that?***
We will try to block the movement of the oppenent(Lets call him red) by choosing one of his neighbour. That way, he will have no choice and he will be forced to move in the only remaining two directions. Here, three directions are 
* toward his parent, 
* towards his left child, 
* towards his right child

Now, to ensure our win, we will block the one having more number of nodes connected to it. To check the number of nodes, we maintain a child array. This child array will store the number of children of a node. So, if we color the parent of red node, we will have `child[root]-child[rednode]` nodes to color while red node will have `child[rednode]` nodes. 
**Why  `child[root]-child[rednode]`?**
Well, every parent of a node is also its neighbour. So we can also move upwards, towards parent of each node. Thus, we have to count all those nodes as well. Therefore, we check directly for child[root], and since some of the nodes are already occupied by red node, thus we need to subtract those froom child[root]. Similiarly, we do for the left node and right node and check if we can win or not. 

```
class Solution {
public:
    TreeNode* X;
    bool btreeGameWinningMove(TreeNode* root, int n, int x) {
        vector <int> child(n+1,0);
        
        dfs(root,0,x,child);
        
        if(child[root->val]>2*child[x]) return true;
        if(X->left and 2*child[X->left->val]>child[root->val]) return true;
        if(X->right and 2*child[X->right->val]>child[root->val]) return true;
        return false;
    }
protected:
    int dfs(TreeNode* root, int parent, int x, vector<int>&child){
        if(!root) return 0;
        
        // Since we would need to access left and right child too. We can also have two int variables for the same
        if(root->val == x) X=root;
        
        int left = dfs(root->left,root->val,x,child);
        int right = dfs(root->right,root->val,x,child);
        
        return child[root->val] = 1+left+right;
    }
};
```