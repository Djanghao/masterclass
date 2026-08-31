# C++ Simple 3-Line Solution

**Author:** YehudisK
**Votes:** 8
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1550667/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1550667/)

---

```
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        int i = 0;
        while (i < nums.size() && i % 10 != nums[i]) i++;
        return i >= nums.size() ? -1 : i;
    }
};
```
**Like it? please upvote!**