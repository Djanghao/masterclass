# No-Multiplication

**Author:** votrubac
**Votes:** 65
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4304377/](https://leetcode.com/problems/maximum-xor-product/solutions/4304377/)

---

This problem is much easier in Python (see "Big Integer" solution below), where we can multiply `a` and `b` and compare products.

We just enumerate all bits from `1` to `n - 1`, and pick a bit `bt` if:
- `a * b < (a ^ bt) * (b ^ bt)`.

For C++, `a * b` exceeds the 64-bit integer. So, we need an additional insight:
- always pick a bit if it makes the smaller of two numbers bigger.

> Of course, it's best if a bit makes two numbers bigger.

We can see that transfering a bit to a smaller number results in a larger product:
- 57 * 17 = 969
- (57 - 8) * (17 + 8) = 1225

Moving a bit from one number to another does not change `a + b`. If `a + b == c`, then the largest product we can achieve is `c / 2 * c / 2`.

Therefore, moving a bit to a smaller number increases the product as it makes both numbers closer to `c / 2`.

**Important Note**
For the Python solution, we can start either from the most or least significant bit.

For the "no-multiplication" solution, we must start with the most significant bit.

This is because transfering it makes the smaller number the larger.

## No-Multiplication
**C++**
```cpp
int maximumXorProduct(long long a, long long b, int n) {
    int mod = 1000000007;
    if (n)
        for (long long bt = 1LL << (n - 1); bt > 0; bt >>= 1)
            if ((min(a, b) & bt) == 0) {
                a ^= bt;
                b ^= bt;
            }
    return a % mod * (b % mod) % mod;
}
```

## Big Integer
**Python 3**
```python
class Solution:
    def maximumXorProduct(self, a: int, b: int, n: int) -> int:
        for bt in (2**i for i in range(n)):
            if a * b < (a ^ bt) * (b ^ bt):
                a ^= bt
                b ^= bt
        return a * b % (10**9 + 7)
```