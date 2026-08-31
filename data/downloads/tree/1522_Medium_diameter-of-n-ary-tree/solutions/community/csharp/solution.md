# C# Simple Recursive DFS

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/3367771/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/3367771/)

---

```
public class Solution
{
    public int Diameter(Node root)
    {
        var maxDiameter = 0;
        DiameterDfs(root);
        return maxDiameter;

        int DiameterDfs(Node node)
        {
            var heights = node.children
                .Select(child => DiameterDfs(child))
                .OrderByDescending(h => h)
                .ToList();

            var diameter = heights.Take(2).Sum();
            maxDiameter = Math.Max(diameter, maxDiameter);
            var height = heights.FirstOrDefault() + 1;
            return height;
        }
    }
}

```