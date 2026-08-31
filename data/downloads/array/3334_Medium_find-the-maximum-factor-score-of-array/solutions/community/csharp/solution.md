# C# Short and simple

**Author:** ConnectedPuddle
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5973171/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5973171/)

---

# Intuition

Check all cases of which number if any is excluded. Compute the factor score in each case.

`exclude = -1` means no number is excluded.

`lcm` is initialised to 1 because $LCM(1, x) = x$ for all $x$

`gcd` is initialised to 0 because $GCD(0, x) = x$ for all $x$


# Complexity
- Time complexity: $O(n^2)$ 

- Space complexity: $O(1)$

# Code
```csharp []
public class Solution {
    public long MaxScore(int[] nums) {
        int n = nums.Length;
        long result = 0;
        for (int exclude = -1; exclude < n; exclude++)
        {
            long lcm = 1;
            long gcd = 0;
            for (int i = 0; i < n; i++)
            {
                if (i == exclude)
                {
                    continue;
                }
                lcm = LCM(lcm, nums[i]);
                gcd = GCD(gcd, nums[i]);
            }
            result = Math.Max(result, lcm * gcd);
        }
        return result;
    }

    public long GCD(long x, long y)
    {
        while (x > 0 && y > 0)
        {
            if (x > y)
            {
                x %= y;
            }
            else
            {
                y %= x;
            }
        }
        return x | y;
    }

    public long LCM(long x, long y)
    {
        return x * y / GCD(x, y);
    }
}
```