# 🐌 C# - straightforward and LINQ

**Author:** user7166Uf
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2225904/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2225904/)

---

```
public class Solution
{
    public int MaxArea(int h, int w, int[] horizontalCuts, int[] verticalCuts)
    {
        long maxWidth = GetMax(h, horizontalCuts);
        long maxHeight = GetMax(w, verticalCuts);
        return (int) (maxWidth * maxHeight % 1000000007);

        static long GetMax(int length, int[] cuts)
        {
            Array.Sort(cuts);
            int max = Math.Max(cuts[0], length - cuts[^1]);
            for (int index = 1; index < cuts.Length; index++)
            {
                max = Math.Max(cuts[index] - cuts[index - 1], max);
            }

            return max;
        }
    }
}
```

LINQ
```
public class Solution
{
    public int MaxArea(int h, int w, int[] horizontalCuts, int[] verticalCuts)
    {
        long maxWidth = GetMax(h, horizontalCuts);
        long maxHeight = GetMax(w, verticalCuts);
        return (int) (maxWidth * maxHeight % 1000000007);

        long GetMax(int length, int[] cuts) => cuts
            .OrderBy(cut => cut)
            .Append(length)
            .Aggregate((Previous: 0, Max: 0), (x, current) => (current, Math.Max(x.Max, current - x.Previous)))
            .Max;
    }
}
```