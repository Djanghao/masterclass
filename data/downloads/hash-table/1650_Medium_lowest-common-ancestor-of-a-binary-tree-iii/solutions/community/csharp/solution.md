# C# variation of HashSet solution

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/3344122/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/3344122/)

---

```
public class Solution
{
    public Node LowestCommonAncestor(Node p, Node q)
    {
        var pNodes = GetAncestors(p);
        var qNodes = GetAncestors(q);
        return pNodes.Intersect(qNodes).First();
    }

    private IEnumerable<Node> GetAncestors(Node node)
    {
        while (node != null)
        {
            yield return node;
            node = node.parent;
        }
    }
}
```