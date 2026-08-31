# Counter

**Author:** votrubac
**Votes:** 47
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822539/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822539/)

---

**C++**
```cpp
int mostFrequent(vector<int>& nums, int key) {
    int cnt[1001] = {}, res = 0;
    for (int i = 1; i < nums.size(); ++i)
        if (nums[i - 1] == key && ++cnt[nums[i]] > cnt[res])
            res = nums[i];
    return res;
}
```