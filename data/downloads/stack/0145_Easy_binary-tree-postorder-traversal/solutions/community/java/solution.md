# Preorder, Inorder, and Postorder Iteratively Summarization

**Author:** yavinci
**Votes:** 1607
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45551/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45551/)

---

Here I summarize the iterative implementation for preorder, inorder, and postorder traverse.

<hr>
<h3>Pre Order Traverse</h3>
<hr>

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode p = root;
        while (p != null || !stack.isEmpty()) {
            if (p != null) {
                stack.push(p);
                result.add(p.val);  // Add before going to children
                p = p.left;
            } else {
                TreeNode node = stack.pop();
                p = node.right;   
            }
        }
        return result;
    }

<hr>
<h3>In Order Traverse</h3>
<hr>

    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode p = root;
        while (p != null || !stack.isEmpty()) {
            if (p != null) {
                stack.push(p);
                p = p.left;
            } else {
                TreeNode node = stack.pop();
                result.add(node.val);  // Add after all left children
                p = node.right;   
            }
        }
        return result;
    }

<hr>
<h3>Post Order Traverse</h3>
<hr>

    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode p = root;
        while (p != null || !stack.isEmpty()) {
            if (p != null) {
                result.add(p.val);  // Add before going to children
                stack.push(p);
                p = p.right;
            } else {
                p = stack.pop();
                p = p.left;
            }
        }
        Collections.reverse(result);
        return result;
    }

<hr>
<h3>Appendix: Post Order Traverse V2</h3>
<hr>

    public List<Integer> postorderTraversal(TreeNode root) {
        LinkedList<Integer> result = new LinkedList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode p = root;
        while(!stack.isEmpty() || p != null) {
            if(p != null) {
                stack.push(p);
                result.addFirst(p.val);  // Reverse the process of preorder
                p = p.right;             // Reverse the process of preorder
            } else {
                TreeNode node = stack.pop();
                p = node.left;           // Reverse the process of preorder
            }
        }
        return result;
    }