# C# Solution 👌

**Author:** AsiaShalaldah
**Votes:** 3
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/2482297/](https://leetcode.com/problems/balanced-binary-tree/solutions/2482297/)

---

```
public class Solution {
        public bool IsBalanced(TreeNode root)
        {
            if (root == null)
                return true;
            if (Math.Abs(height(root.left) - height(root.right)) <= 1)
                return true && IsBalanced(root.left) && IsBalanced(root.right);
            else
                return false;
        }
        public int height(TreeNode node)
        {
            if (node == null)
                return 0;
            return 1 + Math.Max(height(node.left), height(node.right));
        }
}