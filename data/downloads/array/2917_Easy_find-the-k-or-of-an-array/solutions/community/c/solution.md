# Count Bits

**Author:** votrubac
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220895/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220895/)

---

**C++**
```cpp
int findKOr(vector<int>& nums, int k) {
    int cnt[31] = {}, res = 0;
    for (auto n : nums)
        for (int i = 0; i < 31; ++i)
            if (n & (1 << i) && ++cnt[i] == k)
                res += (1 << i);
    return res;
}
```