# O(n d(k) log(k))

**Author:** votrubac
**Votes:** 63
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2808843/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2808843/)

---

Quadratic is simple (see the second solution below), so let's see if we can do better.

For an element `i`, we count unique `lcm` values for all subarrays that ends at `i`.

The number of unique `lcm` values will not exceed the number of divisors of `k` (which is d(k)). For each divisor, we compute LCM (log k).

## O(n d(k) log(k))
**C++**
```cpp
int subarrayLCM(vector<int>& nums, int k) {
    int res = 0;
    unordered_map<int, int> m;
    for (int n : nums) {
        unordered_map<int, int> m1;
        if (k % n == 0) {
            ++m[n];    
            for (auto &[d, cnt] : m)
                m1[lcm(d, n)] += cnt;
            res += m1[k];
        }
        swap(m, m1);
    }
    return res;
}
```

## O(n ^ 2)
**C++**
```cpp
int subarrayLCM(vector<int>& nums, int k) {
    int res = 0;
    for (int i = 0; i < nums.size(); ++i)
        for (int j = i, cur = 1; j < nums.size() && k % nums[j] == 0; ++j) {
            cur = lcm(cur, nums[j]);
            res += cur == k;
        }
    return res;
}
```