# C++ || easy solution || 0 ms

**Author:** darshil_1804
**Votes:** 107
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1747526/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1747526/)

---

```
class Solution{
public:
    int minimumSum(int num){
        string s = to_string(num);
        sort(s.begin(), s.end());
        int res = (s[0] - '0' + s[1] - '0') * 10 + s[2] - '0' + s[3] - '0';
        return res;
    }
};
```
Do **Upvote** if you like the solution :)