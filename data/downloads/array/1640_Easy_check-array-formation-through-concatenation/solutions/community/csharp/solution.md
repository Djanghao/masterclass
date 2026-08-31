# C# Linq One-liner

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4975237/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4975237/)

---

```
public class Solution
{
    public bool CanFormArray(int[] arr, int[][] pieces) => pieces
        .OrderBy(p => Array.IndexOf(arr, p[0]))
        .SelectMany(p => p)
        .SequenceEqual(arr);
}
```
```
public class Solution
{
    public bool CanFormArray(int[] arr, int[][] pieces)
    {
        var dic = pieces.ToDictionary(p => p[0]);
        return arr.SelectMany(a => dic.GetValueOrDefault(a, [])).SequenceEqual(arr);
    }
}
```