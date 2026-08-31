# Beat 100% in C#

**Author:** sylnvin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4416718/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4416718/)

---

# Intuition
Euclidean algorithm

(The author is different, but I wrote C# )

# Code
```
public class Solution
{
    const int mod = 1000000007;

    private int ModInverse(int a, int b)
    {
        int x = 1, x1 = 0;
        int r = a, r1 = b;

        while (r1 != 0)
        {
            int q = r / r1, rr = r1, xx = x1;
            r1 = r - q * r1;
            x1 = x - q * x1;
            r = rr;
            x = xx;
        }

        if (x < 0)
        {
            x += b;
        }

        return x;
    }

    public int NumberOfWays(int s, int e, int k)
    {
        int diff = s - e;

        if (k < Math.Abs(diff) || (k - diff) % 2 != 0)
        {
            return 0;
        }

        if (k == Math.Abs(diff))
        {
            return 1;
        }

        int c = (diff >= 0) ? (k - diff) / 2 : (k + diff) / 2;
        int[] inverse = new int[c + 1];
        inverse[1] = 1;

        for (int i = 2; i <= c; i++)
        {
            inverse[i] = ModInverse(i, mod);
        }

        long ans = 1L;

        for (int i = 1; i <= c; i++)
        {
            ans = (ans * (k - i + 1) % mod) * inverse[i] % mod;
        }

        return (int)ans;
    }
}
```