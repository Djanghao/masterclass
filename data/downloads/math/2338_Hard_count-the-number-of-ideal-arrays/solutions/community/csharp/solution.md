# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/6048954/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/6048954/)

---

# Intuition
Find how many distinct "ideal" arrays can be formed, where each element in the array is divisible by the one before it. To solve this, we need to count the number of ways to build such arrays for each possible starting value and ensure we only consider those that meet the divisibility rule.

# Approach
Precompute the factorials and their modular inverses for efficient combination calculations and use prime factorization for each number to count how many ways we can extend an array starting from that number by considering divisors, summing up the valid arrays using dynamic programming.

# Complexity
- Time complexity:
(O(sqrt(i))) for each number and combination calculations, leading to an overall time complexity of O(maxValue * sqrt(maxValue)).

- Space complexity:
O(n + maxValue) due to the storage required for factorials, inverses, and dynamic programming arrays.

# Code
```csharp []
using System;
using System.Collections.Generic;

class Solution {
    const int M = (int)1e9 + 7;

    public int IdealArrays(int n, int maxValue) {
        long ans = 0;
        int N = n + maxValue;
        long[] inv = new long[N];
        long[] fact = new long[N];
        long[] factinv = new long[N];
        
        inv[1] = fact[0] = fact[1] = factinv[0] = factinv[1] = 1;
        
        for (int i = 2; i < N; i++) {
            inv[i] = M - M / i * inv[M % i] % M;
            fact[i] = fact[i - 1] * i % M;
            factinv[i] = factinv[i - 1] * inv[i] % M;
        }
        
        for (int i = 1; i <= maxValue; i++) {
            int tmp = i;
            var map = new Dictionary<int, int>();
            
            for (int j = 2; j * j <= tmp; j++) {
                while (tmp % j == 0) {  // prime factorization.
                    tmp /= j;
                    if (map.ContainsKey(j)) {
                        map[j]++;
                    } else {
                        map[j] = 1;
                    }
                }
            }
            
            if (tmp > 1) {
                if (map.ContainsKey(tmp)) {
                    map[tmp]++;
                } else {
                    map[tmp] = 1;
                }
            }
            
            long gain = 1;
            foreach (var val in map.Values) { // arranges all the primes.
                gain = (gain * Comb(n + val - 1, val, fact, factinv)) % M;
            }
            
            ans = (ans + gain) % M;
        }

        return (int)ans;
    }

    private long Comb(int a, int b, long[] fact, long[] factinv) {
        return fact[a] * factinv[b] % M * factinv[a - b] % M;
    }
}

```