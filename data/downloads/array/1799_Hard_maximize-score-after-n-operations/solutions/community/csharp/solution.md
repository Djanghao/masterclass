# C# DP + bitmask

**Author:** Dmitriy-Maksimov
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521568/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521568/)

---

# Approach
- Use bitmask to find all pairs of numbers. For example 5 (00000101 in binary form)  means the first and third numbers are used.
- Compute all GCD pairs - use `Dictionary` where `key` the bitmask and `value` is GCD.
- Iterate `i` from $$0$$ to $$2^n - 1$$. If the bitmask `k` of such GCD pair is overlapped with `i` (so `i & k != 0`), that mean number of this pair is already used, so skip it.
- Update `dp[i ^ k] = Max(dp[i^k], dp[i] + GCD_value(k) * bitCount(i) / 2 + 1)`.

# Complexity
- Time complexity: $$O(2^n \	imes n^2)$$
- Space complexity: $$O(2^n)$$

# Code
```
public class Solution
{
    public int MaxScore(int[] nums)
    {
        var n = nums.Length;
        var gcdVal = new Dictionary<int, int>();
        
        for (var i = 0; i < n; ++i)
        {
            for (var j = i + 1; j < n; ++j)
            {
                gcdVal.Add((1 << i) + (1 << j), gcd(nums[i], nums[j]));
            }
        }

        var dp = new int[1 << n];

        for (var i = 0; i < 1 << n; ++i)
        {
            var bits = System.Numerics.BitOperations.PopCount((uint) i);
            if (bits % 2 != 0)
            {
                // Skip odd numbers
                continue;
            }

            foreach (var (k, v) in gcdVal)
            {
                if ((k & i) != 0)
                {
                    // Skip overlapping numbers
                    continue;
                }

                dp[i ^ k] = Math.Max(dp[i ^ k], dp[i] + v * (bits / 2 + 1));
            }
        }

        return dp[(1 << n) - 1];
    }

    private static int gcd(int a, int b)
    {
        return b == 0 ? a : gcd(b, a % b);
    }
}
```