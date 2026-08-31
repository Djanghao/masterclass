# Fancy C++ lambda expression solution

**Author:** hercule24
**Votes:** 535
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/47514/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/47514/)

---

    class Solution {
    public:
        int evalRPN(vector<string>& tokens) {
            unordered_map<string, function<int (int, int) > > map = {
                { "+" , [] (int a, int b) { return a + b; } },
                { "-" , [] (int a, int b) { return a - b; } },
                { "*" , [] (int a, int b) { return a * b; } },
                { "/" , [] (int a, int b) { return a / b; } }
            };
            std::stack<int> stack;
            for (string& s : tokens) {
                if (!map.count(s)) {
                    stack.push(stoi(s));
                } else {
                    int op1 = stack.top();
                    stack.pop();
                    int op2 = stack.top();
                    stack.pop();
                    stack.push(map[s](op2, op1));
                }
            }
            return stack.top();
        }
    };