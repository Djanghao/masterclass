# Sorted List + Suffix sum solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4915951/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4915951/)

---

# Code
```
public class Solution 
{
    public int MaximumTripletValue(int[] nums) 
    {
        var list = new SortedList<int, int>();
        list.Add(nums[0], nums[0]);

        var suffix = new int[nums.Length];
        var result = 0;
        var max = nums.Last();

        for (var i = nums.Length - 1; i >= 0; i--)
        {
            suffix[i] = max;
            max = Math.Max(max, nums[i]);
        }

        for (var i = 1; i < nums.Length - 1; i++)
        {
            var l = 0;
            var r = list.Count - 1;
            var min = 0;

            while (l <= r)
            {
                var m = l + (r - l) / 2;
                if (list.Values[m] < nums[i])
                {
                    min = list.Values[m];
                    l = m + 1;
                }
                else
                    r = m - 1;
            }
            
            if (!list.ContainsKey(nums[i]))
                list.Add(nums[i], nums[i]);
                
            if (min > 0 && suffix[i] > nums[i])
                result = Math.Max(result, min - nums[i] + suffix[i]);
        }

        return result;
    }
}
```