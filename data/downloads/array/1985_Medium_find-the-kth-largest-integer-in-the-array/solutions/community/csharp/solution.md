# C# Sort

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5635403/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5635403/)

---

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public string KthLargestNumber(string[] nums, int k)
    {
        Array.Sort(nums, (n1, n2) => n1.Length == n2.Length ? n2.CompareTo(n1) : n2.Length - n1.Length);
        return nums[k - 1];
    }
}
```