# LPS (KMP) vs. Z-function

**Author:** votrubac
**Votes:** 51
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1914743/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1914743/)

---

## Approach 1: LPS (KMP)
We build the Longest Prefix Suffix (LPS) array - which is what we would do for the KMP algorithm.

Then, we use the `cnt` array to count the number of times each character appears in a prefix. Summing up `cnt` will give us the length of all prefixes. 

Let's use `"bababbababb"` as the example . LPS and count arrays are as follows:

- `[0, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6]`
- `[0, 0, 1, 1, 2, 1, 1, 2, 2, 3, 2]`

Indeed, the letter `b` in position `8` appears in 3 prefixes: `bababb`, `bab` and `b`. Letter `b` in position `9` appears in `bababb` and `b`.

**C++**
```cpp
vector<int> lps(string &s) {
    vector<int> lps(s.size());
    for (int i = 1, j = 0; i < s.size(); ++i) {
        while (j && s[i] != s[j])
            j = max(0, lps[j - 1]);
        j += s[i] == s[j];
        lps[i] = j;
    }
    return lps;
}    
long long sumScores(string s) {
    vector<int> cnt;
    for (int j :  lps(s))
        cnt.push_back(j == 0 ? 0 : cnt[j - 1] + 1);   
    return accumulate(begin(cnt), end(cnt), 0LL) + s.size();
}
```

## Approach 2: Z-function
Fundamentally, this approach is similar to the one above. The Z-function computes the longest prefix for all suffixes directly, reusing previously computed prefix sizes.

Watching a video on YouTube (search for Z-function) is perhaps the fastest way to learn this algorithm. For the example above (`"bababbababb"`), the `z` array will look like this:
- `[0, 0, 3, 0, 1, 6, 0, 3, 0, 1, 1]`

**C++**
```cpp
vector<int> z(string &s) {
    vector<int> z(s.size());
    int l = 0, r = 1;
    for (int i = 1; i < s.size(); ++i) {
        z[i] = i > r ? 0 : min(r - i, z[i - l]);
        while (i + z[i] < s.size() && s[z[i]] == s[z[i] + i])
            ++z[i];
       if (z[i] + i > r) {
           l = i;
           r = z[i] + i;
        }
    }
    return z;
}
long long sumScores(string s) {
    vector<int> cnt = z(s);
    return accumulate(begin(cnt), end(cnt), 0LL) + s.size();
}
```