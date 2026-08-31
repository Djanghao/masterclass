# Dart

**Author:** ShahbozTuronov
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/3577575/](https://leetcode.com/problems/basic-calculator/solutions/3577575/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int calculate(String s) {

    final stack = <int>[];
    int num = 0;
    int result = 0;
    int sign = 1;

    for (final char in s.runes) {
      if (char >= 48 && char <= 57) {
        // char is a digit
        num = (num * 10) + (char - 48); // Convert digit character to integer
      } else if (char == 43 || char == 45) {
        // char is '+' or '-'
        result += sign * num;
        num = 0;
        sign = (char == 43) ? 1 : -1; // '+' = 43, '-' = 45
      } else if (char == 40) {
        // char is '('
        stack.add(result);
        stack.add(sign);
        result = 0;
        sign = 1;
      } else if (char == 41) {
        // char is ')'
        result += sign * num;
        num = 0;
        result *= stack.removeLast(); // sign
        result += stack.removeLast(); // previous result
      }
    }

    return result + (sign * num);
  }

}
```