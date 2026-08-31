# Short and Sweet

**Author:** votrubac
**Votes:** 28
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4986192/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4986192/)

---

Our strategy is to change characters to `a` left-to-right, while we can.

We first calculate how many operations we need to change it to `a`: 
- `dist_a = min(s[i] - 'a', 'z' - s[i] + 1)`.

If we have enough operations left (`dist_a <= k`), we change the character to `a`, and subtract `dist_a` from `k`.

If we cannot make `a`, we decrease the current character using the remaninig operations.

> Note that we consider incrementing the current character only if we can cyclically reach `a`.
> Otherwise, it only makes sense to decrease the current character.

**C++**
```cpp
string getSmallestString(string s, int k) {
    for (int i = 0; i < s.size() && k > 0; ++i) {
        int dist_a = min(s[i] - 'a', 'z' - s[i] + 1);
        s[i] = dist_a <= k ? 'a' : s[i] - k;
        k -= dist_a;
    }
    return s;
}
```