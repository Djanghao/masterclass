# C++ 0ms solution

**Author:** Dan0907
**Votes:** 96
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/290126/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/290126/)

---

```
class Solution {
public:
    string removeOuterParentheses(string S) {
        int count = 0;
        std::string str;
        for (char c : S) {
            if (c == '(') {
                if (count++) {
                    str += '(';
                }
            } else {
                if (--count) {
                    str += ')';
                }
            }
        }
        return str;
    }
};
```