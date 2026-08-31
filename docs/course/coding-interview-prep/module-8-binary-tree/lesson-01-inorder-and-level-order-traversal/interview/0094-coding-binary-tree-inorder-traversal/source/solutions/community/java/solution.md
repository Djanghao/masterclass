# Iterative solution in Java - simple and readable

**Author:** lvlolitte
**Votes:** 950
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/31213/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/31213/)

---

    
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();

        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode cur = root;

        while(cur!=null || !stack.empty()){
            while(cur!=null){
                stack.add(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            list.add(cur.val);
            cur = cur.right;
        }

        return list;
    }