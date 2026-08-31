# Dart

**Author:** ShahbozTuronov
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/3530684/](https://leetcode.com/problems/expression-add-operators/solutions/3530684/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<String> addOperators(String num, int target) {
    List<String> result = [];
    backtrack(num, target, "", 0, 0, 0, result);
    return result;
  }

  void backtrack(
    String num,
    int target,
    String expression,
    int index,
    int currentOperand,
    int currentResult,
    List<String> result,
  ) {
    if (index == num.length) {
     if (currentResult == target) {
        result.add(expression);
      }
     return;
   }

    for (int i = index; i < num.length; i++) {
      if (i != index && num[index] == '0') {
        break;
      }

      int operand = int.parse(num.substring(index, i + 1));
      if (index == 0) {
        backtrack(num, target, expression + operand.toString(), i + 1, operand, operand, result);
      } else {
      
        backtrack(num, target, expression + '+' + operand.toString(), i + 1, operand, currentResult + operand, result);
        backtrack(num, target, expression + '-' + operand.toString(), i + 1, -operand, currentResult - operand, result);
        backtrack(num, target, expression + '*' + operand.toString(), i + 1, currentOperand * operand, currentResult - currentOperand + (currentOperand * operand), result);
     }
    }
  }

}
```