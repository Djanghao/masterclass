# One Pass

**Author:** votrubac
**Votes:** 94
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/1844332/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/1844332/)

---

We can use two pointers to swipe the array once (`i`) and collect all k-distant indices (`j`).

**C++**
```cpp
vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
    vector<int> res;
    for (int i = 0, j = 0; i < nums.size(); ++i)
        if (nums[i] == key)
            for (j = max(j, i - k); j <= i + k && j < nums.size(); ++j)
                res.push_back(j);
    return res;
}
```