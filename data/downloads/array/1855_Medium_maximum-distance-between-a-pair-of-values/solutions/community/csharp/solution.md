# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/5333247/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/5333247/)

---

```csharp
public class Solution
{
    public int MaxDistance(int[] nums1, int[] nums2)
    {
        var result = 0;

        for (var i = 0; i < nums1.Length; i++)
        {
            var index = nums2.BinarySearch(i, num2 => nums1[i] > num2);
            result = Math.Max(result, index - i - 1);
        }

        return result;
    }
}

public static class Extensions
{
    public static int BinarySearch<T>(
        this IList<T> list, int startFrom, Predicate<T> predicate)
    {
        var left = startFrom;
        var right = list.Count;

        while (left < right)
        {
            var mid = left + (right - left) / 2;

            if (predicate(list[mid]))
                right = mid;
            else
                left = mid + 1;
        }

        return left;
    }
}
```