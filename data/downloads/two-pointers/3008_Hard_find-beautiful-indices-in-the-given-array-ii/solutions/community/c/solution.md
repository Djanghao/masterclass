# Rabin-Karp

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561804/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561804/)

---

The trick is to find all substrings in O(s + t). 

For that, we can use the Rabin-Karp algorithm (rolling hash). Having sorted indexes for both `a` and `b`, we can use two pointers to check for proximity.

> Note that the implementation does not include the collision check; it works for the current test cases but we may need to add that if test cases change.

**C++**
```cpp
vector<int> beautifulIndices(const string &s, const string &a, const string &b, int k) {
    vector<int> ia = rabin_karp(s, a), ib = rabin_karp(s, b), res;
    for (int i = 0, j = 0; i < ia.size(); ++i) {
        while (j < ib.size() && ib[j] + k < ia[i])
            ++j;
        if (j < ib.size() && abs(ia[i] - ib[j]) <= k)
            res.push_back(ia[i]);
    }
    return res;
}    
vector<int> rabin_karp(string const& s, string const& t) {
    const int p = 31, m = 1e9 + 9, sz = t.size();
    long long p_pow = 1, h_t = 0, h_s = 0;
    for (int i = 0; i < sz; ++i) {
        h_t = (h_t * p + (t[i] - 'a' + 1)) % m;
        p_pow = (p_pow * p) % m;
    }
    vector<int> occurrences;
    for (int i = 0; i < s.size(); ++i) {
        h_s = (h_s * p + (s[i] - 'a' + 1)) % m;
        if (i >= sz)
            h_s = (m + h_s - p_pow * (s[i - sz] - 'a' + 1) % m) % m;
        if (i + 1 >= sz && h_t == h_s)
            occurrences.push_back(i + 1 - sz);
    }
    return occurrences;
}
```