# Two Pointers

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2520199/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2520199/)

---

**C++**
```cpp
long long countSubarrays(vector<int>& nums) {
    long long res = 0;
    for (int i = 1, j = 0; i < nums.size(); ++i) {
        if (nums[i - 1] >= nums[i])
            j = i;
        res += i - j;
    }
    return res + nums.size();
}
```