# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195579/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195579/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord Study Group](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [Screencast](https://www.youtube.com/watch?v=erZcXLeH-Io&list=PLBu4Bche1aEU-8z7xl3-B9lfw_DJtT_xs&index=17) if you are interested.

---

```cpp
// the original idea is to use inorder traverse to build the sorted array
// then we can find the min difference among the adjacent elements (TC: O(N), SC: O(N))
// however, we can find the min diff during the traversal 
// which achieves the same TC but improves SC down to O(H) where H is the height of the tree
class Solution {
public:
    int ans = INT_MAX, prev = -1;
    int minDiffInBST(TreeNode* root) {
        dfs(root);
        return ans;
    }
private:
    // inorder traverse. see below link for basic idea
    // https://leetcodethehardway.com/tutorials/graph-theory/binary-tree#in-order
    void dfs(TreeNode* root){
        if (!root) return;
        // traverse the left subtree
        dfs(root->left);
        // if prev is valid, then calculate the difference
        // update ans if the difference is lesser
        if (prev != -1) ans = min(ans, root->val - prev);
        // root->val becomes prev now
        prev = root->val;
        // traverse the right subtree
        dfs(root->right);
    }
};
```

```py
class Solution:
    ans, prev = float(inf), -1
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        if root.left: self.minDiffInBST(root.left)
        if self.prev != -1: self.ans = min(self.ans, root.val - self.prev)
        self.prev = root.val
        if root.right: self.minDiffInBST(root.right)
        return self.ans
```