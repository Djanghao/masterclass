# Masked House Robber

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355246/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355246/)

---

I did not recognize the hourse robber at first.

When we see a positive number, we just take it (starting a new subarray).

For a streak of negative numbers, we can flip some of them to positive. 

However, we cannot flip two numbers if they are next to each other.
- The house robber algorithm can find the maximum value we can flip (steal) with this restriction.

> Note that we need to add the **double** of the flipped value to the sum of all numbers.
> Also note that we cannot flip the very first negative number.

**C++**
```cpp
long long maximumTotalCost(vector<int>& nums) {
    long long cur = 0, prev = 0;
    for (int i = 1; i < nums.size(); ++i)
        cur = exchange(prev, max(cur, prev)) - nums[i];
    return accumulate(begin(nums), end(nums), 0LL) + 2LL * max(cur, prev);
}
```

#### Original Version
The equivalent original code, which follows the description above more closelly.

**C++**
```cpp
long long maximumTotalCost(vector<int>& nums) {
    long long res = nums[0], cur = 0, prev = 0;
    for (int i = 1; i < nums.size(); ++i) {
        res += nums[i];
        if (nums[i] >= 0) {
            res += 2LL * max(cur, prev);
            cur = prev = 0;
        }
        else
            cur = exchange(prev, max(cur, prev)) - nums[i];
    }
    return res + 2LL * max(cur, prev);
}
```