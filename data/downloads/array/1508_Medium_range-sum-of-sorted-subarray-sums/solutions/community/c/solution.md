# nth-element >> O(n2) vs. O(n log m)

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/731126/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/731126/)

---

#### Approach 1: O(n2)
A quadratic solution is accepted because `n` is limited to `1000`. See approach 2 for linearithmic solution.

When the number of elements to pull is known in advance, partial sort is the way to go.  Moreover, we just need the sum from `left`-biggest to `right`-biggest element, the order of elements between left and right does not matter.

Therefore, we can use `nth_element`. Note that, in this problem, we are doing the `nth_element` twice to get the correct range.

While sorting and heap solution have O(n ^ 2 log n * 2) runtime, this one has O(n * 2) in the average case.

**C++**
```cpp
int rangeSum(vector<int>& nums, int n, int left, int right) {
    vector<int> subs;
    for (auto i = 0; i < nums.size(); ++i)
        for (auto j = i, sum = 0; j < nums.size(); ++j)
            subs.push_back(sum += nums[j]);
    nth_element(begin(subs), begin(subs) + left - 1, end(subs));
    nth_element(begin(subs) + left, begin(subs) + right, end(subs));
    return accumulate(begin(subs) + left - 1, begin(subs) + right, 0, [](int s, int i) 
        { return (s + i) % 1000000007; });
}
```

#### Approach 2: O(n log n)
This approach is based on the prefix sum + binary search pattern. There are many problems like that, for example: [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-th-smallest-pair-distance/discuss/829187/C%2B%2B-Binary-Search). I would say that this problem is pretty hard, so I would practice easier problems first.

Instead of generating `n * (n + 1) / 2` sums and sorting them, we answer this question: what is the largest sum within the first `k` sums? If we pick a number `m`, we can answer how many sums are not greater than `m` in a linear time. We can binary-search for `m` so that we have `k` sums not greater than `m`. The complexity of this is O(n log m), where `m` is the maximum sum we can have.

Now, we can aggregate `k` sums that are not greater than `k`-th sum. We can do it in a linear time using a prefix sum array. Note that we can have multiple sums that are equal to `k`-th sum, so we need to remove those from the result (`(cnt - k) * k_sum`, where `cnt` is count of all sums `<= k_sum`).

Finally, we subtract the first `left - 1` aggregated sums from the first `right` aggregated sum to get our range sum.

**C++**
```cpp
int rangeSum(vector<int>& nums, int n, int left, int right) {
    partial_sum(begin(nums), end(nums), begin(nums));  
    return (aggregate_k_sums(nums, right) - aggregate_k_sums(nums, left - 1)) % 1000000007;
}
long long aggregate_k_sums(vector<int>& nums, int k) {
    int max_sum = kth_sum(nums, k);
    long long sum = 0, sum_ij = 0, cnt = 0;
    for (int i = 0, j = 0; i < nums.size(); ++i) {
        int nums_i = i > 0 ? nums[i - 1] : 0;
        sum_ij -= nums_i;
        for (; j < nums.size() && nums[j] - nums_i <= max_sum; ++j)
            sum_ij += nums[j];
        sum += sum_ij - nums_i * (j - i);
        cnt += (j - i);
    }
    return sum - (cnt - k) * max_sum;
}
int kth_sum(vector<int>& nums, int k) {
    int l = 0, r = 100 * 1000;
    while (l < r) {
        int m = (l + r) / 2, cnt = 0;
        for (int i = 0, j = 0; i < nums.size(); ++i) {
            j = upper_bound(begin(nums) + j, end(nums), m + (i > 0 ? nums[i - 1] : 0)) - begin(nums);
            cnt += (j - i);
        }
        if (cnt < k)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```