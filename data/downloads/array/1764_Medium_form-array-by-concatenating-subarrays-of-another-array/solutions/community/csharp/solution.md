# C#

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5178256/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5178256/)

---


# Code
```
public class Solution {
    int IndexOf(int[] a, int[] b, int iS)
    {
        for (int i = iS; i <= a.Length - b.Length; i++)
        {
            bool good = true;
            for (int k = 0; k < b.Length && good; k++)
                good &= a[i + k] == b[k];
            if (good)
                return i;
        }
        return -1;
    }

    public bool CanChoose(int[][] groups, int[] nums) {
        int k = 0;
        for (int i = 0; i < groups.Length; i++)
        {
            k = IndexOf(nums, groups[i], k);            
            if (k == -1)
                return false;
            k += groups[i].Length;            
        }
        return true;
    }
}
```