# via dividing array

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/6084447/](https://leetcode.com/problems/maximum-binary-tree/solutions/6084447/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

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
    public TreeNode ConstructMaximumBinaryTree(int[] nums) {
        return BuildTree(nums, 0, nums.Length - 1);
    }

    private TreeNode BuildTree(int[] nums, int start, int end) {
        int index = FindMax(nums, start, end);

        if (index == -1) {
            return null;
        }

        TreeNode node = new TreeNode(nums[index]);

        node.left = BuildTree(nums, start, index - 1);
        node.right = BuildTree(nums, index + 1, end);

        return node;
    }

    private int FindMax(int[] nums, int start, int end) {
        if (start < 0 || end >= nums.Length || start > end) {
            return -1;
        }

        int number = nums[start];
        int index = start;

        for (int i = start + 1; i <= end; i++) {
            if (nums[i] > number) {
                number = nums[i];
                index = i;
            }
        }

        return index;
    }
}
```