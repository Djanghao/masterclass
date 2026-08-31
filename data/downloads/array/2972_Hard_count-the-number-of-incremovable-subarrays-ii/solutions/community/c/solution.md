# Two Pointers

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4448152/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4448152/)

---

Frustrating edge cases. Otherwise a typical two-pointer solution.

For each `i` where `[0, i - 1]` is strictly increasing, we find the smallest `j` so that:
- `[j + 1, sz)` is strictly increasing.
	- This can be done by going right-to-left once in the beginning.
- `nums[i - 1] < nums[j + 1]`.
	- `j` goes left-to-right until this condition is satisfied.

The subarray `[i, j]` is incremovable, and so do `sz - j` subarrays:
- We add `1 + sz - j` to the result.

**C++**
```cpp
long long incremovableSubarrayCount(vector<int>& nums) {
    int sz = nums.size(), j = sz - 1;
    while (j > 1 && nums[j - 1] < nums[j])
        --j;
    if (j == 0)
        return sz * (sz + 1) / 2;
    long long res = 1 + sz - j;
    for (int i = 1; i < sz; ++i) {
        j = max(i + 1, j);
        while (j < sz && nums[i - 1] >= nums[j])
            ++j;
        res += 1 + sz - j;
        if (nums[i - 1] >= nums[i])
            break;
    }
    return res;
} 
```