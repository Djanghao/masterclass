# C++ Simple and Clean 4-Line Explained Solution

**Author:** YehudisK
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432847/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432847/)

---

**Idea:**
Sort the array.
Then, we use a window of size k and calculate the difference between the first and last element in the window.
`res` will be the minimum of these values.
**Time Complexity:** O(nlogn)
**Space Complexity:** O(1)
```
class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int res = nums[k-1] - nums[0];
        for (int i = k; i < nums.size(); i++) res = min(res, nums[i] - nums[i-k+1]);
        return res;
    }
};
```
**Like it? please upvote!**