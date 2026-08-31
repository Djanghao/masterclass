# C++ Easy Peasy Simple Solution, 4-Short-Lines

**Author:** YehudisK
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1393474/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1393474/)

---

Append each word to `res` and check if it equals to s.
```
class Solution {
public:
    bool isPrefixString(string s, vector<string>& words) {
        string res = "";
        for (auto w : words) {
            res += w;
            if (res == s) return true;
        }
        return false;
    }
};
```
**Like it? please upvote!**