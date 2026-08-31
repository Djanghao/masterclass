# C# Linq

**Author:** gbamqzkdyg
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/5290403/](https://leetcode.com/problems/two-out-of-three/solutions/5290403/)

---

# Code
```
public class Solution {
    public IList<int> TwoOutOfThree(int[] nums1, int[] nums2, int[] nums3) =>
        nums1
        .Distinct()
        .SelectMany(num1 =>
            nums2
            .Distinct()
            .Select(num2 => (num1, num2)))
        .SelectMany(pair =>
            nums3
            .Select(num3 => (pair.Item1, pair.Item2, num3)))
        .Select(tri => tri.Item1 == tri.Item2 ? tri.Item1 : tri.Item2 == tri.Item3 ? tri.Item2 : tri.Item3 == tri.Item1 ? tri.Item3 : 0)
        .Where(num => num != 0)
        .Distinct()
        .ToList();
}
```