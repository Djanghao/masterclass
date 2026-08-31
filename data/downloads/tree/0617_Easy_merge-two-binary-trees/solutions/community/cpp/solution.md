# ~100.00% fast in run-time and memory Recursive/Iterative/BFS/DFS

**Author:** alokgupta
**Votes:** 189
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/588123/](https://leetcode.com/problems/merge-two-binary-trees/solutions/588123/)

---

**Using Recursion (DFS Similar) 1:** 
**Time complexity** : **O(m)**. A total of m nodes need to be traversed. Here, m represents the minimum number of nodes from the two given trees.
**Space complexity** : **O(m)**. The depth of the recursion tree can go upto m in the case of a skewed tree. In **average case**, depth will be ****O(logm).
```
static int x = []() {
std::ios::sync_with_stdio(false);
cin.tie(nullptr);
return 0; }();

class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1) return t2;
        if(!t2) return t1;
        t1->val+=t2->val;
        if(t2->left) t1->left = mergeTrees(t1->left,t2->left);
        if(t2->right) t1->right = mergeTrees(t1->right,t2->right);
        return t1;
    }
};
```

**Using Recursion (DFS Similar) 2:** 
```
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1 && !t2) return nullptr;
        if(!t1) return t2;
        if(!t2) return t1;
        t1->val+=t2->val;
        t1->left = mergeTrees(t1->left,t2->left);
        t1->right = mergeTrees(t1->right,t2->right);
        return t1;
    }
};
```

**Create New Tree 1:**

```
class Solution {
public:
    void dfs(TreeNode* t1, TreeNode* t2,TreeNode* &root){
        if(!t1 && !t2) return;
        else if(t1 && !t2){
            TreeNode* node(new TreeNode(t1->val));
            root=node;
            dfs(t1->left,t2,root->left);
            dfs(t1->right,t2,root->right);
        }else if(t2 && !t1){
            TreeNode* node(new TreeNode(t2->val));
            root=node;
            dfs(t1,t2->left,root->left);
            dfs(t1,t2->right,root->right);
        }else{
            TreeNode* node(new TreeNode(t1->val+t2->val));
            root=node;
            dfs(t1->left,t2->left,root->left);
            dfs(t1->right,t2->right,root->right);
        }
    }
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        TreeNode* root(nullptr);
        dfs(t1,t2,root);
        return root;
    }
};
```

**Create New Tree 2:**
In the real world, sharing nodes between the old trees and the new tree can be a problem. If any of the old trees is deleted, it's going to also destruct the shared nodes in the new tree. C++ does have some nice & clean solutions for this, like using shared_ptr for example. But as-is I'd say the 'trick' of reusing nodes from the old trees does more harm than good and if I were the interviewer, unless the interviewee points these nuances out I'd be lead to believe that they don't have a good grasp on memory management in C++. Especially since the 'safe' solution is not that much more code:

```
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1 && !t2) return nullptr;
        int val1 = t1? t1->val:0;
        int val2 = t2? t2->val:0;
        
        TreeNode* t = new TreeNode(val1+val2);
        t->left = mergeTrees(t1?t1->left:nullptr,t2?t2->left:nullptr);
        t->right = mergeTrees(t1?t1->right:nullptr,t2?t2->right:nullptr);
        return t;
    }
};
```

------
**Iterative: Using Stack**
**Time complexity** : **O(n)**. We traverse over a total of n nodes. Here, nn refers to the smaller of the number of nodes in the two trees.

**Space complexity** : **O(n)**. The depth of stack can grow upto n in case of a skewed tree.
```
class Solution { // iterative: Stack
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1 && !t2) return nullptr;
        if(!t1 || !t2) return t1? t1:t2;
				
        stack<TreeNode*> s1,s2;
        s1.push(t1);
        s2.push(t2);
        
        while(!s1.empty()){
            TreeNode* c1(s1.top());
            TreeNode* c2(s2.top());
            s1.pop();
            s2.pop();
            
            c1->val+=c2->val;
            
            if(!c1->left && c2->left) c1->left = c2->left;
            else if(c1->left && c2->left) { s1.push(c1->left); s2.push(c2->left); }
            
            if(!c1->right && c2->right) c1->right = c2->right;
            else if(c1->right && c2->right) { s1.push(c1->right); s2.push(c2->right); }
        }
        return t1;
    }
};
```

----
**Iterative: Using Queue**

```
class Solution { // iterative: Queue    
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1 && !t2) return nullptr;
        if(!t1 || !t2) return t1? t1:t2;

        queue<TreeNode*> q1,q2;
        q1.push(t1);
        q2.push(t2);
        
        while(!q1.empty() && !q2.empty()){
            TreeNode* c1(q1.front());
            TreeNode* c2(q2.front());
            q1.pop();
            q2.pop();
            
            c1->val+=c2->val;
            
            if(!c1->left && c2->left) c1->left = c2->left;
            else if(c1->left && c2->left) { q1.push(c1->left); q2.push(c2->left); }
            
            if(!c1->right && c2->right) c1->right = c2->right;
            else if(c1->right && c2->right) { q1.push(c1->right); q2.push(c2->right); }
        }
        return t1;
    }
};
```
```