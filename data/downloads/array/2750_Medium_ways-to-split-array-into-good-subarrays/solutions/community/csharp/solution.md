# Simple O(n) solution.

**Author:** Drugged_Monkey
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5248822/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5248822/)

---

# Intuition
I'll just do what problem states.

# Approach
The answer is `(i1 - i0)(i1 - i2)...` where `i0, i1, i2...` is indices of `1` in array. That's it.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public sealed class Solution 
{
    private readonly static int mod = 1_000_000_007;

    public int NumberOfGoodSubarraySplits(int[] nums)
    {
        var n = nums.Length;
        var indices = new List<int>();
        var s = 1L;
        var last = -1;
        var flag = false;

        for (int i = 0; i < n; i++)
        {
            if (nums[i] == 1)
            {
                s *= last == -1 ? 1 : (i - last);
                s %= mod;
                last = i;
                flag = true;
            }
        }

        return flag ? (int)s : 0;
    }
}
```