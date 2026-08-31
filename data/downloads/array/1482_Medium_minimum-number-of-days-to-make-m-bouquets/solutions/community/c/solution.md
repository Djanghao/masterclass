# Binary Search

**Author:** votrubac
**Votes:** 52
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/686240/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/686240/)

---

My first though was to use a sliding window. In a linear time, we can find the maximum bloom days for consecutive  groups of `k` flowers. Then, we can run a top-down DP to search for `m` non-overlapping groups. With memoisation, this approach will take O(n * m). 

At this point in the contest, I was thinking that it's a bit of too complex for a medium problem. That was my first hint. 

Then, I realized that, with `n` and `m` up to 10^5 each and O(n * m), we are looking to 10^10 memory and time operations (well `m` is 10^6 in the description, but it does not make sense). This is a recipe for TLE/MLE. Therefore, I turned back and started considering other patterns that would give us a O(n log n) solution (O(n) seemed unlikely).

A second hint was that we need to process the input in the original order (flowers has to be adjacent), and return a minimum value to satisfy some criteria. This sounded very similar these problems that can be solved using binary search:
- [Koko eating bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

Finally, I confirmed that function `bouquets = f(days)` is non-decreasing, so we can use a binary search to find the minimum `days`. 

**C++**
```cpp
bool canHarvest(vector<int>& bDay, int harvestDay, int m, int k) {
    int adjacent = 0;
    for (auto bloomDay : bDay) {
        adjacent = bloomDay <= harvestDay ? adjacent + 1 : 0;
        if (adjacent == k) {
            adjacent = 0;
            --m;
        }
    }
    return m <= 0;
}
int minDays(vector<int>& bDay, int m, int k) {
    if ((long long)m * k > bDay.size())
        return -1;
    auto lo = 1, hi = 1000000000;
    while (lo < hi) {
        auto mid = (hi + lo) / 2;
        if (canHarvest(bDay, mid, m, k))
            hi = mid;
        else
            lo = mid + 1;
    }
    return lo;
}
```