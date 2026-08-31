# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/3896718/](https://leetcode.com/problems/strong-password-checker/solutions/3896718/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution{
int strongPasswordChecker(String s) {
  int missingType = 3;
  if (s.contains(RegExp(r'[a-z]'))) missingType--;
  if (s.contains(RegExp(r'[A-Z]'))) missingType--;
  if (s.contains(RegExp(r'[0-9]'))) missingType--;

  int change = 0;
  int one = 0, two = 0;
  int p = 2;

  while (p < s.length) {
    if (s[p] == s[p - 1] && s[p - 1] == s[p - 2]) {
      int length = 2;
      while (p < s.length && s[p] == s[p - 1]) {
        length++;
        p++;
      }
      change += length ~/ 3;
      if (length % 3 == 0) one++;
      else if (length % 3 == 1) two++;
    } else {
      p++;
    }
  }

  if (s.length < 6) {
    return max(missingType, 6 - s.length);
  } else if (s.length <= 20) {
    return max(missingType, change);
  } else {
    int deleteCount = s.length - 20;
    change -= min(deleteCount, one);
    change -= min(max(deleteCount - one, 0), two * 2) ~/ 2;
    change -= max(deleteCount - one - 2 * two, 0) ~/ 3;
    return deleteCount + max(missingType, change);
  }
}
}

```