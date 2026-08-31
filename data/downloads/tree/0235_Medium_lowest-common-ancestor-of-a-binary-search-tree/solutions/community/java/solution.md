# Clear Java 10 ms

**Author:** ramona_crg
**Votes:** 60
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/64955/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/64955/)

---

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null) return null;
        if(p.val<root.val&&q.val<root.val) {
            return lowestCommonAncestor(root.left,p,q);
        }
        else if(p.val>root.val&&q.val>root.val){
            return lowestCommonAncestor(root.right,p,q);
        }
        else
        return root;
    }