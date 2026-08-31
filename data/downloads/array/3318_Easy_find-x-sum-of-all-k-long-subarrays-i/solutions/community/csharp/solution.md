# 1-line Linq

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5906835/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5906835/)

---


# Code
```csharp []
public class Solution {
    public int[] FindXSum(int[] nums, int k, int x) {
        return Enumerable.Range(0, nums.Length - k + 1).Select(i => nums.Skip(i).Take(k).GroupBy(v => v).OrderBy(v => -v.Count()).ThenBy(v => -v.Key).Take(x).Sum(v => v.Key * v.Count())).ToArray();
    }
}
```