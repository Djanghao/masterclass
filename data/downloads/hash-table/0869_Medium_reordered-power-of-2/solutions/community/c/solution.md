# C++ Super Simple and Short Solution, 0 ms, Faster than 100%

**Author:** YehudisK
**Votes:** 95
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/1120153/](https://leetcode.com/problems/reordered-power-of-2/solutions/1120153/)

---

```
class Solution {
public:
    bool reorderedPowerOf2(int N) {
        string N_str = sorted_num(N);
        for (int i = 0; i < 32; i++)
            if (N_str == sorted_num(1 << i)) return true;
        return false;
    }
    
    string sorted_num(int n) {
        string res = to_string(n);
        sort(res.begin(), res.end());
        return res;
    }
};
```
**Like it? please upvote...**