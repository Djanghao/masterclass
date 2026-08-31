# C# Solution | Time: O(n*log(n)), Memory: O(n) | Monotonic stack, Counting

**Author:** TonyTroeff
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3902063/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3902063/)

---

# Approach
We use monotomic stack to keep track of the boundaries of the range for which the element at the corresponding position is the one with the highest prime score.

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    private static int _mod = 1000000007;
    
    public int MaximumScore(IList<int> nums, int k) {
        var primes = Mathematics.GeneratePrimes(nums.Max()).ToArray();

        int[] norm = new int[nums.Count];
        for (int i = 0; i < nums.Count; i++)
        {
            int t = nums[i];
            for (int j = 0; j < primes.Length && t != 1; j++)
            {
                if (t % primes[j] == 0) norm[i]++;
                while (t % primes[j] == 0) t /= primes[j];
            }
        }

        Stack<int> s = new Stack<int>();

        int[] prev = new int[norm.Length];
        int[] next = new int[norm.Length];
        for (int i = 0; i < norm.Length; i++)
        {
            next[i] = nums.Count;
            while (s.TryPeek(out var el) && norm[el] < norm[i])
            {
                next[el] = i;
                s.Pop();
            }

            if (s.TryPeek(out var p)) prev[i] = p;
            else prev[i] = -1;

            s.Push(i);
        }

        Dictionary<int, int> subArrays = new Dictionary<int, int>();
        for (int i = 0; i < norm.Length; i++)
        {
            var left = i - prev[i];
            var right = next[i] - i;

            if (!subArrays.ContainsKey(nums[i])) subArrays[nums[i]] = 0;
            subArrays[nums[i]] = (subArrays[nums[i]] + (left * right) % _mod) % _mod;
        }

        long ans = 1;
        foreach (var (num, count) in subArrays.OrderByDescending(x => x.Key))
        {
            int take = Math.Min(k, count);
            ans = (ans * Mathematics.ModularExponentiation(num, take, _mod)) % _mod;

            k -= take;
            if (k == 0) break;
        }

        return (int) ans;
    }
    
    public static class Mathematics
    {
        public static long ModularExponentiation(long x, long y, long mod)
        {
            x %= mod;
            y %= mod;

            long ans = 1;
            while (y > 0) {
                if (y % 2 != 0) ans = ans * x % mod;

                x = x * x % mod;
                y /= 2;
            }

            return ans;
        }

        public static IEnumerable<int> GeneratePrimes(int n)
        {
            var primes = new List<int>();

            for (int i = 2; i <= n; i++)
            {
                bool isPrime = true;
                foreach (var p in primes)
                {
                    if (i % p == 0) { isPrime = false; break; }
                    if (p * p > i) break;
                }

                if (isPrime) primes.Add(i);
            }

            return primes;
        }
    }
}
```