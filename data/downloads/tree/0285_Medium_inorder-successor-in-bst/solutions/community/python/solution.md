# Java/Python solution, O(h) time and O(1) space, iterative

**Author:** dietpepsi
**Votes:** 536
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/72656/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/72656/)

---

The inorder traversal of a BST is the nodes in ascending order. To find a successor, you just need to find the  smallest one that is larger than the given value since there are no duplicate values in a BST. It just like the binary search in a sorted list. The time complexity should be `O(h)` where h is the depth of the result node. `succ` is a pointer that keeps the possible successor. Whenever you go left the current root is the new possible successor, otherwise the it remains the same.

Only in a balanced BST `O(h) = O(log n)`. In the worst case `h` can be as large as `n`.

**Java**

    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        TreeNode succ = null;
        while (root != null) {
            if (p.val < root.val) {
                succ = root;
                root = root.left;
            }
            else
                root = root.right;
        }
        return succ;
    }

    // 29 / 29 test cases passed.
    // Status: Accepted
    // Runtime: 5 ms

**Python**

    def inorderSuccessor(self, root, p):
        succ = None
        while root:
            if p.val < root.val:
                succ = root
                root = root.left
            else:
                root = root.right
        return succ

    # 29 / 29 test cases passed.
    # Status: Accepted
    # Runtime: 112 ms