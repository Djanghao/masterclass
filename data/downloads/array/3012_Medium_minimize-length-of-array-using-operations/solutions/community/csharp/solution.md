# O(n) solution

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5692852/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5692852/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Check the count of smallest number,
If a remainder is smaller than the smallest, then only that number can be the final array and make the count as 1;
If the remainder is not smaller than final array, then we can pair up the smallest number
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinimumArrayLength(int[] nums) {
        int smallest = Int32.MaxValue;
        for(int i=0; i<nums.Length; i++)
        {
            smallest = Math.Min(smallest, nums[i]);
        }
        int cnt = 0;
        for(int i=0; i<nums.Length; i++)
        {
            if (nums[i] == smallest)
            {
                cnt++;
            }
            if ((nums[i] % smallest) != 0 && (nums[i] % smallest) < smallest)
            {
                return 1;
            }
        }
        return (cnt+1)/2;
    }
}
```