# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/5254718/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/5254718/)

---

```csharp
public class Solution
{
    public IList<long> MinOperations(int[] nums, int[] queries)
    {
        Array.Sort(nums);

        var sum = 0L;
        var prefix = Array.ConvertAll(nums, num => sum += num);

        return Array.ConvertAll(queries, query =>
        {
            var index = Array.BinarySearch(nums, query);
            var upperBound = Math.Abs(index + 1);

            var ops = prefix[^1];
            ops += query * ( 2L * upperBound - nums.Length);
            ops -= 2L * prefix.ElementAtOrDefault(upperBound - 1);
            return ops;
        });
    }
}
```