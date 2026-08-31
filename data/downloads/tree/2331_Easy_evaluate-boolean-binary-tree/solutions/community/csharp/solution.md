# Elegant C#

**Author:** ilya-a-f
**Votes:** 7
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/3179830/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/3179830/)

---

```csharp
public class Solution
{
    public bool EvaluateTree(TreeNode node) => node.val switch
    {
        0 => false,
        1 => true,
        2 => EvaluateTree(node.left) || EvaluateTree(node.right),
        3 => EvaluateTree(node.left) && EvaluateTree(node.right),
    };
}
```