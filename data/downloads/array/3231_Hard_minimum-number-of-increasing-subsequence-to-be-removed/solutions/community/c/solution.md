# Longest non-increasing sequence

**Author:** votrubac
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5531808/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5531808/)

---

We find the longest non-increasing sequence the same way as LIS, with two changes:
- We use `upper_bound` instead of `lower_bound` to include duplicates.
- We use the `greater` comparator.

**C++**
```cpp
int minOperations(vector<int>& nums) {
    vector<int> nis;
    for (auto n : nums)
        if (auto it = ranges::upper_bound(nis, n, greater{}); it == nis.end())
            nis.push_back(n);
        else
            *it = n;
    return nis.size();
}
```