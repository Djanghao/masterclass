# C# Iterative DFS

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/5829460/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/5829460/)

---

```csharp
public class Solution
{
    public char GetKthCharacter(RopeTreeNode root, int k)
    {
        while (root.val == string.Empty)
        {
            var sizeOfLeft = root.left == null ? 0 :
                root.left.len + root.left.val.Length;

            if (k <= sizeOfLeft)
            {
                root = root.left;
            }
            else
            {
                k -= sizeOfLeft;
                root = root.right;
            }
        }

        return root.val[k - 1];
    }
}
```