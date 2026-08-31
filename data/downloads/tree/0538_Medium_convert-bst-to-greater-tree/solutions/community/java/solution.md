# Reverse Inorder traversal || beats 100%

**Author:** vanshverma1999
**Votes:** 46
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1951768/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1951768/)

---

Here we are taking advantage of the fact that inorder traversal of BST is in sorted order,
hence reverse in order traversal will give us reverse sorted order and we can easily add the previous sum
to next smaller element and make it our greater tree
:) (dont downvote pls)
```

class Solution {
    int sum = 0;
    public TreeNode convertBST(TreeNode root) {
        if(root==null){
            return root;
        }
        reverseInorder(root);
        return root;
    }
    private void reverseInorder(TreeNode root){
        if(root==null){
            return;
        }
        reverseInorder(root.right);
        root.val = root.val + sum;
        sum = root.val;
        reverseInorder(root.left);
        return;
    }
}
```