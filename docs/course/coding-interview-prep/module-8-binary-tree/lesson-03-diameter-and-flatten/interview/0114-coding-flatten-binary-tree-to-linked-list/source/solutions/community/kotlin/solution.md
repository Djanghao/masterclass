# Beats 100% | Java | Detailed Solution | 0ms ✅✅

**Author:** Ikapoor123
**Votes:** 3
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/4772785/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/4772785/)

---

# Don't worry just read, you can do it !!
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A function called flatten that takes the root of a binary tree as input and modifies the tree in-place to be a linked list. The function works by recursively traversing the tree and creating a new linked list node for each node in the tree. The left child of each node in the original tree becomes the next node in the linked list, and the right child becomes the child of the next node.

# Approach
<!-- Describe your approach to solving the problem. -->
1. The flatten function first checks if the root of the tree is null. If it is, then the function returns immediately.
2. Otherwise, the function creates a new linked list node with the value of the root node.
3. The function then recursively calls itself on the left and right children of the root node.
4. After the recursive calls have returned, the function sets the left child of the root node to null.
5. The function then sets the right child of the root node to the linked list node that was created for the left child.
6. Finally, the function returns the linked list node that was created for the root node.

Here is an example of how the code would work on the following binary tree:

        1
       / \\
      2   3
     / \\   \\
    4   5   6

After the flatten function is called on the root of this tree, the tree would be modified as follows:

    1 -> 2 -> 4 -> 5 -> 3 -> 6 -> None

# Still having doubt? Comment \u2705
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote \u2705\u2705
# Code
``` java []
class Solution {
    TreeNode ans;

    public void flatten(TreeNode root) {
        if(root == null)
        return ;

         ans = new TreeNode(root.val);
        TreeNode ans1 = ans;
        function(root);

        root.left = null;
        root.right = ans1.right;


    }

    void function(TreeNode root){
        if(root == null)
            return ;

        ans.val = root.val;
        if(root.left !=null){
            ans.right = new TreeNode();
            ans.left = null;
            ans = ans.right;
            function(root.left);
        }
        if(root.right!=null){
            ans.right = new TreeNode();
            ans.left = null;
            ans = ans.right;
            function(root.right);
        }
    }
}
```
