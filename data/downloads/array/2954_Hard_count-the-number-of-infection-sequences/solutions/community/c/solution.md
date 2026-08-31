# Stars and Bars

**Author:** votrubac
**Votes:** 40
**Link:** [https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4356005/](https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4356005/)

---

Consider `X0000X` (`X` denotes a sick kid):
- 2/4 kids can get sick at second 1: `*X000X*`
- 2/3 kids can get sick at second 2: `*X00X*`
- 2/2 kids can get sick at second 3: `*X0X*`
- 1/1 kid gets sick at the last second.

So, for the enclosed group of `m` kids, we can have `2 ^ (m - 1)` possible sequences.

Now, for `X0000X000X` we have two enclosed groups:
- `2 ^ (4 - 1)` = 8 sequences for the first group.
- `2 ^ (3 - 1)` = 4 sequences for the second.

Altogether, there are `8 * 4` = 32 sequences. However, for each sequence, we can also "interweave" kids (without changing their order):
- `****|||`
- `***|*||`
- `***||*|`
- ...
- `|||****`.

The number of such combinations is a binomial coefficient of total kids `n` (start + bars), and kids in one group (bars): `n! / (k! (n - k)!)`.

For the example above, `7! / (3! 4!)` = `5040 / (6 * 24)` = `35`. The total number of sequences is `32 * 35` = `1120`.

> What about non-eclosed groups? The number of combinations in such groups are `1`, but we still need to "interweave".

## Computing Inverse Modulo

Factorials get super large super quickly. We can either generate Pascal Triangle, or pre-compute modular factorials and their inverse moduli.

The former requires a quadratic time and memory, so it's not suitable for this problem's constraints.

### Fermat's Little Theorem

To compute inverse modulo we can use `mod(x, -1, mod)` in Python (3.8+), or a custom function `modPow(x, mod - 2, mod)` in C++.

Modular power takes O(log m), and it's good when we need to compute an inverse modulo for an arbitrary number.

We use this method in the Python solution below.

### Euclidean Division

Euclidean Division is useful when we need to precompute inverse moduli for a range `[1, m]`:
```cpp
inv[1] = 1;
for(int i = 2; i <= m; ++i)
    inv[i] = mod - mod / i * inv[mod % i] % mod;
```
With that, we can compute the inverse modulo for all factorials:
```cpp
	inv_factorial[i] = inv_factorial[i - 1] * inv[i] % mod; 
```

This method, compared to the modular power, improves the C++ runtime from 50 to 18 ms.

**C++**
```cpp
constexpr int m = 100000;
long long fact[m + 1], inv_fact[m + 1], mod = 1000000007, init = 0;
class Solution {
public:
int modPow(int x, int y, int mod)
{
    if (y == 0)
        return 1;
    long p = modPow(x, y / 2, mod) % mod;
    p = (p * p) % mod;
    return y % 2 ? (p * x) % mod : p;
}
long long binom_coeff(int n, int k) {
    return max(1LL, fact[n] * inv_fact[k] % mod * inv_fact[n - k] % mod);
}
int numberOfSequence(int n, vector<int>& sick) {
    if (!init) {
        init = fact[0] = 1;
        for (int i = 1; i <= m; ++i)
            fact[i] = fact[i - 1] * i % mod;
        inv_fact[m] = modPow(fact[m], mod - 2, mod);
        for (int i = m - 1; i; --i)
            inv_fact[i] = inv_fact[i + 1] * (i + 1) % mod;
    }
    long long res = 1;
    for (int i = 1; i < sick.size(); ++i) {
        int group = sick[i] - sick[i - 1] - 1;
        res = res * modPow(2, max(0, group - 1), mod) % mod; // combine
        res = res * binom_coeff(sick[i] - i, group) % mod; // interweave
    }
    return res * binom_coeff(n - sick.size(), n - sick.back() - 1) % mod;
}
};
```
**Python 3**
Here, we simplify the binomial coefficient by removing redundant operations.
```python
MOD = 10 ** 9 + 7
@cache
def fact(i: int) -> int:
    return 1 if i < 2 else i * fact(i - 1) % MOD
@cache
def ifact(i: int) -> int:
    return pow(fact(i), -1, MOD)
class Solution:
    def numberOfSequence(self, n: int, sick: List[int]) -> int:
        res = fact(n - len(sick)) * ifact(sick[0]) * ifact(n - sick[-1] - 1) % MOD
        for group in [b - a - 1 for a, b in pairwise(sick) if b - a > 1]:
            res = res * ifact(group) % MOD
            res = res * pow(2, group - 1, MOD) % MOD
        return res
```