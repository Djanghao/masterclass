# cpp easy solution using queue(also attached other 7 similar code problems)

**Author:** bitrish
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/880711/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/880711/)

---

**Find Largest Value in Each Tree Row(Leetcode 515)----**
```
class Solution {
public:
    vector<int> largestValues(TreeNode* root) {
        queue<TreeNode*>q;
        vector<int>temp;
       vector<vector<int>>ans;
        if(root==NULL) return temp;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
            ans.push_back(v);
         int ma=v[0];
         for(int i=1;i<v.size();i++)
             ma=max(ma,v[i]);
         temp.push_back(ma);
        }
        return temp;
    }
};
```

**Binary tree level order traversal(Leetcode 102)------**
```
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
       queue<TreeNode*>q;
       vector<vector<int>>ans;
        if(root==NULL) return ans;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
            ans.push_back(v);
        }
        return ans;
    }
};
```


**Binary order level order traversal II (Leetcode 107)-------**
```
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
       queue<TreeNode*>q;
       vector<vector<int>>ans;
        if(root==NULL) return ans;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
            ans.push_back(v);
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
```
**Average of Levels in Binary Tree(Leetcode 637)-----**
```
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
       queue<TreeNode*>q;
        vector<double>temp;
       vector<vector<int>>ans;
        if(root==NULL) return temp;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
            ans.push_back(v);
         double total=0;
         for(int j=0;j<v.size();j++)
             total+=v[j];
         double r=total/v.size();
         temp.push_back(r);
        }
        return temp;
    }
};
```

**N-ary Tree Level Order Traversal(Leetcode 429)------**
```
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
       queue<Node*>q;
       vector<vector<int>>ans;
        if(root==NULL) return ans;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   Node* t=q.front();q.pop();
                v.push_back(t->val);
                for(int j=0;j<t->children.size();j++)
                   q.push(t->children[j]);
            }
            ans.push_back(v);
        }
        return ans; 
    }
};
```

**Binary Tree Zigzag Level Order Traversal(Leetcode 103)-----**
```
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        queue<TreeNode*>q;
       vector<vector<int>>ans;
        if(root==NULL) return ans;
        q.push(root);
        int j=0;
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
         if(j%2==1)
             reverse(v.begin(),v.end());
         j++;
            ans.push_back(v);
        }
        return ans;
    }
};
```
**Binary Tree Right Side View(Leetcode 199)-----**
```
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
       queue<TreeNode*>q;
        vector<int>temp;
       vector<vector<int>>ans;
        if(root==NULL) return temp;
        q.push(root);
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
            ans.push_back(v);
         temp.push_back(v[v.size()-1]);
        }
        return temp;
    }
};
```

**Even odd tree (Leetcode 1609)-------**
```
class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
        queue<TreeNode*>q;
        vector<vector<int>>ans;
        if(root==NULL) return true;
        q.push(root);
        int j=0;
        while(q.empty()!=true)
        {   vector<int>v;
            int n=q.size();
            for(int i=0;i<n;i++)
            {   TreeNode* t=q.front();q.pop();
                v.push_back(t->val);
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);
            }
         if(j%2==0)
         {
             for(int k=0;k<v.size()-1;k++)
             {
                 if(v[k]%2==0)
                     return false;
                 if(v[k]>=v[k+1])
                     return false;
             }
             if(v[v.size()-1]%2==0)
                 return false;
         }
         else
         {
              for(int k=0;k<v.size()-1;k++)
             {
                 if(v[k]%2==1)
                     return false;
                 if(v[k]<=v[k+1])
                     return false;
             }
             if(v[v.size()-1]%2==1)
                 return false;
         }
         j++;
            ans.push_back(v);
        }
        return true;
    }
};
```
**If u find this post usefull please upvote it :)**

