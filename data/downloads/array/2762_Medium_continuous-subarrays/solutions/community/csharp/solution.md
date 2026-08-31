# Sliding window C# 316ms Beats 100.00%

**Author:** remedydev
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/5509614/](https://leetcode.com/problems/continuous-subarrays/solutions/5509614/)

---


# Approach
Use SortedSet and Dictionary to maintain a valid window
- SortedSet to keep track of the Min and Max in the window
- Dictionary used as a Frequency map to keep track of what element to delete while shrinking a window

# Complexity
- Time complexity:
$$O(nLogn)$$

- Space complexity:
$$O(2n)$$

# Code
```
public class Solution {
    public long ContinuousSubarrays(int[] nums)
    {
        SortedSet<int> wnd = new();
        Dictionary<int, int> fm = new();
        long ans=0;
        for (int i = 0, j = 0; j < nums.Length; j++)
        {
            var num = nums[j];
            wnd.Add(num);
            fm[num] = fm.GetValueOrDefault(num, 0) + 1;

            // Shrink a window if different is more or equal 2 
            while (wnd.Count>0 && wnd.Max - wnd.Min > 2)
            {
                var numDelete = nums[i++];
                fm[numDelete]--;
                if (fm[numDelete] == 0)
                {
                    fm.Remove(numDelete);
                    wnd.Remove(numDelete);
                }
            }

            // Valid window, do sub arrays calculations
            ans=ans+((long)(j-i+1));
        }
        return ans;
    }
}
```