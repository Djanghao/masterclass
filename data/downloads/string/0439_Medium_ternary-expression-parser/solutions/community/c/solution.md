# C++ use your input as result buffer

**Author:** sonjh02
**Votes:** 2
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/2215391/](https://leetcode.com/problems/ternary-expression-parser/solutions/2215391/)

---

```
class Solution {
public:
    string parseTernary(string exp) {
        vector<int> st;
        for (int i = exp.size()-1; i; --i) {
            if (exp[i] == ':') {
                st.push_back(i);
            } else if (exp[i] == '?') {
                int j = st.back();
                st.pop_back();
                exp[i-1] = (exp[i-1] == 'T')?exp[i+1]:exp[j+1];
            }
        }
        return exp.substr(0, 1);
    }
};
```