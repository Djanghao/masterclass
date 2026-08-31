# C++

**Author:** Albert117
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2519413/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2519413/)

---

```
public:
    int longestConsecutive(TreeNode* root) {
        if (!root) return 0;
        dfs(root, 1);
        
        return ans;
    }
    
    void dfs(TreeNode* curr, int len){
        if (!curr) return;
        
        if (curr -> left){
            if (curr -> left -> val == curr -> val + 1){
                ans = max(ans, len + 1);
                dfs(curr -> left, len + 1);
            }else{
                dfs(curr -> left, 1);
            }
        }
        if (curr -> right){
            if (curr -> right -> val == curr -> val + 1){
                ans = max(ans, len + 1);
                dfs(curr -> right, len + 1);
            }else{
                dfs(curr -> right, 1);
            }
        }
    }
    
    int ans = 1;
```