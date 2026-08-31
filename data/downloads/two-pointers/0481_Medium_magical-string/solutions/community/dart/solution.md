# Dart solution

**Author:** matheusccarmo
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/6109981/](https://leetcode.com/problems/magical-string/solutions/6109981/)

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
```dart []
class Solution {
  int magicalString(int n) {
    if (n < 4) return 1;
    String magicalString = '122';
    int count = 1;
    int i = 2;
    String last = magicalString[magicalString.length - 1];
    while (i < n - 1) {
      if (magicalString[i] == '1') {
        if (last == '1') {
          magicalString += '2';
        } else {
          magicalString += '1';
          if (magicalString.length - 1 < n) {
            count++;
          }
        }
      } else {
        if (last == '1') {
          magicalString += '22';
        } else {
          magicalString += '11';
          if (magicalString.length - 1 == n) {
            count++;
          } else if (magicalString.length - 1 < n) {
            count += 2;
          }
        }
      }

      last = magicalString[magicalString.length - 1];
      i++;
    }

    return count;
  }
}
```