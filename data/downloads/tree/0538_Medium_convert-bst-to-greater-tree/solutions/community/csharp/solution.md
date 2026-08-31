# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1225611/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1225611/)

---

```
public class Solution 
{
    private int sum = 0;
    
    public TreeNode ConvertBST(TreeNode root) 
    {
        if(root==null)
            return null;
        
        ConvertBST(root.right);
        
        sum+=root.val;
        root.val = sum;
        
        ConvertBST(root.left);
        
        return root;
    }
}
```