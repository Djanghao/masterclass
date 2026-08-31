# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/5347536/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/5347536/)

---

```csharp
public class Solution
{
    public int MinAbsoluteSumDiff(int[] nums1, int[] nums2)
    {
        Array.Sort(nums1, nums2);

        var totalSum = 0L;
        var bestDiff = 0L;

        for (var i = 0; i < nums1.Length; i++)
        {
            var original = Math.Abs(nums1[i] - nums2[i]);
            totalSum += original;

            if (original <= bestDiff)
                continue;

            var index = Array.BinarySearch(nums1, nums2[i]);
            var upperBound = Math.Abs(index + 1);

            if (upperBound < nums1.Length)
            {
                var replaced = Math.Abs(nums1[upperBound] - nums2[i]);
                bestDiff = Math.Max(bestDiff, original - replaced);
            }

            if (upperBound > 0)
            {
                var replaced = Math.Abs(nums1[upperBound - 1] - nums2[i]);
                bestDiff = Math.Max(bestDiff, original - replaced);
            }
        }

        return (int)((totalSum - bestDiff) % 1_000_000_007);
    }
}
```