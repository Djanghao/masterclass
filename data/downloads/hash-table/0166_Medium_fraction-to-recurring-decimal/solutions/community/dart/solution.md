# Cleanest solution

**Author:** fuz1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/4605528/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/4605528/)

---

# Intuition
The solution is based on a long division

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n + k) where k is the length of the repeating part

- Space complexity:
O(n)

# Code
```
class Solution {
    String fractionToDecimal(int numerator, int denominator) {
        final repMap = <int, int>{};
        final buffer = StringBuffer();
        final posNum = numerator.abs();
        final posDen = denominator.abs();

        if (numerator == 0) return '0';
        if (numerator * denominator < 0) buffer.write('-');

        int d = posNum ~/ posDen;
        int r = posNum % posDen;

        buffer.write(d);
        if (r != 0) buffer.write('.');

        while (r != 0) {
            final repInd = repMap[r];
            
            if (repInd != null) {
                r = 0;
                final s = buffer.toString();
                
                return '${s.substring(0, repInd)}(${s.substring(repInd)})';
            } else {
                repMap[r] = buffer.length;
            }

            r *= 10;
            d = r ~/ posDen;
            buffer.write(d);
            r = r % posDen;
        }

        return buffer.toString();
    }
}
```