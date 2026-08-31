# C# Recursion

**Author:** Dmitriy-Maksimov
**Votes:** 3
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/3270983/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/3270983/)

---

# Complexity
- Time complexity: $$O(log(n))$$
- Space complexity: $$O(log(n))$$

# Code
```
public class Solution
{
    public TreeNode InsertIntoBST(TreeNode? root, int val)
    {
        if (root == null)
        {
            return new TreeNode(val);
        }

        if (root.val > val)
        {
            root.left = InsertIntoBST(root.left, val);
        }
        else
        {
            root.right = InsertIntoBST(root.right, val);
        }
        
        return root;
    }
}
```