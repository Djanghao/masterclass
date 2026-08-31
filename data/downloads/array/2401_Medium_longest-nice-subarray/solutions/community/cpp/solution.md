# 🔥 [LeetCode The Hard Way]🔥 Sliding Window | Explained Line By Line

**Author:** tr1nity
**Votes:** 15
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2543577/](https://leetcode.com/problems/longest-nice-subarray/solutions/2543577/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

---

**C++**

```cpp
class Solution {
public:
    int longestNiceSubarray(vector<int>& nums) {
        // the observation is that each number has unique bits in the nice array
        // finding a subarray of something -> a hint to use sliding window
        int l = 0, n = nums.size(), x = 0, ans = 0;
        // iterate right pointer
        for (int r = 0; r < n; r++) {
            // x is the current AND value of current window at this point
            // now we want to include nums[r] in the window
            // however, if we include it, the current window may become not nice (i.e. x_new != 0)
            // therefore, in this case, we need to remove some bits using XOR, 
            // i.e shrinking the window from the left
            while ((x & nums[r]) != 0) x ^= nums[l++];
            // here we are good to include nums[r], we use OR to set the bits
            x |= nums[r];
            // record the max length
            ans = max(ans, r - l + 1);
        }
        return ans;
    }
};
```