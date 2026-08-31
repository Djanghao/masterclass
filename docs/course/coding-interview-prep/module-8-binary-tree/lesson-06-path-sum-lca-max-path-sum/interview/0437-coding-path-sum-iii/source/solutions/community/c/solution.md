# [C++] DFS clean solution [ T : 89%, M : 80% ]

**Author:** harshit0311
**Votes:** 263
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/683906/](https://leetcode.com/problems/path-sum-iii/solutions/683906/)

---

***Please upvote if you found the post helpful :)***
Shoutout to @prateeksharma. 
```
class Solution {
public:
    int ans=0;
    int pathSum(TreeNode* root, int sum) {
        if(root){
            dfs(root,sum);
            pathSum(root->left,sum);
            pathSum(root->right,sum);
        }
        return ans;
    }
    void dfs(TreeNode* root, int sum){
        if(!root)return;
        if(root->val==sum)ans++;
        dfs(root->left,sum-root->val);
        dfs(root->right,sum-root->val);
    }
};
```