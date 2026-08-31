# Prefix Sum

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948911/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948911/)

---

Transform the array (replace `0` with `-1`) and compute the prefix sum.

Them, go left-to-right and return the first point where sum of left part is greater the sum of the right part.

**C++**
```cpp
int minimumLevels(vector<int>& ps) {
    transform(begin(ps), end(ps), begin(ps), [](int n){ return n ? 1 : -1; });
    partial_sum(begin(ps), end(ps), begin(ps));
    for (int i = 0; i < ps.size() - 1; ++i)
        if (ps[i] > ps.back() - ps[i])
            return i + 1;
    return -1;
}
```