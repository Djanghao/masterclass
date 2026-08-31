# Dart Solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/5855546/](https://leetcode.com/problems/hamming-distance/solutions/5855546/)

---

# Intuition
The Hamming distance between two integers is the number of positions at which the corresponding bits are different. To find the Hamming distance, the idea is to first compute the XOR (^) of the two integers, which will highlight the positions where the bits differ (as 1), and then count the number of 1s in the result.

# Approach
1. XOR the two numbers: The XOR operation will return a number where each bit is 1 if the corresponding bits of x and y are different, and 0 if they are the same.
2. Count the number of 1s in the result:
2.2. Iterate through the bits of the XOR result by repeatedly dividing the result by 2 (right shift) and checking the remainder.
2.3. For every remainder that is 1, increment the result.
3. Return the final count of differing bits, which is the Hamming distance.

# Complexity
- Time complexity:
The time complexity depends on the number of bits in the XOR result, which in turn depends on the size of the integers. In the worst case, this takes \uD835\uDC42(log\u2061(max(\uD835\uDC65,\uD835\uDC66))) since we repeatedly divide the number by 2.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int hammingDistance(int x, int y) {
    int result = 0;
    int xor = x ^ y;
    while (xor > 0) {
      final remainder = xor % 2;
      result += remainder;
      xor ~/= 2;
    }
    return result;
  }
}
```