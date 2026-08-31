# C# recursive 76ms, faster than 100%

**Author:** pawel753
**Votes:** 9
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/917388/](https://leetcode.com/problems/symmetric-tree/solutions/917388/)

---

Runtime: 76 ms, faster than 100.00% of C# online submissions for Symmetric Tree.
Memory Usage: 25.7 MB, less than 50.29% of C# online submissions for Symmetric Tree.
```
public class Solution {
    public bool IsSymmetric(TreeNode root) => CheckSymetry(root?.left, root?.right);
    
    private bool CheckSymetry(TreeNode left, TreeNode right)
    {
        if(left == null || right == null)
            return left?.val == right?.val;
        if(left.val != right.val)
            return false;

        return CheckSymetry(left.left, right.right) && CheckSymetry(left.right, right.left);
    }
}
```