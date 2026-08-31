# Backtracking solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/5046057/](https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/5046057/)

---

Not great, but passes

# Code
```
public class Solution 
{
    public int SelfDivisiblePermutationCount(int n) 
    {
        var cache = new Dictionary<(int, int), int>();
        return Impl(1, new HashSet<int>());

        int Impl(int index, HashSet<int> set)
        {
            if (index > n) return 1;

            var result = 0;

            for (var i = 1; i <= n; i++)
            {
                if (set.Contains(i) || Gcd(index, i) > 1) continue;

                set.Add(i);
                result += Impl(index + 1, set);
                set.Remove(i);
            }

            return result;
        }

        int Gcd(int number1, int number2)
        {
            if (number2 == 0) return number1;
            var cacheKey = (number1, number2);
            if (cache.TryGetValue(cacheKey, out var cr)) return cr;

            var result = Gcd(number2, number1 % number2);
            cache[cacheKey] = result;
            return result;
        }
    }
}
```