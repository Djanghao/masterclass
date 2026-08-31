# simple and easy 2 line of code || O(n) solution

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886174/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886174/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

# Code
```
class Solution {
public:
    long long countSubstrings(string s, char c) 
    {
        long long cnt = count(s.begin(), s.end(), c);

        long long ans = cnt * (cnt+1) / 2;
        return ans;
    }
};
```