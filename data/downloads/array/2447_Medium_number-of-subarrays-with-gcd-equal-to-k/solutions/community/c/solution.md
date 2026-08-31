# Brute-Force vs. Count GCDs

**Author:** votrubac
**Votes:** 72
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734442/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734442/)

---

It feels like this problem can be solved using a sliding window or something, but it's not the case.

Looking at the constraints helps. As a follow-up, there is the Count GCDs solution below, which exploits the fact that the number of distinct GCDs is limited by log(m) - where m is the maximum value in `nums`. 

#### Brute-Force O(n ^ 2)
**C++**
```cpp
int subarrayGCD(vector<int>& nums, int k) {
    int res = 0;
    for (int i = 0; i < nums.size(); ++i)
        for (int j = i; j < nums.size() && nums[j] % k == 0; ++j) {
            nums[i] = gcd(nums[i], nums[j]);
            res += nums[i] == k;
        }
    return res;
}
```
#### Count GCDs O(n log m)
For an element `num[i]`, we count GCDs produced by subarrays:
- `nums[i - 1]`
- `nums[i - 2], nums[i - 1]`
- `nums[i - 3], nums[i - 2], nums[i - 1]`
- ...and so on.

The number of distinct GCDs would not exceed log(m), where m is the maximum value in the array.

> Note that those disticnt GCDs should share a factor `k`, and come from subarrays ending at some position.
> To produce a different GCD, `gcd(n[i], gcd(n[i - 2], n[i - 1])` should be bigger than `gcd(n[i - 2], n[i - 1])`.
> Therefore `n[i - 1] < n[i]`, and `n[i - 1]  * f == n[i]`.
> The best we can do is something like `[2, 4, 8, 16, 32, ...]`, and the number of unique GCDs will therefore be log m.

**C++**
```cpp
int subarrayGCD(vector<int>& nums, int k) {
    int res = 0;
    unordered_map<int, int> gcds;
    for (int i = 0; i < nums.size(); ++i) {
        unordered_map<int, int> gcds1;
        if (nums[i] % k == 0) {
            ++gcds[nums[i]];
            for (auto [prev_gcd, cnt] : gcds)
                gcds1[gcd(prev_gcd, nums[i])] += cnt;
        }
        res += gcds1[k];
        swap(gcds, gcds1);
    }
    return res;
}
```