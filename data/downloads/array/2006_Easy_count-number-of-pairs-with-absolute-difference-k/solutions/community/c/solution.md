# Counting Sort

**Author:** votrubac
**Votes:** 148
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1471605/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1471605/)

---

Since `nums[i]` is in the `[1...100]` range, we can count each number using an array.

Now, we can sweep the counts, and accumulate the product of `k`-apart counts.

**C++**
```cpp
int countKDifference(vector<int>& nums, int k) {
    int cnt[101] = {}, res = 0;
    for (auto n : nums)
        ++cnt[n];
    for (int i = k + 1; i < 101; ++i)
        res += cnt[i] * cnt[i - k];
    return res;
}
```