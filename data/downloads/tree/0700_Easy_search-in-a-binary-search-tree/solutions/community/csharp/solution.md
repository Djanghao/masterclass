# Simple recursive solution in C#

**Author:** sunil20000
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1597011/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1597011/)

---

```
public class Solution {
    public TreeNode SearchBST(TreeNode root, int val) {
        if(root == null || root.val == val)
        {
             return root;
        }
        
        if(root.val > val)
        {
            return SearchBST(root.left, val);
        }
        else
        {
            return SearchBST(root.right, val);
        }
    }
}