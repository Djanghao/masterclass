# Binary Search

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3177796/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3177796/)

---

I got stuck trying to find a greedy method, and the binary search did not occur to me :(

We binary-search for a maximum minimum power `m`.

For each power `m`, we check if we can achieve that power with up to `k` new power stations in O(n).

We track the current `power` using the sliding window.

If a city `i` is underpowered (`power < m`), we place `m - power` new plants at point `i + r`.

**C++**
```cpp
long long maxPower(vector<int>& s, int r, int k) {
    long long n = s.size(), l = 0, h = 11000000000LL;
    long long st_pwr = accumulate(begin(s), begin(s) + r, 0LL);
    vector<long long> ps(n + 1);
    while (l < h) {
        long long m = (l + h + 1) / 2, build = 0, power = st_pwr;
        for (int i = 0; i < n && build <= k; ++i) {
            power += i + r < n ? s[i + r] : 0;
            power -= i > r ? ps[i - r - 1] + s[i - r - 1] : 0;
            if (i + r < n)
                ps[i + r] = max(0LL, m - power);
            build += max(0LL, m - power);
            power += max(0LL, m - power);
        }
        if (build > k)
            h = m - 1;
        else
            l = m;
    }
    return l;
}
```