# 3 lines in Every Language

**Author:** StefanPochmann
**Votes:** 298
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/36060/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/36060/)

---

We need to add the smaller one of the child depths - except if that's zero, then add the larger one. The first Python solution is the clearest because it lets me directly say exactly that.

**Python versions:**

    def minDepth(self, root):
        if not root: return 0
        d = map(self.minDepth, (root.left, root.right))
        return 1 + (min(d) or max(d))

    def minDepth(self, root):
        if not root: return 0
        d, D = sorted(map(self.minDepth, (root.left, root.right)))
        return 1 + (d or D)

**C++ versions:**

    int minDepth(TreeNode* root) {
        if (!root) return 0;
        int L = minDepth(root->left), R = minDepth(root->right);
        return 1 + (min(L, R) ? min(L, R) : max(L, R));
    }

    int minDepth(TreeNode* root) {
        if (!root) return 0;
        int L = minDepth(root->left), R = minDepth(root->right);
        return 1 + (L && R ? min(L, R) : max(L, R));
    }

    int minDepth(TreeNode* root) {
        if (!root) return 0;
        int L = minDepth(root->left), R = minDepth(root->right);
        return 1 + (!L-!R ? max(L, R) : min(L, R));
    }

    int minDepth(TreeNode* root) {
        if (!root) return 0;
        int L = minDepth(root->left), R = minDepth(root->right);
        return L<R && L || !R ? 1+L : 1+R;
    }

**Java versions:**

    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        int L = minDepth(root.left), R = minDepth(root.right);
        return 1 + (Math.min(L, R) > 0 ? Math.min(L, R) : Math.max(L, R));
    }

    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        int L = minDepth(root.left), R = minDepth(root.right), m = Math.min(L, R);
        return 1 + (m > 0 ? m : Math.max(L, R));
    }

    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        int L = minDepth(root.left), R = minDepth(root.right);
        return L<R && L>0 || R<1 ? 1+L : 1+R;
    }

**Ruby version:**

    def min_depth(root)
        return 0 if !root
        d, e = [min_depth(root.left), min_depth(root.right)].sort
        1 + (d>0 ? d : e)
    end

**Javascript version:**

    var minDepth = function(root) {
        if (!root) return 0
        var L = minDepth(root.left), R = minDepth(root.right)
        return 1 + (Math.min(L, R) || Math.max(L, R))
    };

**C version:**

    int minDepth(struct TreeNode* root) {
        if (!root) return 0;
        int L = minDepth(root->left), R = minDepth(root->right);
        return L<R && L || !R ? 1+L : 1+R;
    }

**C# version:**

    public int MinDepth(TreeNode root) {
        if (root == null) return 0;
        int L = MinDepth(root.left), R = MinDepth(root.right);
        return L<R && L>0 || R<1 ? 1+L : 1+R;
    }