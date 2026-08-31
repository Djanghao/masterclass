# 10 (and 4) lines O(h) Java/C++

**Author:** StefanPochmann
**Votes:** 44
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/72721/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/72721/)

---

**Update:** Ugh, turns out I didn't think it through and the big case distinction is unnecessary. Just search from root to bottom, trying to find the smallest node larger than p and return the last one that was larger. D'oh. Props to [smileyogurt.966](https://leetcode.com/discuss/59918/c-o-h-solution-in-one-pass) for doing that first, I think. I'll just write it in my ternary style for C++:

    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        TreeNode* candidate = NULL;
        while (root)
            root = (root->val > p->val) ? (candidate = root)->left : root->right;
        return candidate;
    }

---

**Old:** If `p` has a right subtree, then get its successor from there. Otherwise do a regular search from `root` to `p` but remember the node of the last left-turn and return that. Same solution as everyone, I guess, just written a bit shorter. Runtime O(h), where h is the height of the tree.

**C++**

    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        if (p->right) {
            p = p->right;
            while (p->left)
                p = p->left;
            return p;
        }
        TreeNode* candidate = NULL;
        while (root != p)
            root = (p->val > root->val) ? root->right : (candidate = root)->left;
        return candidate;
    }

**Java**

    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        if (p.right != null) {
            p = p.right;
            while (p.left != null)
                p = p.left;
            return p;
        }
        TreeNode candidate = null;
        while (root != p)
            root = (p.val > root.val) ? root.right : (candidate = root).left;
        return candidate;
    }