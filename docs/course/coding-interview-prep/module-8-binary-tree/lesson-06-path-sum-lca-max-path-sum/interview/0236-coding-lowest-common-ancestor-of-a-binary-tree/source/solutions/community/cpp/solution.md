# 4 lines C++/Java/Python/Ruby

**Author:** StefanPochmann
**Votes:** 1611
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65225/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65225/)

---

Same solution in several languages. It's recursive and expands the meaning of the function. If the current (sub)tree contains both p and q, then the function result is their LCA. If only one of them is in that subtree, then the result is that one of them. If neither are in that subtree, the result is null/None/nil.

Update: I also wrote [two iterative solutions](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/65245/Iterative-Solutions-in-PythonC%2B%2B) now, one of them being a version of the solution here. They're more complicated than this simple recursive solution, but I do find them interesting.

---

**C++**

    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (!root || root == p || root == q) return root;
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        return !left ? right : !right ? left : root;
    }

---

**Python**

    def lowestCommonAncestor(self, root, p, q):
        if root in (None, p, q): return root
        left, right = (self.lowestCommonAncestor(kid, p, q)
                       for kid in (root.left, root.right))
        return root if left and right else left or right

Or using that `None` is considered smaller than any node:

    def lowestCommonAncestor(self, root, p, q):
        if root in (None, p, q): return root
        subs = [self.lowestCommonAncestor(kid, p, q)
                for kid in (root.left, root.right)]
        return root if all(subs) else max(subs)

---

**Ruby**

    def lowest_common_ancestor(root, p, q)
        return root if [nil, p, q].index root
        left = lowest_common_ancestor(root.left, p, q)
        right = lowest_common_ancestor(root.right, p, q)
        left && right ? root : left || right
    end

---

**Java**

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        return left == null ? right : right == null ? left : root;
    }