# C++ | FSA | Parser | O(n)

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/2698962/](https://leetcode.com/problems/parse-lisp-expression/solutions/2698962/)

---

Runtime: 10 ms, faster than 72.06% of C++ online submissions for Parse Lisp Expression.
Memory Usage: 13.2 MB, less than 60.29% of C++ online submissions for Parse Lisp Expression.

```
enum State {
    COMMAND,
    LHS,
    RHS
};

class Solution {
    bool isAlpha(string &buffer) {
        return buffer[0] >= 'a';
    }

    int getValue(string &buffer, unordered_map<string, int> &variables) {
        if (isAlpha(buffer)) return variables[buffer];
        return stoi(buffer);
    }

    // {return, scope_end}
    pair<int, int> evaluate(string &expr, int start_index, unordered_map<string, int> variables) {
        int open_parenthesis = 1, numeric_buffer, cursor = start_index;
        string cmd_buffer, lhs_buffer, buffer;
        State current_state = COMMAND;

        while (open_parenthesis) {
            switch (current_state) {
                case COMMAND: {
                    if (expr[cursor] != ' ') cmd_buffer += expr[cursor++];
                    else current_state = LHS;
                    break;
                }
                case LHS: {
                    if (expr[cursor] == ' ' && lhs_buffer.empty()) ++cursor;
                    else if (expr[cursor] == '(' || expr[cursor] == ' ' || expr[cursor] == ')') {
                        if (expr[cursor] == '(') {
                            auto result = evaluate(expr, cursor + 1, variables);
                            cursor = result.second;
                            numeric_buffer = result.first;
                            lhs_buffer = to_string(numeric_buffer);
                        } else
                            numeric_buffer = getValue(lhs_buffer, variables);
                        current_state = RHS;
                        if (expr[cursor] == ')') --open_parenthesis;
                        ++cursor;
                    } else lhs_buffer += expr[cursor++];
                    break;
                }
                case RHS: {
                    if (expr[cursor] == ' ' && buffer.empty()) ++cursor;
                    else if (expr[cursor] == '(' || expr[cursor] == ' ' || expr[cursor] == ')') {
                        if (expr[cursor] == '(') {
                            auto result = evaluate(expr, cursor + 1, variables);
                            cursor = result.second;
                            numeric_buffer = result.first;
                        } else
                            numeric_buffer = getValue(buffer, variables);

                        if (cmd_buffer == "let" && isAlpha(lhs_buffer))
                            variables[lhs_buffer] = numeric_buffer;
                        else if (cmd_buffer == "mult")
                            numeric_buffer *= getValue(lhs_buffer, variables);
                        else
                            numeric_buffer += getValue(lhs_buffer, variables);
                        current_state = LHS;
                        lhs_buffer.clear();
                        buffer.clear();
                        if (expr[cursor] == ')') --open_parenthesis;
                        ++cursor;
                    } else buffer += expr[cursor++];
                    break;
                }
            }
        }

        return {numeric_buffer, cursor};
    }

public:
    int evaluate(string expression) {
        unordered_map<string, int> variables;
        return evaluate(expression, 1, variables).first;
    }
};
```