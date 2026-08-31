# C++ binary + linear search

**Author:** jianchao-li
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/48883/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/48883/)

---

> Would allow duplicates affect the run-time complexity? How and why?

Yes, suppose an array `[0,1,1,1,1]` is rotated to `[1,0,1,1,1]` and `[1,1,1,0,1]`. In these two cases, `nums[l] == nums[m] == nums[r]`, but in the first case, the minimum is in the left while in the right in the second case. When all `nums[l]`, `nums[m]` and `nums[r]` are equal, we will have no idea which half to move on. In this case, a linear search from `l` to `r` is necessary and the time complexity becomes `O(n)`.

```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int l = 0, r = nums.size() - 1;
        while (l < r && nums[l] > nums[r]) {
            int m = l + (r - l) / 2;
            if (nums[m] > nums[m + 1]) {
                return nums[m + 1];
            }
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return findMin(nums, l, r);
    }
private:
    int findMin(vector<int>& nums, int l, int r) {
        int mini = nums[l++];
        while (l <= r) {
            mini = min(mini, nums[l++]);
        }
        return mini;
    }
};
```

The above codes can be shortened as shown in [this post](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/discuss/48808/My-pretty-simple-code-to-solve-it).

```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int l = 0, r = nums.size() - 1;
        while (l < r) {
            int m = l + (r - l) / 2;
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else if (nums[m] < nums[r]) {
                r = m;
            } else {
                r--;
            }
        }
        return nums[l];
    }
};
```