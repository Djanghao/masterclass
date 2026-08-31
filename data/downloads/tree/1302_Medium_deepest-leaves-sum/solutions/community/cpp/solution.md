# 100.00 fast in memory and fast execution with approach dfs/bfs comparison

**Author:** alokgupta
**Votes:** 20
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/494210/](https://leetcode.com/problems/deepest-leaves-sum/solutions/494210/)

---

**Time and space Complexity**: **O(n)**, and **O(n)**. 

------------------
Runtime: 36 ms, faster than 98.80% of C++ online submissions for Deepest Leaves Sum.
Memory Usage: 31.3 MB, less than 100.00% of C++ online submissions for Deepest Leaves Sum.
Solution: **go level by level and reset deepestSum if you see a greatern than that of h seen so far, and continuously do this **
```
class Solution { // dfs approach - it's like pre-order traversal
public:
    void dfs(TreeNode* root, int n, int &deepestSum, int &h){
        if(!root) return;
        if(n==h) deepestSum+=root->val;
        if(n>h){
            deepestSum = root->val;
            h = n;
        }
        dfs(root->left, n+1, deepestSum, h);
        dfs(root->right, n+1, deepestSum, h);
    }
    int deepestLeavesSum(TreeNode* root) {
        int deepestSum(0),h(1);
        dfs(root, 1, deepestSum, h);
        return deepestSum;
    }
};
```

------------------
Runtime: 44 ms, faster than 89.83% of C++ online submissions for Deepest Leaves Sum.
Memory Usage: 34.5 MB, less than 100.00% of C++ online submissions for Deepest Leaves Sum.
Solution: **add all nodes at deepest depth, using level order traversal**
```
class Solution { // bfs - level order traversal
public:
    int deepestLeavesSum(TreeNode* root) {
        vector<vector<TreeNode*>> levels;
        queue<TreeNode*> toDo;
        toDo.push(root);
        
        while(!toDo.empty()){
            vector<TreeNode*> level;
            while(!toDo.empty()) { level.push_back(toDo.front()); toDo.pop(); }
            levels.push_back(level);
            
            for(TreeNode* l: level){
                if(l->left) toDo.push(l->left);
                if(l->right) toDo.push(l->right);
            }
        }
        
        int deepestSum(0);
        for(int i(0); i<levels[levels.size()-1].size(); i++)
            deepestSum+=(levels[levels.size()-1][i])->val;
        
        return deepestSum;
    }
};
```

----------------
**(or)**

----------------
When traversing nodes of a particular level, if we encounter leaf nodes, then add there values. Otherwise if more levels exist just override this value.
```
class Solution {
public:
    int deepestLeavesSum(TreeNode* root) {
        queue<TreeNode*> toDo;
        toDo.push(root);
        int sum(0);
        while(!toDo.empty()){
            sum = 0; // re-initiate at each level
            int n(toDo.size());
            while(n--){
                TreeNode* node(toDo.front()); toDo.pop();
                if(!node->right && !node->left) sum+=node->val;
                if(node->left) toDo.push(node->left);
                if(node->right) toDo.push(node->right);
            }
        }
        return sum;
    }
};
```

----------------
Runtime: 44 ms, faster than 89.83% of C++ online submissions for Deepest Leaves Sum.
Memory Usage: 31.6 MB, less than 100.00% of C++ online submissions for Deepest Leaves Sum.
// **find depth, and ask for the sum on the max depth**
```
class Solution { // dfs approach 
public:
    int getDepthOfTree(TreeNode* root){
        if(!root) return 0;
        return 1+max(getDepthOfTree(root->left), getDepthOfTree(root->right));
    }
    int deepestLeavesSum(TreeNode* root, int currentLevel, int maxLevel){
        if(!root) return 0;
        if(root && currentLevel==maxLevel) return root->val;
        return deepestLeavesSum(root->left, currentLevel+1, maxLevel) + deepestLeavesSum(root->right, currentLevel+1, maxLevel);
    }
    int deepestLeavesSum(TreeNode* root) {
        int depth(getDepthOfTree(root));
        return deepestLeavesSum(root, 1, depth);
    }
};
```

--------------------
**(or)**

--------------------
```
class Solution { // dfs approach 
public:
    int getDepthOfTree(TreeNode* root){
        if(!root) return 0;
        return 1+max(getDepthOfTree(root->left), getDepthOfTree(root->right));
    }
    int deepestLeavesSum(TreeNode* root, int level){
        if(!root) return 0;
        if(level==1) return root->val;
        return deepestLeavesSum(root->left,level-1) + deepestLeavesSum(root->right,level-1);
    }
    int deepestLeavesSum(TreeNode* root) {
        int depth(getDepthOfTree(root));
        return deepestLeavesSum(root,depth);
    }
};
```

---------------------
