# C#, Prefix-Suffix

**Author:** CDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3522470/](https://leetcode.com/problems/maximum-or/solutions/3522470/)

---

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(n)$$ 

# Code
```
public class Solution 
{
    public long MaximumOr(int[] nums, int k)
    {
        int n = nums.Length;
        long[] prefix = new long[n];
        long[] suffix = new long[n];

        for (int i = 1; i < n; i++)
        {
            prefix[i] = prefix[i - 1] | nums[i-1];
        }

        for (int i = n - 2; i >= 0; i--)
        {
            suffix[i] = suffix[i + 1] | nums[i+1];
        }

        long result = 0;
        long power = (int)Math.Pow(2,k);
        for (int i = 0; i < n; i++)
        {
            result = Math.Max(result, prefix[i] | (nums[i] * power) | suffix[i]);
        }

        return result;
    }
}
```