# O(log sqrt n)

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546792/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546792/)

---

A special number is a square of a prime.

We find all primes till sqrt(10^9) using the Sieve of Eratosthenes, and store their squares in `p`.

Then, we use binary search to count special numbers for `l` and `r`.

Note that the complexity of this solution is *amortized* O(log sqrt n), because we generate `p` once and reuse for all test cases.

**C++**
```cpp
int constexpr mx = 31622; // sqrt(10^9)
vector<int> p;
class Solution {
public:
int nonSpecialCount(int l, int r) {
    if (p.empty()) {
        bool sieve[mx] = {};
        for (int i = 2; i < mx; ++i)
            if (!sieve[i])
                for (int j = i * i; j < mx; j += i)
                   sieve[j] = true;
        for (int i = 2; i < mx; ++i)
            if (!sieve[i])
                p.push_back(i * i);
    }
    auto lp = lower_bound(begin(p), end(p), l), rp = upper_bound(lp, end(p), r);
    return r - l + 1 - (rp - lp);
}
};
```