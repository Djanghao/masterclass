# Top-down DP, O(nK), C++, Python

**Author:** Aman_j1
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2832044/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2832044/)

---

```
class Solution {
public:
    int beautifulPartitions(string s, int k, int mn) {
        int n = s.size();
        int cache[n + 1][k + 1][2];
        memset(cache, -1, sizeof cache);
        mn = max(mn, 2);
        const int mod = 1e9 + 7;

        auto isPrime = [&](int x) -> bool {
            return x == '2' or x == '3' or x == '5' or x == '7';
        };
        
        function<int(int, int, int)> dp = [&](int i, int rem, int isActive) -> int {
            if (rem < 0) return 0;
            if (i >= n) {
                return rem == 0 and (isActive == 0);
            }    
            int &res = cache[i][rem][isActive];
            if (res != -1) return res;
            res = 0;
            if (!isActive) {
                if (!isPrime(s[i])) return 0;
                res = (res + dp(i + mn - 1, rem - 1, 1)) % mod;
            } else {
                res = (res + dp(i + 1, rem, 1)) % mod;
                if (!isPrime(s[i])) {
                    res = (res + dp(i + 1, rem, 0)) % mod;
                }
            }
            return res;
        };
        
        return dp(0, k, 0);
    }
};
```


```
class Solution:
    def beautifulPartitions(self, s: str, k: int, mn: int) -> int:
        n = len(s)
        mn = max(mn, 2)
        mod = 10 ** 9 + 7
        
        def isPrime(x) -> bool:
            return x == '2' or x == '3' or x == '5' or x == '7'
        
        @lru_cache(maxsize=None)
        def dp(i, rem, isActive) -> int:
            if rem < 0: return 0
            if i >= n:
                return rem == 0 and isActive == 0
            res = 0
            if not isActive:
                if not isPrime(s[i]): return 0
                res = (res + dp(i + mn - 1, rem - 1, 1)) % mod
            else:
                res = (res + dp(i + 1, rem, 1)) % mod
                if not isPrime(s[i]):
                    res = (res + dp(i + 1, rem, 0)) % mod
            return res
        
        return dp(0, k, 0)
