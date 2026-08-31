# Longest Repeating Number

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4063415/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4063415/)

---

**C++**
We can remove all numbers unless there is a repeating number that appears more than `n / 2` times.

> And, of course, the last number in the odd-sized array cannot be removed.

```cpp
int minLengthAfterRemovals(vector<int>& nums) {
    int cnt = 1, max_cnt = 1, n = nums.size();
    for (int i = 1; i < n; ++i) {
        cnt = 1 + (nums[i - 1] == nums[i] ? cnt : 0);
        max_cnt = max(max_cnt, cnt);
    }
    return max(n % 2 ? 1 : 0, max_cnt - (n - max_cnt));
}
```