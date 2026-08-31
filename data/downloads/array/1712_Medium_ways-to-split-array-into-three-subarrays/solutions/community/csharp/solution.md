# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5354320/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/5354320/)

---

```csharp
public class Solution
{
    public int WaysToSplit(int[] nums)
    {
        var sum = 0;
        var sums = Array.ConvertAll(nums, num => sum += num);
        var result = 0;

        for (var i = 0; i < sums.Length; i++)
        {
            var min = i + 1;
            var max = sums.Length - 1;
            var beg = BinarySearch(sums, min, max, (sums[i] * 2));
            var end = BinarySearch(sums, beg, max, (sums[i] + sums[^1]) / 2 + 1);
            result += end - beg;
            result %= 1_000_000_007;
        }

        return result;
    }

    public int BinarySearch(int[] arr, int min, int max, int target)
    {
        while (min < max)
        {
            var mid = min + (max - min) / 2;

            if (arr[mid] < target)
                min = mid + 1;
            else
                max = mid;
        }

        return min;
    }
}
```