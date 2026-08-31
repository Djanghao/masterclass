# C++ Simple and Short Intuitive Solution, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 66
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1418189/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1418189/)

---

**Idea:**
We initialize `res` with word.size() because typing each letter takes 1 second. `point` starts at 'a'.
For each word, we check the minimum between going clockwise or counterclockwise.
```
class Solution {
public:
    int minTimeToType(string word) {
        int res = word.size(), point = 'a';
        for (auto ch : word) {
            res += min(abs(ch - point), 26 - abs(point - ch));
            point = ch;
        }
        return res;
    }
};
```
**Like it? please upvote!**