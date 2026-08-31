# C# using LINQ

**Author:** gbamqzkdyg
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3208912/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3208912/)

---

# Code
```
public class Solution {
    public int[][] MergeArrays(int[][] nums1, int[][] nums2) => nums1
        .Concat(nums2)
        .GroupBy(num => num[0])
        .Select(g => g.Aggregate(new int[2], (sum, item) => new [] { item[0], sum[1] + item[1] }))
        .OrderBy(item => item[0])
        .ToArray();
}
```