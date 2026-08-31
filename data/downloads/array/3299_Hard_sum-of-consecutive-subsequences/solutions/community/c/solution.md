# Track Sum and Count

**Author:** votrubac
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5836621/](https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5836621/)

---

For number `n - 1`, we store the sum of all consecutive subsequences in `sum[n - 1]`, and count of those subsequences in `cnt[n - 1]`.

Now, for number `n`, the sum equals `sum[n - 1] + n * (cnt[n - 1] + 1)`.

> Note that, when we add this sum to the result, we subtract `n` so we won't double-count single-number sequences for `+1` and `-1` scenarios.

After we add the sum to the result, we add it to `sum[n]`, and add `n[n - 1] + 1` to `cnt[n]`.

We apply the logic above to the `+1` and `-1` scenarios, and add all single-digit sequences to the result.

It is the best to use an example. Consider sequence `[1, 2, 3, 4]`:
- 1: `sum[1] = 1`, `cnt[1] = 1`, res = 1 - 1 (exclusing 1)
- 2: `sum[2] = 1 + 2 * 2`, `cnt[2] = 2`, res = 0 + 5 - 2
- 3: `sum[3] = 5 + 3 * 3`, `cnt[3] = 3`, res = 3 + 14 - 3
- 4: `sum[4] = 14 + 4 * 4`, `cnt[3] = 4`, res = 14 + 30 - 4

The final result is `40 + 1 + 2 + 3 + 4 = 50`.

**C++**
```cpp
int getSubSum(vector<int>& nums, int d = 1) {
    int cnt[100002] = {}, sum[100002] = {}, mod = 1000000007, res = 0;
    for (long long n : nums) {
        long long sum_n = sum[n - d] + n * (cnt[n - d] + 1);
        res = (res + sum_n - n) % mod;
        sum[n] = (sum[n] + sum_n) % mod;        
        cnt[n] = (cnt[n] + cnt[n - d] + 1) % mod;
    }    
    return res;
}
int getSum(vector<int>& nums) {
    return (getSubSum(nums, +1) + getSubSum(nums, -1) 
        + accumulate(begin(nums), end(nums), 0LL)) % 1000000007;
}
```