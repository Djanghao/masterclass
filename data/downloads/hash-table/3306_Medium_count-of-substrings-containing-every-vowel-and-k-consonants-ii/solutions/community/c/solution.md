# Trick and No Trick

**Author:** votrubac
**Votes:** 42
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846184/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846184/)

---

This problem is a bit frustrating to solve if you do not use the trick (see below).

## Two Counters (No Trick)
We maintain the sliding window `[left, i]` with exactly `k` consonants and all 5 vowels.

For that, we use counter `cnt`, where the first position denotes the number consonants; other 5 positions are counts of each vowel.

We also need to find the furthest point `mid`, so that `[mid, i]` also contains the needed number of vowels and consonants.

With that, the number of substrings is `mid - left + 1`.

When moving `mid`, we use the second counter `cnt1`, where we track characters between `left` and `mid`, When `left` moves past `mid`, we reset `cnt1`. 

**C++**
```cpp
string vw = "aeiou";
long long countOfSubstrings(string w, int k) {
    int left = 0, mid = 0, vowels = 0, cnt[6] = {}, cnt1[6] = {};
    long long res = 0;
    for (int i = 0; i < w.size(); ++i) {
        int p = vw.find(w[i]) + 1;
        ++cnt[p];
        vowels += cnt[p] == 1 && p;
        while (cnt[0] > k) {
            auto p = vw.find(w[left++]) + 1;
            --cnt[p];
            vowels -= cnt[p] == 0 && p;
        }
        if (vowels == 5 && cnt[0] == k) {
            if (mid < left) {
                mid = left;
                memset(cnt1, 0, sizeof(cnt1));
            }
            for (int p = vw.find(w[mid]) + 1; p && cnt[p] - cnt1[p] > 1; p = vw.find(w[++mid]) + 1)
                ++cnt1[p];
            res += mid - left + 1;                
        }
    }
    return res;
}
```

## Two Passes (Trick)
We use a simpler sliding window to find all substrings with at least `k` characters.

Then, we subtract the number of substrings with at least `k + 1` characters.

**C++**
```cpp
string vw = "aeiou";
long long countAtLeastK(string &w, int k) {
    long long res = 0, j = 0, cnt[6] = {}, unique = 0;
    for (int i = 0; i < w.size(); ++i) {
        int p = vw.find(w[i]) + 1;
        unique += ++cnt[p] == 1 && p;
        while (unique == 5 && cnt[0] >= k) {
            res += w.size() - i;
            int p = vw.find(w[j++]) + 1;
            unique -= --cnt[p] == 0 && p;                
        }
    }
    return res;
}
long long countOfSubstrings(string w, int k) {
    return countAtLeastK(w, k) - countAtLeastK(w, k + 1);
}
```