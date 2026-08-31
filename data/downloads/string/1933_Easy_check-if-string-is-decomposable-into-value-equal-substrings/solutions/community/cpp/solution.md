# [C++] Clean & Concise sliding window solution

**Author:** japadua
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/2961588/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/2961588/)

---

```
class Solution {
public:
    bool isDecomposable(string s) {
        int i = 0, n = s.size();
        int isPairFound = false;
        while(i < n) {
            if(i < n-2 && s[i] == s[i+1] && s[i+1] == s[i+2]) i += 3;
            else if(s[i] == s[i+1] && !isPairFound) {
                isPairFound = true; i+= 2;
            }
            else return false;
        }
        return isPairFound;
    }
};
```