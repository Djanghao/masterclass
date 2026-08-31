# C# brute force

**Author:** Dmitriy-Maksimov
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/5788130/](https://leetcode.com/problems/simplified-fractions/solutions/5788130/)

---

# Complexity
- Time complexity: $$O(n^2 \	imes log(n))$$
- Space complexity: $$O(n^2)$$

# Code
```csharp []
public class Solution
{
    public IList<string> SimplifiedFractions(int n)
    {
        List<string> ans = [];

        for (var denominator = 2; denominator <= n; ++denominator)
        {
            for (var numerator = 1; numerator < denominator; ++numerator)
            {
                if (Gcd(numerator, denominator) == 1)
                {
                    ans.Add($"{numerator}/{denominator}");
                }
            }
        }

        return ans;
    }

    private static int Gcd(int x, int y)
    {
        return x == 0 ? y : Gcd(y % x, x);
    }
}
```