# JAVA | 2 solutions | with/without Stack

**Author:** sourin_bruh
**Votes:** 34
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/2837422/](https://leetcode.com/problems/basic-calculator-ii/solutions/2837422/)

---

### **Please Upvote** :D
##### 1. Using Stack:
```
class Solution {
    public int calculate(String s) {
        Stack<Integer> st = new Stack<>();

        int num = 0;
        char operator = '+';

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (Character.isDigit(c)) {
                num = num * 10 + (c - '0');
            }

            if (isOperator(c) || i == s.length() - 1) {
                if (operator == '+') st.push(num);
                else if (operator == '-') st.push(-num);
                else if (operator == '*') st.push(st.pop() * num);
                else if (operator == '/') st.push(st.pop() / num);

                num = 0;
                operator = c;
            }
        }

        int ans = 0;

        while (!st.isEmpty()) {
            ans += st.pop();
        }

        return ans;
    }

    private boolean isOperator(char c) {
        return c == '+' || c == '-' || c == '*' || c == '/';
    }
}

// TC: O(n), SC: O(n)
```
##### 2. Without using stack:
```
class Solution {
    public int calculate(String s) {
        int num = 0;
        char operator = '+';
        int last = 0, sum = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (Character.isDigit(c)) {
                num = num * 10 + (c - '0');
            }

            if (isOperator(c) || i == s.length() - 1) {
                if (operator == '+') {
                    sum += last;
                    last = num;
                }
                else if (operator == '-') {
                    sum += last;
                    last = -num;
                }
                else if (operator == '*') last *= num;
                else if (operator == '/') last /= num;

                num = 0;
                operator = c;
            }
        }

        return sum += last;
    }

    private boolean isOperator(char c) {
        return c == '+' || c == '-' || c == '*' || c == '/';
    }
}

// TC: O(n), SC: O(1)
```