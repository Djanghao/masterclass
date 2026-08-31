# Counting

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561742/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561742/)

---

I suggest to first solve for `x == 1` (see the second solution below).

For the first `n` numbers (including 0), we have the total number of bits:
- 1: 0
- 2: 1 (2 * 0 + 1)
- 4: 4 (2 * 1 + 2)
- 8: 12 (2 * 4 + 4)
- 16: 32 (2 * 12 + 8)

So, for `n * 2` numbers, the number of existing bits doubles, and we add `n` rightmost bits.

If `2 * bits + n` exceeds `k`, we subtract `bits` from `k`, and restart from `n == 0`. However, note that we need to keep the righmost bit(s).

Say `k == 40`. For the first 4 bits, we got 16 numbers and 32 total bits. With 5 bits, we get 32 numbers and 80 total bits, which is too much.

So, we restart from `n == 0` (note that is now `k == 40 - 32 == 8`). Now, however have a rigthmost bit set in the 5th position:
- 10000: 1
- 10001: 3 (2 * 1 + 1)
- 10011: 8 (2 * 3 + 2)

For `x > 1`, the difference is that we neet to track the position `p` of the rightmost bit, and add it only if `p % x == 0`.

**C++**
```cpp
long long count(long long k, int rigthmost, int x) {
    if (k < rigthmost)
        return 0;
    long long n = 1, bits = rigthmost, p = 1;
    while (2 * bits + (p % x == 0 ? n : 0) <= k) {
        bits = 2 * bits + (p % x == 0 ? n : 0);
        n *= 2;
        ++p;
    }
    return n + count(k - bits, rigthmost + (p % x == 0), x);
}
long long findMaximumNumber(long long k, int x) {
    return count(k, 0, x) - 1;
}
```

## Solution for x == 1
**C++**
```cpp
long long count(long long k, int rightmost) {
    if (k < rightmost)
        return 0;
    long long n = 1, bits = rightmost;
    while (2 * bits + n <= k) {
        bits = 2 * bits + n;
        n *= 2;
    }
    return n + count(k - bits, rightmost + 1);
}
long long findMaximumNumber(long long k, int x) {
    return count(k, 0) - 1;
}
```