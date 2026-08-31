# Sieve of Eratosthenes

**Author:** votrubac
**Votes:** 58
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2977256/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2977256/)

---

> Difference between two consecutive primes is called Prime Gap. There is only one gap of `1` (`3 - 2`).
> There are many primes with the gap of `2` - they are called twin primes.
> So, we exit early if we find a gap < 3, which improves runtime to 0 ms.

We use Sieve of Eratosthenes to find all primes `<= 1000000`.

We store those primes in a global array, so we can reuse it between test cases.

Then, we use a binary search to find the smallest prime in the range, and then check all consecutive primes.

The complexity of this approach is \u03C0(n) - number of primes up to `n` (assuming that the precomputation is amortized).

**C++**
```cpp
vector<int> p{2};
bool sieve[1000001] = {};
class Solution {
public:
vector<int> closestPrimes(int left, int right) {
    if (p.size() == 1)
        for (long long i = 3; i < 1000001; i += 2)
            if (!sieve[i]) {
                p.push_back(i);
                for (long long d = i * i; d < 1000001; d += i)
                    sieve[d] = true;
            }
    int n1 = -1, n2 = -1, i = lower_bound(begin(p), end(p), left) - begin(p);
    for (; i + 1 < p.size() && p[i + 1] <= right; ++i)
        if (n1 == -1 || p[i + 1] - p[i] < n2 - n1) {
            n1 = p[i];
            n2 = p[i + 1];
            if (n2 - n1 < 3)
                break;
        }
    return {n1, n2};
}
};
```