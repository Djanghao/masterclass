# C#, simple O(n) recursive solution using preorder traversal

**Author:** edevyatkin
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/753031/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/753031/)

---

```
public class Solution {
    public IList<int> RightSideView(TreeNode root) {
        List<int> result = new List<int>();
        RightSideDFS(root, 1, result);
        return result;
    }
    
    private void RightSideDFS(TreeNode node, int depth, List<int> result) {
        if (node == null)
            return;
        if (result.Count < depth)
            result.Add(node.val);
        RightSideDFS(node.right, depth+1, result);
        RightSideDFS(node.left, depth+1, result);
    }
}
```