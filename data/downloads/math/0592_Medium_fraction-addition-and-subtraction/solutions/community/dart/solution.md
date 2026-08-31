# Fastest in Dart using RegEx

**Author:** vivekmathew006
**Votes:** 0
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5679136/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5679136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Adds + to the begining if no sign is present to avoid range error.
2. Iterate throught the string to find /.
3. If found, look for the previous two characters to check if it is a valid number. Add the valid number to a list including their sign.
4. Look the next two characters to check if it's avalid number and add it to another list if valid.
5. Iterate through the list to find the total sum
6. Find the Greatest Common Divisor(GCD).
7. Return the total sum divided by gcd as a string.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(2n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String fractionAddition(String expression) {
    RegExp exp = RegExp(r'\\d');
    List<int> numerators = [], denominators = [];
    if (expression[0] != '-' && expression[0] != '+') {
      expression = '+$expression';
    }
    for (int i = 1; i < expression.length - 1; i++) {
        if (expression[i] == '/') {
          if (i > 2 && exp.hasMatch(expression[i - 2])) {
            numerators.add(int.parse(expression.substring(i - 3, i)));
          } else {
            numerators.add(int.parse(expression.substring(i - 2, i)));
          }
          if (i < expression.length - 2 && exp.hasMatch(expression[i + 2])) {
            denominators.add(int.parse(expression.substring(i + 1, i + 3)));
          } else {
            denominators.add(int.parse(expression.substring(i + 1, i + 2)));
          }
        }
    }
    int a = 0, b = 1;
    for (int i = 0; i < numerators.length; i++) {
      a = (a * denominators[i]) + (numerators[i] * b);
      b *= denominators[i];
    }
    int gcd = a.abs().gcd(b);
    return '${a ~/ gcd}/${b ~/ gcd}';
  }
}

```