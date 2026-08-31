# 🟢🔴🟢 1 Line Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/base-7/solutions/5828727/](https://leetcode.com/problems/base-7/solutions/5828727/)

---

# Intuition
The problem asks us to convert a given integer into its base 7 representation. In base 7, numbers are represented using digits from 0 to 6, similar to how base 10 uses digits from 0 to 9. 

Dart provides a built-in method `toRadixString()` which allows conversion of numbers to different bases, including base 7. This simplifies the task significantly.

# Approach
1. **Direct Conversion**:
   - Dart's `toRadixString(7)` can directly convert any integer to its base 7 representation.
   - We just need to call this method on the input integer and return the result.

2. **Edge Cases**:
   - If the number is zero, the result will be "0".
   - Negative numbers are handled automatically by `toRadixString()`, which includes the negative sign in the result.

# Complexity
- **Time Complexity**:  
  The time complexity is \\( O(\\log_7{n}) \\) where \\( n \\) is the input number. This is because the number of digits in the base 7 representation of a number is proportional to \\( \\log_7{n} \\).

- **Space Complexity**:  
  The space complexity is \\( O(\\log_7{n}) \\) since we need space to store the base 7 string representation, which has a length proportional to \\( \\log_7{n} \\).

# Code
```dart
class Solution {
  String convertToBase7(int num) => num.toRadixString(7);
}
