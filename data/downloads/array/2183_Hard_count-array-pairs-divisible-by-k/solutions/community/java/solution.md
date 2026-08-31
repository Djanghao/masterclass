# [Java/C++/Python] Easy and Concise with Explanation

**Author:** lee215
**Votes:** 50
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785027/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785027/)

---

# **Explanation**
Count all elements greatest common divisor with `k`.
For each pair `(a, b)` of divisors, check if `a * b % k == 0`
<br>

# **Complexity**
Time `O(nlog100000 + k * k)`
Space `O(k)`
where `k` is the number of divisors of `k`.

# **Value of K**
provided by @megurine
83160 and 98280 have the biggest number of diviors, which is 128.
83160 = 11*7*5*3*3*3*2*2*2
98280 = 13*7*5*3*3*3*2*2*2

provided by @endlesscheng
Maximal number of divisors of any n-digit number
https://oeis.org/A066150
<br>

**Java**
by @blackspinner
```java
    public long countPairs(int[] nums, int k) {
        Map<Long, Long> cnt = new HashMap<>();
        long res = 0L;
        for (int x : nums) {
            cnt.merge(BigInteger.valueOf(x).gcd(BigInteger.valueOf(k)).longValue(), 1L, Long::sum);
        }
        for (long x : cnt.keySet()) {
            for (long y : cnt.keySet()) {
                if (x <= y && x * y % k == 0L) {
                    res += x < y ? cnt.get(x) * cnt.get(y) : cnt.get(x) * (cnt.get(x) - 1L) / 2L;
                }
            }
        }
        return res;
    }
```
**C++**
by @alexunxus
```
long long coutPairs(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        for (int& nu: nums) {
            mp[gcd(nu, k)]++;
        }
        long long res = 0;
        for (auto& [a, c1]: mp) {
            for (auto & [b, c2]: mp) {
                if (a <= b && a*(long) b %k == 0) {
                    res += a < b?(long)c1*c2:(long)c1*(c1-1)/2;
                }
            }
        }
        return res;    
    }
```
**Python**
```py
    def coutPairs(self, A, k):
        cnt = Counter(math.gcd(a, k) for a in A)
        res = 0
        for a in cnt:
            for b in cnt:
                if a <= b and a * b % k == 0:
                    res += cnt[a] * cnt[b] if a < b else cnt[a] * (cnt[a] - 1) // 2
        return res
```
