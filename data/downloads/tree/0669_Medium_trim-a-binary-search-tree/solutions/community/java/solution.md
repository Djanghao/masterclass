# Easy To Understand with Explanation || 0ms || 100% faster ヾ(≧▽≦*)o

**Author:** hi-ravi
**Votes:** 64
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1947897/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1947897/)

---

***RECURSIVE APPROACH***
If the value of node is less than low, then in order to increase it we move to right of it according to property of BST and similarly move left if value is greater than high.
If both of above situations are false, then the node stays and hence we just call left and right on it and move ahead.
```
class Solution {
    public TreeNode trimBST(TreeNode root, int L, int R) {
        if (root == null) {
            return null;
        }
        //if the range is correct then checking both root left and right
        if (root.val >= L && root.val <= R) {
            root.left = trimBST(root.left, L, R);//Trim the left subtree
            root.right = trimBST(root.right, L, R);//Trim the right subtree
        } else if (root.val < L) {
            //if the root val is less than low then getting values from left will be even lower(binary tree rule) so we need to set the root to root.right;
            root = trimBST(root.right, L, R);
        } else if (root.val > R) {
            //if the root val is greater than high then getting values from right will be even higher(binary tree rule) so we need to the root to root.left.
            root = trimBST(root.left, L, R);
        }
        return root;
    }
}
```
<hr>
<hr>

***Time Complexity =O(N)***
***Space Complexity =O(N)***

<hr>
<hr>