# Accepted Java simple solution in 8 lines

**Author:** ewfew1
**Votes:** 536
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/68258/](https://leetcode.com/problems/binary-tree-paths/solutions/68258/)

---

    public List<String> binaryTreePaths(TreeNode root) {
        List<String> answer = new ArrayList<String>();
        if (root != null) searchBT(root, "", answer);
        return answer;
    }
    private void searchBT(TreeNode root, String path, List<String> answer) {
        if (root.left == null && root.right == null) answer.add(path + root.val);
        if (root.left != null) searchBT(root.left, path + root.val + "->", answer);
        if (root.right != null) searchBT(root.right, path + root.val + "->", answer);
    }