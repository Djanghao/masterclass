# Prefix Sum, Map and Kadane O(n)

**Author:** votrubac
**Votes:** 42
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4671688/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4671688/)

---

We store numbers and one of their index in a map.

> We pick the "best" index using a Kadane algorithm (more on that below).

For `nums[i]`, we look for `nums[i] + k` and `nums[i] - k` in the map.

Knowing two indexes, we compute the sum of the subarray using the prefix sum array.

Why do we need to store only one index in the map? We apply the approach from the Kadane algorithm:
- If we have a previous `m[nums[i]]` and current index `i`, and 
- the sum of subarray `[m[nums[i], i)` is not positive, 
	- we replace `m[nums[i]]` with `i`.
- otherwise, we keep the existing index `m[nums[i]]`.
    
**C++**
```cpp
long long maximumSubarraySum(vector<int>& nums, int k) {
    long long res = LLONG_MIN;
    vector<long long> psum{0};
    unordered_map<int, int> m;
    for (int i = 0; i < nums.size(); ++i) {
        psum.push_back(psum.back() + nums[i]); // Prefix Sum
        if (auto it = m.find(nums[i] - k); it != end(m))
            res = max(res, psum[i + 1] - psum[it->second]); // n - k
        if (auto it = m.find(nums[i] + k); it != end(m))
            res = max(res, psum[i + 1] - psum[it->second]); // n + k
        if (auto it = m.find(nums[i]); it == end(m) || psum[i] - psum[it->second] <= 0)
            m[nums[i]] = i; // Kadane
    }
    return res == LLONG_MIN ? 0 : res;
}
```