# Naive implementation

**Author:** limpalex
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/6033122/](https://leetcode.com/problems/wiggle-sort-ii/solutions/6033122/)

---

# Intuition
Naive implementation

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n log n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public void WiggleSort(int[] nums) {
        var count = nums.Length / 2;
        foreach (var item in nums.OrderByDescending(n => n).Select((number, index) => (number, index)).ToList())
        {
            var newIndex = item.index >= count ? (item.index - count) * 2 : item.index * 2 + 1;
            nums[newIndex] = item.number;
        }
    }
}
```