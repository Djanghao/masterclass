# Enumerate All Sizes

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449702/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449702/)

---

We enumerate all posible square sizes from horizontal coordinates.

This takes O(n * n) time and space, where n is the number of coordinates.

We store enumerated horizontal coordinates in a hash set.

Then, we enumerate all possible sizes from vertical coordinates.

If this size is in the hash set - we can form a square.

**C++**
```cpp
long long enumSizes(vector<int>& f, int sz, unordered_set<long long> &s) {
    long long res = -1;
    bool verify = !s.empty();
    f.push_back(1);
    f.push_back(sz);
    for (int i = 0; i < f.size(); ++i) {
        for (int j = i + 1; j < f.size(); ++j)
            if (verify) {
                if (s.count(abs(f[j] - f[i])))
                    res = max(res, ((long long)f[j] - f[i]) * (f[j] - f[i]));
            }
            else
                s.insert(abs(f[j] - f[i]));
    }
    return res;
}
int maximizeSquareArea(int m, int n, vector<int>& hFences, vector<int>& vFences) {
    long long res = -1;
    unordered_set<long long> s;
    enumSizes(hFences, m, s);
    return enumSizes(vFences, n, s) % 1000000007;
}
```