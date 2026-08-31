# C++ Simple and Clean 4-Line Solution, 0ms Faster then 100%

**Author:** YehudisK
**Votes:** 10
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/1375131/](https://leetcode.com/problems/positions-of-large-groups/solutions/1375131/)

---

```
class Solution {
public:
    vector<vector<int>> largeGroupPositions(string s) {
        vector<vector<int>> res;
        int left = 0, right = 0;
        while (left < s.size()) {
            while (s[left] == s[right]) right++;
            if (right - left >= 3) res.push_back({left, right-1});
            left = right;
        }
        return res;
    }
};
```
**Like it? please upvote!**