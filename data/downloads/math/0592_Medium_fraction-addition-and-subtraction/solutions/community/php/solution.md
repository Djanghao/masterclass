# 🔥100%% Explanations No One Will Give You🎓🧠Very Detailed Approach🎯🔥

**Author:** ShivanshGoel1611
**Votes:** 3
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677723/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5677723/)

---

# ***# Code***
```cpp []
class Solution {
public:
    string fractionAddition(string expression) {
        int num = 0;
        int den = 1;
        int i = 0;
        int n = expression.size();
        while (i < n) {
            int currentnum = 0;
            int currentden = 0;
            bool negative = (expression[i] == '-');
            while (i < n && (expression[i] == '-' || expression[i] == '+')) {
                i++;
            }
            while (i < n && isdigit(expression[i])) {
                int a = expression[i] - '0';
                currentnum = (currentnum * 10) + a;
                i++;
            }
            i++;
            while (i < n && isdigit(expression[i])) {
                int a = expression[i] - '0';
                currentden = (currentden * 10) + a;
                i++;
            }
            if (negative == true) {
                currentnum *= -1;
            }
            num = num * currentden + den * currentnum;
            den = den * currentden;
        }
        int Gcd = abs(__gcd(num, den));
        num /= Gcd;
        den /= Gcd;
        return to_string(num) + "/" + to_string(den);
    }
};
```