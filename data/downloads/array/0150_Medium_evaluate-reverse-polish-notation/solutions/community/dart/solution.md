# Dart Solution

**Author:** lazizbekfayziyev
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2921391/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2921391/)

---

Please upvote if you found it helpful
# Code
```

class Solution {
  int evalRPN(List<String> tokens) {
    List<int> stack = [];
    for (String i in tokens) {
      try {
        int number = int.parse(i);
        stack = [number, ...stack];
      } catch (e) {
        int first = stack.removeAt(0);
        int second = stack.removeAt(0);
        int newValue = evaluateOperation(i, first, second);
        stack = [newValue, ...stack];
      }
    }
    return stack.first;
  }

  evaluateOperation(String operand, int first, int second) {
    switch (operand) {
      case '+':
        return first + second;
        break;
      case '-':
        return second - first;
        break;
      case '*':
        return first * second;
        break;
      case '/':
        return (second / first).truncate();
        break;
      default:
        return 0;
    }
  }
}

```