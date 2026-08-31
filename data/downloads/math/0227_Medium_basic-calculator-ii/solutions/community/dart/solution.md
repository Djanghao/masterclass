# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/4485004/](https://leetcode.com/problems/basic-calculator-ii/solutions/4485004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int calculate(String s) {
    List<int> stack = [];
    var curNum = 0;
    var op = '+';
    for (int i = 0; i < s.length; i++) {
        if (s[i].isNumeric) {
            curNum = (curNum * 10) + int.parse(s[i]);
        }

        if (!s[i].isNumeric && s[i] != ' ' || i == s.length - 1) {
            if (op == '+') {
                stack.add(curNum);
            } else if (op == '-') {
                stack.add(-curNum);
            } else if (op == '*') {
                final val = stack.removeLast();
                stack.add(curNum * val);
            } else if (op == '/') {
                final val = stack.removeLast();
                stack.add(val ~/ curNum);
            }
            curNum = 0;
            op = s[i];
        }
    }
    return stack.fold<int>(0, (a, b) => a + b);
  }
}

extension StringX on String {
    bool get isNumeric => num.tryParse(this) == null ? false : true;
}
```