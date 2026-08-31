# Numeric Sliding Window

**Author:** votrubac
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2038555/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2038555/)

---

The solution can be simpler, but the goal here is to avoid string conversions.

We build `cur` going right-to-left. We add `k`-th number by multiplying it by `pow(10, k - 1)`. When the window length exceeds `k`, we just divide `cur` by 10.

**C++**
```cpp
int divisorSubstrings(int num, int k) {
    int res = 0, cur = 0, pow = 1;
    for (int n = num; n > 0; n /= 10) {
        cur += (n % 10) * pow;
        if (--k > 0)
            pow *= 10;
        else {
            res += cur && !(num % cur);
            cur /= 10;
        }
    }
    return res;
}
```