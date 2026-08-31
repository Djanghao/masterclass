# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/4925244/](https://leetcode.com/problems/convert-to-base-2/solutions/4925244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
For Dart language, do not use the modulus operator (`%`) as this will always return a positive value. Instead, use `remainder()`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  String baseNeg2(int n) {
    if (n == 0) {
        return "0";
    } else {
        final List<String> digits = [];
        while (n != 0) {
            var remainder = n.remainder(-2);
            n = (n ~/ -2);
            if (remainder < 0) {
                remainder += 2;
                n++;
            }

            digits.add(remainder.toString());
        }

        return digits.reversed.join('');
    }
  }
}

```