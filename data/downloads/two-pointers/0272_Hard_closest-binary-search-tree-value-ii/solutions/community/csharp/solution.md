# 100% beat in runtime

**Author:** xueshzhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/6056321/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/6056321/)

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
    public IList<int> ClosestKValues(TreeNode root, double target, int k)
{
    List<int> order = new List<int>();
    ClosestKValuesVisitSeq(root, order);
    int index = GetIndexCloseToValue(order, target);
    int left=index, right = index;
    List<int> result = new List<int>();
    result.Add(order[index]);
    while (result.Count < k)
    {
        int nextLeft = left - 1 >= 0 ? order[left - 1] : int.MaxValue;
        int nextRight = right + 1 < order.Count ? order[right + 1] : int.MaxValue;
        if (Math.Abs(target - nextLeft) >= Math.Abs(target - nextRight))
        {
            right++;
            result.Add(order[right]);
        }
        else
        {
            left--;
            result.Add(order[left]);
        }
    }
    return result;
}
private void ClosestKValuesVisitSeq(TreeNode root, List<int> order)
{
    if (root == null) return;
    if (root.left != null)
    {
        ClosestKValuesVisitSeq(root.left, order);
    }
    order.Add(root.val);
    if (root.right != null)
    {
        ClosestKValuesVisitSeq(root.right, order);
    }
}
private int GetIndexCloseToValue(List<int> order, double target)
{
    int left = 0, right = order.Count-1;
if (left == right) return left;
    while (left < right)
    {
        if (left + 1 == right)
        {
            if (order[right] < target)
            {
                return right;
            }else if (order[left] > target)
            {
                return left;
            }
            else
            {
                return Math.Abs(target - order[left]) > Math.Abs(target - order[right]) ? right : left;
            }
        }
        int mid = (left + right) / 2;
        if (order[mid] * 1.0 == target)
        {
            return mid;
        }else if (order[mid] < target)
        {
            left = mid;
        }else if (order[mid] > target)
        {
            right = mid;
        }
    }
    return left;
}
}
```