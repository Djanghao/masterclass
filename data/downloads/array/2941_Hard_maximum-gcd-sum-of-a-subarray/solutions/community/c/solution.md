# Sparse Table vs. GCD List

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318863/](https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318863/)

---

How many different GCDs can we have for all subarrays starting at `nums[l]`?

The answer is `log(nums[l])` because GCD can only decrease by at least a half, till it reaches `1`.

## GCD List
Idea by [kaathewise](https://leetcode.com/kaathewise/).

Based on the observation above, we maintain a list of unique GCDs (and indices), and it won't exceed `log(m)` elements.

If GCD is the same for of a range of elements, we should always take the entire range.

So, we consider all subarrays that ends at `r`, and use prefix sum along GCD list to compute GCD-sum.

That GCD list starts with `nums[r]`, and then GCD value is going down.

For position `r + 1`, we add `nums[r + 1]` to the GCD list, and re-compute existing GCDs.

> It is importat to remove duplicate GCDs to keep the list size O(log m).

**C++**
```cpp
long long maxGcdSum(vector<int>& nums, int k) {
    vector<long long> ps{0};
    list<pair<int, int>> gcds;
    long long res = 0;
    for (int r = 0; r < nums.size(); ++r) {
        ps.push_back(ps.back() + nums[r]);
        gcds.push_front({r, nums[r]});
        for (auto it = begin(gcds); it != end(gcds); ++it) {
            if (it != begin(gcds)) {
                it->second = gcd(it->second, prev(it)->second);
                if (prev(it)->second == it->second)
                    gcds.erase(prev(it));
            }
            if (r - it->first + 1 >= k)
                res = max(res, (ps.back() - ps[it->first]) * it->second);
        }
    }
    return res;
}
```
## Sparse Table

In the solution below, we use a sparse table `st` to find GCD for any interval `[l, r]`. 

The sparse table can asnwer RMQ (which also works for GCD) in O(1).

So, for each `l`, we find up to `log(nums[l])` points where GCD drops. We use binary-search to find those points quickly.

Complexity analysis:
- Time: O(n log m log n), where `m` is the largest number in the array.
	- For each of the `n` positions, we binary-search `log m` times among `n` elements.
- Memory: O(n log n) for the sparse table.

**C++**
```cpp
long long maxGcdSum(vector<int>& nums, int k) {
    long long sz = nums.size(), res = 0;
    vector<vector<int>> st{nums};
    for (int i = 1; (1 << i) <= sz; ++i) {
        st.push_back({});
        for (int j = 0; j + (1 << i) <= sz; ++j)
            st[i].push_back(gcd(st[i - 1][j], st[i - 1][j + (1 << (i - 1))]));
    }
    auto query = [&](unsigned long l, unsigned long r){
        int i = bit_width(r - l + 1) - 1;
        return gcd(st[i][l], st[i][r - (1 << i) + 1]);    
    };       
    vector<long long> psum{0};
    inclusive_scan(begin(nums), end(nums), back_inserter(psum), plus(), 0LL);    
    for (int l = 0; l + k - 1 < sz; ++l) {
        for (int r = l + k - 1; r < sz; ++r) {
            int cur = query(l, r), rr = sz - 1;
            while (r < rr) {
                int m = (r + rr + 1) / 2;
                if (query(l, m) < cur)
                    rr = m - 1;
                else
                    r = m;
            }
            res = max(res, (psum[r + 1] - psum[l]) * cur);
        }
    }
    return res;
}
```