# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/4513005/](https://leetcode.com/problems/complex-number-multiplication/solutions/4513005/)

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
  String complexNumberMultiply(String num1, String num2) {
    final nS1 = num1.split('+');
    final nS2 = num2.split('+');
    final a1 = int.parse(nS1.first);
    final a2 = int.parse(nS2.first);
    final b1 = int.parse(nS1.last.substring(0, nS1.last.length - 1));
    final b2 = int.parse(nS2.last.substring(0, nS2.last.length - 1));
    final real = (a1 * a2) - (b1 * b2);
    final complex = (a1 * b2) + (a2 * b1);
    return '$real+${complex}i';
  }
}
```