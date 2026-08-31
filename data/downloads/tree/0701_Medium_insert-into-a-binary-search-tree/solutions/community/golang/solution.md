# Easiest Approach || Damn Easy || Hell Easy || 🧃

**Author:** Ashok2252
**Votes:** 5
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/2538085/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/2538085/)

---

# Easiest Pseudocode :D
# Upvote \uD83D\uDD3C\u2705

```
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null){
            TreeNode insert = new TreeNode(val);
            return insert;
        }
        if(root.val > val){
            root.left = insertIntoBST(root.left , val);
        }
        else if(root.val < val){
            root.right = insertIntoBST(root.right , val);
        }
        return root;
    }
}
```