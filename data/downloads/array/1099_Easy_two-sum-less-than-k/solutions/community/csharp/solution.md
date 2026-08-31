# C# with SortedSet

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/5857495/](https://leetcode.com/problems/two-sum-less-than-k/solutions/5857495/)

---

```csharp
public class Solution
{
    public int TwoSumLessThanK(int[] nums, int k)
    {
        var set = new SortedSet<int>();
        set.Add(int.MinValue);
        var result = -1;

        foreach (var num in nums)
        {
            var view = set.GetViewBetween(int.MinValue, k - num - 1);
            result = Math.Max(result, num + view.Max);
            set.Add(num);
        }

        return result;
    }
}
```