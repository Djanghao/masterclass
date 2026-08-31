# Sliding Window

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/708110/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/708110/)

---

**C++**
```cpp
int longestSubarray(vector<int>& nums) {
    int max_sz = 0;
    for (int i = 0, j = 0, skip = 0; i < nums.size(); ++i) {
        skip += nums[i] == 0;
        if (skip > 1)
            skip -= nums[j++] == 0;
        max_sz = max(max_sz, i - j);
    }
    return max_sz;
}
```