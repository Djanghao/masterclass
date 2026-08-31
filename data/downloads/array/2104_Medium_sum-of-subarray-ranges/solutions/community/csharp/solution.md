# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/2006388/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/2006388/)

---

```
public class Solution {
    public long SubArrayRanges(int[] nums) 
    {
        int n = nums.Length;
        long sum = 0;
        
        for(int i=0; i<n; i++)
        {
            int max = int.MinValue;
            int min = int.MaxValue;
            
            for(int j=i; j<n; j++)
            {
                max = Math.Max(max,nums[j]);
                min = Math.Min(min,nums[j]);
                sum+=max-min;
            }
        }
        
        return sum;
    }
}
```