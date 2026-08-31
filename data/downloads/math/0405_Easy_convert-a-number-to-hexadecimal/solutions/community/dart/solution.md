# 🟢🔴🟢 2 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/5821176/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/5821176/)

---

# Intuition
When converting a number to its hexadecimal representation, we can leverage Dart's built-in functionality to handle the conversion efficiently. A number in hexadecimal uses a base-16 format. The problem includes handling both positive and negative numbers, where negative numbers must be represented using two's complement.

# Approach
1. **Handle Negative Numbers**:  
   In Dart, negative integers can be converted to their unsigned 32-bit equivalent using a bitwise AND operation with `0xFFFFFFFF`. This ensures that negative numbers are treated in two's complement format.
   
2. **Convert to Hexadecimal**:  
   Dart provides the `toRadixString(16)` method, which directly converts an integer into its hexadecimal string representation.

3. **Edge Cases**:  
   - If the number is 0, the hexadecimal result is `"0"`.
   - Negative numbers are handled by the bitwise AND operation, which gives the correct two's complement representation.

# Complexity
- **Time Complexity**:  
  The time complexity is $$O(\\log(n))$$ because converting a number to a different base is proportional to the number of digits in that base. For base 16, this is logarithmic in terms of the input size.
  
- **Space Complexity**:  
  The space complexity is $$O(1)$$, as we are only using a constant amount of space to store the result string.

# Code
```dart
class Solution {
  String toHex(int num) {
    if (num < 0) num &= 0xFFFFFFFF; // Handle negative numbers using bitwise AND
    return num.toRadixString(16);   // Convert to hexadecimal using Dart's built-in method
  }
}
