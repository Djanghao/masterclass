# [C++] EASY || Simple Traversal

**Author:** ayushve12
**Votes:** 116
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/1159847/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/1159847/)

---

Parameters:
l = count of max zigzag which reaches current Node by moving LEFT  from par  Node.
r = count of max zigzag which reaches current Node by moving RIGHT from par Node.
- Now update ans upto current node
- then send l+1 to RIGHT
- and r+1 to LEFT
Please \uD83D\uDE4F  do upvote \uD83D\uDC4D if you find my solution apt\uD83E\uDD18
```
void ziggy(TreeNode* root, int l , int r, int& ans){
        if(!root) return;
         ans = max(ans, l);
         ans = max(ans, r);
        ziggy(root->left, 0, l+1, ans);
        
        ziggy(root->right, r+1, 0, ans);
        
        return;
    }
    int longestZigZag(TreeNode* root) {
        int l=0;
        int r=0;
        int ans=0;
        ziggy(root, l,r,ans);
        return ans;
    }
```