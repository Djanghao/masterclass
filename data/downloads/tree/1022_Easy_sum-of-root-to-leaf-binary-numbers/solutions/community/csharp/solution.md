# Simple solution with depth-first search.

**Author:** Drugged_Monkey
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4885382/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4885382/)

---

# Intuition
I'll use `DFS` since problem statement requires root-to-leaf pathes.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ except call stack

# Code
```
public sealed class Solution 
{
    private int sum = 0;

    public int SumRootToLeaf(TreeNode root) 
    {
        Recursion(root, 0);

        return sum;
    }

    private void Recursion(TreeNode node, int s)
    {
        var val = s * 2 + node.val;

        if(node.left != null)
        {
            Recursion(node.left, val);
        }

        if(node.right != null)
        {
            Recursion(node.right, val);  
        }

        if(node.left == null && node.right == null)
        {
            sum += val;
        }
    }
}
```