# Constant space binary search solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5130189/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5130189/)

---

# Code
```
public class Solution 
{
    public long CountPairs(int[] nums1, int[] nums2) 
    {
        long result = 0;

        for (var i = 0; i < nums1.Length; i++)
            nums1[i] = nums1[i] - nums2[i];
        
        Array.Sort(nums1);

        for (var i = 0; i < nums1.Length; i++)
        {
            if (nums1[i] > 0)
                result += nums1.Length - i - 1;
            else
            {
                var l = i + 1;
                var r = nums1.Length - 1;
                var index = -1;

                while (l <= r)
                {
                    var m = l + (r - l) / 2;

                    if (nums1[m] + nums1[i] > 0)
                    {
                        index = m;
                        r = m - 1;
                    }
                    else
                    {
                        l = m + 1;
                    }
                }

                if (index >= 0)
                    result += nums1.Length - index;
            }
        }

        return result;
    }
}
```