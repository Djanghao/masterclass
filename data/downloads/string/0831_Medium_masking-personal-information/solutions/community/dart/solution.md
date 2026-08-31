# Simple solution on Dart | O(N)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/5853012/](https://leetcode.com/problems/masking-personal-information/solutions/5853012/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String maskPII(String s) {
    if (s.contains('@')) {
        int indexSymbal = s.indexOf('@');
        s = '${s[0]}*****${s[indexSymbal - 1]}${s.substring(indexSymbal, s.length)}';
    } else {
        String numberPhone = s.replaceAll(RegExp('[^0-9]'), '');
        if (numberPhone.length <= 10) {
            s = '***-***-${numberPhone.substring(numberPhone.length - 4, numberPhone.length)}';
        } else {
            s = '+${'*' * (numberPhone.length - 10)}-***-***-${numberPhone.substring(numberPhone.length - 4, numberPhone.length)}';
        }
    }

    return s.toLowerCase();
  }
}
```