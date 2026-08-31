# Flip Next Two

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353265/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353265/)

---

**C++**
```cpp
int minOperations(vector<int>& nums) {
    int sz = nums.size(), res = 0;
    for (int i = 0; i + 2 < sz; ++i)
        if (nums[i] == 0) {
            ++res;
            nums[i + 1] = !nums[i + 1];
            nums[i + 2] = !nums[i + 2];
        }
    return nums[sz - 1] && nums[sz - 2] ? res : -1;
}
```