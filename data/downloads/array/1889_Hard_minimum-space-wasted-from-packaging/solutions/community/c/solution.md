# Inversion

**Author:** votrubac
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254271/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254271/)

---

The common sense approach should work, but you will get TLE because of the problem constraints. 

The important thing to realize is that the number of packages is the same as the number of boxes from all suppliers. The worst case scenario is when we have 10^5 boxes and 10^5 suppliers, while each supplier only offers 1 box.

So if you go through each box for every supplier to calculate waste, we will end up with a quadratic solution. A quadratic solution would give you TLE if n can be up to 10^5.

An inverse approach helps here. If we go through each box, and compute how many packages will fit into each box, we can calculate total space in O(n log n) for `n` boxes. For each supplier, we can figure out the waste by subtracting sum of all packages from the total space.

**C++**
```cpp
int minWastedSpace(vector<int>& packs, vector<vector<int>>& suppliers) {
    sort(begin(packs), end(packs));
    long sum_packs = accumulate(begin(packs), end(packs), 0l), res = LONG_MAX;
    for (auto &boxes : suppliers ) {
        sort(begin(boxes), end(boxes));
        if (boxes.back() >= packs.back()) {
            long prev = 0, cur = 0, total = 0;
            for (auto b : boxes) {
                cur = upper_bound(begin(packs) + prev, end(packs), b) - begin(packs);
                total += b * (cur - prev);
                prev = cur;
            }
            res = min(res, total - sum_packs);
        }
    }
    return res == LONG_MAX ? -1 : res % 1000000007;
}
```