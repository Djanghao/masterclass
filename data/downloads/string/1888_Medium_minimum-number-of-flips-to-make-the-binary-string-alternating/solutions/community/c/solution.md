# Sliding Window

**Author:** votrubac
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1254148/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1254148/)

---

The alternating string can start with '0' or '1'. We count how many replancements we need for these two cases in `s0` and `s1`.

But do not stop there. Since we can rotate our string, keep going and counting. However, this time we need to discard (subtract) missmatches that occurred before the rotated string. This can be done using the sliding window approach.

**C++**
```cpp
int minFlips(string s) {
    int res = INT_MAX, s0 = 0, s1 = 0, sz = s.size();
    for (int i = 0; i < 2 * sz; ++i) {
        s0 += s[i % sz] != '0' + i % 2;
        s1 += s[i % sz] != '0' + (1 - i % 2);
        if (i >= sz - 1) {
            if (i >= sz) {
                s0 -= s[i - sz] != '0' + (i - sz) % 2;
                s1 -= s[i - sz] != '0' + (1 - (i - sz) % 2);
            }
            res = min(res, min(s0, s1));
        }
    }
    return res;
}
```