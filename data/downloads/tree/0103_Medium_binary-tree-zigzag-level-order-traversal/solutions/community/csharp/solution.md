# C#. Simple DFS. Simple explanation. O(n).

**Author:** antonovdima
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/2902576/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/2902576/)

---

# Approach
You just pass level down recursion and on odd levels append value to the end of your list and on even levels prepend values to the beginning of the list. That's it. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public IList<IList<int>> ZigzagLevelOrder(TreeNode root) {
        List<IList<int>> ret = new();
        if (root == null) return ret;
        ZigzagLevelOrderSub(root, ret, 0);
        return ret;        
    }
    private void ZigzagLevelOrderSub(TreeNode nd, List<IList<int>> ret, int level) {
        if (ret.Count < level + 1) ret.Add(new List<int>());
        if (level % 2 == 0)
            ret[level].Add(nd.val);
        else
            ret[level].Insert(0, nd.val);

        if (nd.left != null) ZigzagLevelOrderSub(nd.left, ret, level + 1);
        if (nd.right != null) ZigzagLevelOrderSub(nd.right, ret, level + 1);
    }

}
```