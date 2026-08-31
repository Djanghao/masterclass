# C++ Simple and Concise Recursive Solution, O(logn * logn)

**Author:** YehudisK
**Votes:** 77
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/1538170/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/1538170/)

---

**Idea:**
We go all the way to the left and count height, and all the way to the right and count height.
If they are equal, both subtrees are complete.
Otherwise, we will do the same for each subtree.
```
class Solution {
public:
    int countNodes(TreeNode* root) {
        if (!root) return 0;
        
        int l = 1, r = 1;
        TreeNode *ptr_r = root, *ptr_l = root;
        while (ptr_l = ptr_l->left) l++;
        while (ptr_r = ptr_r->right) r++;
        
        if (l == r) return pow(2, l) - 1;
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};
```
**Like it? please upvote!**