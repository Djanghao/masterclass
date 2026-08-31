# solution of beat 100%, in c#

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/6041231/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/6041231/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
    public bool IsValidSequence(TreeNode root, int[] arr)
{
    IsValidSequenceDFS(root,arr, 0);
    return GlobalFlag4ValidSequence;
}
bool GlobalFlag4ValidSequence = false;
private void IsValidSequenceDFS(TreeNode root, int[] arr, int index)
{
    if (GlobalFlag4ValidSequence) return;
    if (root.left == null && root.right == null)
    {
        if (index == arr.Length - 1 && root.val == arr[index])
        {
            GlobalFlag4ValidSequence = true;
        }
        return;
    }
    if (index == arr.Length - 1 || root.val != arr[index]) return;
    if (root.left != null)
    {
        IsValidSequenceDFS(root.left, arr, index + 1);
    }
    if (root.right != null)
    {
        IsValidSequenceDFS(root.right, arr, index + 1);
    }
}
}
```