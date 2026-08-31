# C++ Simple and Easy Solution,  faster than 99%

**Author:** YehudisK
**Votes:** 31
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1034231/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1034231/)

---

```
class Solution {
public:
    bool kLengthApart(vector<int>& nums, int k) {
        int prev_one = -k-1;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i]) {
                if (i - prev_one <= k) return false;
                prev_one = i;
            }
        }
        return true;
    }
};
```
**Like it? please upvote...**