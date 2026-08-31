# Brute-Force

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/2648945/](https://leetcode.com/problems/number-of-common-factors/solutions/2648945/)

---

**C++**
```cpp
int commonFactors(int a, int b) {
    int res = 1, hi = gcd(a, b);
    for (int n = 2; n <= hi; ++n)
        res += a % n == 0 && b % n == 0;
    return res;
}
```