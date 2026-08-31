# Dart solution

**Author:** brntsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/3023285/](https://leetcode.com/problems/longest-valid-parentheses/solutions/3023285/)

---


# Code
```
import 'dart:math';

class Solution {
  int longestValidParentheses(String s) {
    List<int> stack = [];
    stack.add(-1);
    var result = 0;
    for (var i = 0; s.length > i; i++) {
      if (s[i] == '(') {
        stack.add(i);
      } else {
        stack.removeLast();
        if (stack.isEmpty) {
          stack.add(i); 
        } else {
          result = max(result, i - stack.last);
        }
      }
    }
    return result;
  }
}
```