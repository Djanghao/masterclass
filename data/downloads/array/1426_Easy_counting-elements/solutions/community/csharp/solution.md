# C# with HashSet

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/3308506/](https://leetcode.com/problems/counting-elements/solutions/3308506/)

---

```
public class Solution
{
    public int CountElements(int[] arr)
    {
        var set = arr.ToHashSet();
        return arr.Count(x => set.Contains(x + 1));
    }
}
```