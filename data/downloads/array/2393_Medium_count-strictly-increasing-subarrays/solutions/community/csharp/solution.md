# Easy C# solution. Time O(n) | Space : O(1)

**Author:** Thyreophora
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4109741/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/4109741/)

---

```
public class Solution 
{
    public long CountSubarrays(int[] nums) 
    {
        var totalCount = 0L;
        var currentLength = 1;

        for (var i = 1; i < nums.Length; i++) 
        {
            if (nums[i] > nums[i - 1]) 
                totalCount += ++currentLength - 1;
            else
                currentLength = 1;
        }

        return totalCount + nums.Length;
    }
}
```