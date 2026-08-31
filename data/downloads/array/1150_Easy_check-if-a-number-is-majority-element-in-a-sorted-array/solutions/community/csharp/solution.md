# Efficient Binary Search solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/4879448/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/4879448/)

---

# Code
```
public class Solution 
{
    public bool IsMajorityElement(int[] nums, int target) 
    {
        var low = FindLow();
        if (low == -1) return false;
        var high = FindHigh();

        return high - low + 1 > nums.Length / 2;

        int FindLow()
        {
            var l = 0;
            var r = nums.Length - 1;
            var index = -1;

            while (l <= r)
            {
                var m = l + (r - l) / 2;
                if (nums[m] == target)
                {
                    index = m;
                    r = m - 1;
                }
                else if (nums[m] > target)
                {
                    r = m - 1;
                }
                else
                {
                    l = m + 1;
                }
            }

            return index;
        }

        int FindHigh()
        {
            var l = 0;
            var r = nums.Length - 1;
            var index = -1;   

            while (l <= r)
            {
                var m = l + (r - l) / 2;
                if (nums[m] == target)
                {
                    index = m;
                    l = m + 1;
                }
                else if (nums[m] < target)
                {
                    l = m + 1;
                }
                else
                {
                    r = m - 1;
                }
            }

            return index;
        }
    }
}
```