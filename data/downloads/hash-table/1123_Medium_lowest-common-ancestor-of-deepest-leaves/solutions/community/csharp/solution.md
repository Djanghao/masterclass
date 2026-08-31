# C# recursion with memoization

**Author:** Dmitriy-Maksimov
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/4954502/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/4954502/)

---

# Approach
- Use helper method `CalculateDepth` which recursively calculate depth of a given node
- Calculate depth of left and right sub-trees
- Recursively vist right or left tree depending on depth of these sub-trees
- Use memoization (`Dictionary`) to avoid recalculating depth

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
public class Solution
{
    private readonly Dictionary<TreeNode, int> _depths = [];

    public TreeNode? LcaDeepestLeaves(TreeNode? root)
    {
        if (root == null)
        {
            return null;
        }

        var leftDepth = CalculateDepth(root.left);
        var rightDepth = CalculateDepth(root.right);
        
        if (leftDepth == rightDepth)
        {
            return root;
        }

        return LcaDeepestLeaves(leftDepth < rightDepth ? root.right : root.left);
    }

    private int CalculateDepth(TreeNode? root)
    {
        if (root == null)
        {
            return 0;
        }

        if (_depths.TryGetValue(root, out var value))
        {
            return value;
        }

        return _depths[root] = Math.Max(CalculateDepth(root.left), CalculateDepth(root.right)) + 1;
    }
}
```