# solution in c sharp, complexity beat 100%, space complexity beat 100%

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/6023764/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/6023764/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n),beat 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), beat 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int LongestConsecutive2(TreeNode root)
{
    LongestConsecutiveTrav(root,0);
    return longestConsecinTree;
}
int longestConsecinTree = 1;
private int LongestConsecutiveTrav(TreeNode root, int direct)
{
    if (root== null) { return 0; }
    if(root.left==null && root.right == null)
    {
        return 1;
    }
    int leftDif = 0;
    int leftConnect = 0;
    int rightConnect = 0;
    if (root.left != null)
    {
        leftDif = root.val-root.left.val;
    }
    int rightDif = 0;
    if (root.right != null)
    {
        rightDif=root.val-root.right.val;
    }
    if (Math.Abs(leftDif)==1)
    {
        leftConnect = LongestConsecutiveTrav(root.left, leftDif);
        longestConsecinTree = Math.Max(longestConsecinTree, leftConnect+1);
    }
    else
    {
        LongestConsecutiveTrav(root.left, 0);
    }

    if (Math.Abs(rightDif) == 1)
    {
        rightConnect = LongestConsecutiveTrav(root.right, rightDif);
        longestConsecinTree = Math.Max(longestConsecinTree, rightConnect + 1);
    }
    else
    {
        LongestConsecutiveTrav(root.right, 0);
    }
    if (leftDif * rightDif == -1)
    {
        longestConsecinTree = Math.Max(longestConsecinTree, 1 + leftConnect + rightConnect);
    }
    if (direct * leftDif ==1 && direct * rightDif == 1)
    {
        return 1 + Math.Max(leftConnect, rightConnect);
    }
    if (direct * leftDif == 1)
    {
        return 1 + leftConnect;
    }
    if (direct*rightDif == 1)
    {
        return 1 + rightConnect;
    }
    return 1;
}
}
```