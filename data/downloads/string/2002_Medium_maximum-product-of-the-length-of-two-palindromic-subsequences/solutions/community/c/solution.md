# Mask DP

**Author:** votrubac
**Votes:** 112
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458289/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458289/)

---

We have `2^n` possible palindromes, and each of them can be represented by a mask `[1 ... 4096]` (since `n` is limited to `12`).

First, we check if a mask represents a valid palindrome, and if so, store the length (or, number of `1` bits) in `dp`.

Then, we check all non-zero masks `m1` against all non-intersecting masks `m2` (`m1 & m2 == 0`), and track the largest product.

>Update1: as suggested by [Gowe](https://leetcode.com/Gowe/), we can use more efficient enumeration for `m2` to only go through "available" bits (`mask ^ m1`). This speeds up C++ runtime from 44 to 22 ms!

> Update 2: we can do pruning to skip masks with no potential to surpass the current maximum. The runtime is now reduced to 4ms!

> Update 3: an alternative solution (proposed by [LVL99](https://leetcode.com/LVL99/)) is to not check all submasks, but instead run "Largest Palindromic Subsequence" algo for all unused bits. This potentially can reduce checks from `2 ^ n` to `n ^ 2`. It's a longer solution, so posted it as a comment.

**C++**
```cpp
int palSize(string &s, int mask) {
    int p1 = 0, p2 = s.size(), res = 0;
    while (p1 <= p2) {
        if ((mask & (1 << p1)) == 0)
            ++p1;
        else if ((mask & (1 << p2)) == 0)
            --p2;
        else if (s[p1] != s[p2])
            return 0;
        else
            res += 1 + (p1++ != p2--);
    }
    return res;
}
int maxProduct(string s) {
    int dp[4096] = {}, res = 0, mask = (1 << s.size()) - 1;
    for (int m = 1; m <= mask; ++m)
        dp[m] = palSize(s, m);
    for (int m1 = mask; m1; --m1)
        if (dp[m1] * (s.size() - dp[m1]) > res)
            for(int m2 = mask ^ m1; m2; m2 = (m2 - 1) & (mask ^ m1))
                res = max(res, dp[m1] * dp[m2]);
    return res;
}
```
**Java**
Java version courtesy of [amoghtewari](https://leetcode.com/amoghtewari/).
```java
public int maxProduct(String s) {
    int[] dp = new int[4096];
    int res = 0, mask = (1 << s.length()) - 1;
    for (int m = 1; m <= mask; ++m)
        dp[m] = palSize(s, m);
    for (int m1 = mask; m1 > 0; --m1)
        if (dp[m1] * (s.length() - dp[m1]) > res)
            for(int m2 = mask ^ m1; m2 > 0; m2 = (m2 - 1) & (mask ^ m1))
                res = Math.max(res, dp[m1] * dp[m2]);
    return res;
}
private int palSize(String s, int mask) {
    int p1 = 0, p2 = s.length(), res = 0;
    while (p1 <= p2) {
        if ((mask & (1 << p1)) == 0)
            ++p1;
        else if ((mask & (1 << p2)) == 0)
            --p2;
        else if (s.charAt(p1) != s.charAt(p2))
            return 0;
        else
            res += 1 + (p1++ != p2-- ? 1 : 0);
    }
    return res;
}
```