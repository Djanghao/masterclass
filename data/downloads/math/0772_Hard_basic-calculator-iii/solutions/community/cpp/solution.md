# Stack CPP

**Author:** LIMENGYANG
**Votes:** 3
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/3772240/](https://leetcode.com/problems/basic-calculator-iii/solutions/3772240/)

---

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
class Solution {
public:
    int sum(stack<int> st) {
        int res = 0;
        while (!st.empty()) {
            res += st.top(); st.pop();
        }
        return res;
    }

    int calculate(string s, int& i) {
        stack<int> st;
        char sign = '+';
        int num = 0;
        
        while (i < s.size()) {
            char c = s[i];

            // Update number & c
            if (isdigit(c)) {
                num = num * 10 + (c - '0');
            }
            if (c == '(') {
                i++;
                num = calculate(s, i);
                c = s[i];
            }

            // Calculate & update stack
            if ((!isdigit(c) && c != ' ') || i == s.size()-1) {
                if (sign == '+') {
                    st.push(num);
                } else if (sign == '-') {
                    st.push(-num);
                } else if (sign == '*') {
                    int prevNum = st.top(); st.pop();
                    st.push(prevNum*num);
                } else if (sign == '/') {
                    int prevNum = st.top(); st.pop();
                    st.push(prevNum/num);
                }

                num = 0;
                sign = c;
            }

            // Handle recursion
            if (c == ')') {
                i++;
                break;
            }

            i++;
        }

        return sum(st);
    }

    int calculate(string s) {
        int i = 0;
        return calculate(s, i);
    }
};
```