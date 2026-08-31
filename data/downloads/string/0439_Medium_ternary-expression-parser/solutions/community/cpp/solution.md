# C++ [modern] Clean stack solution with detailed explanation

**Author:** ianpan870102
**Votes:** 3
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/2840423/](https://leetcode.com/problems/ternary-expression-parser/solutions/2840423/)

---

# Approach
We read the expression in reverse (2 characters at a time), pushing elements onto a stack when appropriate. When we encountered a condition clause (found a `'T'`), we pop the top two elements and push back one of them. We do so until we've scanned through the whole expression in reverse. The stack should be left with a single value, which is our final answer.

Note that in this approach, we will be solving the inner-most expressions first, and leaving the outer expressions for later (because their `else` clauses are at the bottom of the stack). 

For instance, in the second description example:

```
Input: expression = "T?T?F:5:3"
Output: "F"
Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:
"(T ? (T ? F : 5) : 3)" --> "(T ? F : 3)" --> "F"
"(T ? (T ? F : 5) : 3)" --> "(T ? F : 5)" --> "F"
```

, we'd be calculating `"F"` via `"(T ? (T ? F : 5) : 3)" --> "(T ? F : 3)" --> "F"`, and not `"(T ? (T ? F : 5) : 3)" --> "(T ? F : 5)" --> "F"`.

<!-- Describe your approach to solving the problem. -->


# Code
```
class Solution {
 public:
  auto parseTernary(const string &expression) -> string {
    stack<char> stack;

    const int N = expression.length();
    for (int i = N - 1; i >= 0; i -= 2) {
      if (i > N - 3 || expression[i + 1] != '?') {
        stack.push(expression[i]);
        continue;
      }

      auto char_true = stack.top();
      stack.pop();
      auto char_false = stack.top();
      stack.pop();

      stack.push(expression[i] == 'T' ? char_true : char_false);
    }

    return string(1, stack.top());
  }
};

```