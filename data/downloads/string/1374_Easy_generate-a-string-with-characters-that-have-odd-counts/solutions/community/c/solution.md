# C++ simplest shortest solution - 0 ms, faster than 100%

**Author:** YehudisK
**Votes:** 7
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/782613/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/782613/)

---

```
class Solution {
public:
    string generateTheString(int n) {
        string res = "";
        if (n%2 == 0)
        {
            res += 'b';
            n-=1;
        }
        for (int i=0;i < n;i++)
            res += 'a';
        return res;
    }
};
```