# Sliding Window

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818304/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818304/)

---

Nothing new here, similar to [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring). 

We track if a string `[j, i]` contains all characters in `w2`.

> For that, we decrement `match` when the remaining character count reaches zero.

If it does, we add `len(w2) - i` to the result, and increment `j`.

**C++**
```cpp
long long validSubstringCount(string w1, string w2) {
    long long cnt[26] = {}, j = 0, match = 0, res = 0;
    for (char ch : w2)
        match += cnt[ch - 'a']++ == 0;
    for (int i = 0; i < w1.size(); ++i) {
        --cnt[w1[i] - 'a'];
        match -= cnt[w1[i] - 'a'] == 0; 
        while (match == 0) {
            res += w1.size() - i;
            match += cnt[w1[j] - 'a'] == 0;
            ++cnt[w1[j++] - 'a'];
        }
    }
    return res;
}
```