# Top-down dynamic programming

**Author:** winston_wolfe
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5087388/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5087388/)

---

# Code
```
public class Solution 
{
    public int NumberOfStableArrays(int zero, int one, int limit) 
    {
        var mod = 1000000007;
        var cache = new Dictionary<(int, int, bool), int>();
        return (Impl(zero, one, true) + Impl(zero, one, false)) % mod;

        int Impl(int zerosLeft, int onesLeft, bool oneSeries)
        {
            if (zerosLeft == 0 && onesLeft == 0) return 1;

            var cacheKey = (zerosLeft, onesLeft, oneSeries);
            if (cache.TryGetValue(cacheKey, out var cr)) return cr;
            var result = 0;

            if (oneSeries) 
            {
                for (var i = 1; i <= Math.Min(onesLeft, limit); i++)
                    result = (result + Impl(zerosLeft, onesLeft - i, false)) % mod;
            } 
            else 
            {
                for (var i = 1; i <= Math.Min(zerosLeft, limit); i++)
                    result = (result + Impl(zerosLeft - i, onesLeft, true)) % mod;
            }

            cache.Add(cacheKey, result);

            return result;
        }        
    }
}
```