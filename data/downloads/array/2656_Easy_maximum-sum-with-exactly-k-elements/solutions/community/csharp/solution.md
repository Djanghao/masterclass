# C# LINQ One-Line

**Author:** AIP
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3478698/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3478698/)

---


# Code
```
public class Solution {
    public int MaximizeSum(int[] nums, int k) 
        => Enumerable.Range(nums.Max(), k).Sum();
}
```