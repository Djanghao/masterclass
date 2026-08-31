# O(n sqrt n)

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546675/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546675/)

---

The maximum number of zeros `z` in a dominant string is `~sqrt(n)`.
> `sqrt(n + 0.25) - 0.5` to be exact, which is the solution for the `z + z * z = n` equation.

For each `z` in `[0, sqrt(n))`, we can count dominant substrings in O(n) with the sliding window. 

> Also, if we do not find any dominant substring with `z` zeros, we won't find it for `z + 1` zeros.
> We can check for this and exit early, reducing the runtime in half. 

We move left and right side of the window so it contains exactly `z` zeros.

The tricky part is to count substrings in the window as we extend the right side.

Consider this example when `z == 2`:
- 110101: one substring
- 1101011: +2 substrings (**1101011** and 1**101011**)
- 11010111: +3 substrings (**11010111**, 1**1010111**, and 11**010111**)
- 110101111: +3 substrings (**110101111**, 1**10101111**, and 11**0101111**)

As you can see, we need to track the position of the first zero in the window (`p`).

Every time we extend our window, it generates `1 + min(p - j, cnt[1] - z * z)` additional substrings.

**C++**
```cpp
int numberOfSubstrings(const string &s) {
    int res = 0;
    for (int z = 0; z + z * z <= s.size(); ++z) {
        int cnt[2] = {}, p = 0, old_res = res;
        for (int i = 0, j = 0; i < s.size(); ++i) {
            ++cnt[s[i] == '1'];
            while (cnt[0] > z)
                --cnt[s[j++] == '1'];
            if (cnt[0] == z && cnt[1] && cnt[1] >= z * z) {
                for (p = max(p, j); p < i && s[p] == '1'; ++p);
                res += 1 + min(p - j, cnt[1] - z * z);              
            }
        }
        if (res == old_res)
            break;
    }
    return res;
}
```