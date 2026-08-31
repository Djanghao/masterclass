# C# Linq OneLiner

**Author:** 7bnx
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/3697378/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/3697378/)

---

```
public class Solution {
    public bool FindSubarrays(int[] nums)
      => Enumerable
        .Range(0, nums.Length - 1)
        .GroupBy(i => nums[i..(i+2)].Sum())
        .Any(g => g.Count() >= 2);
}
```